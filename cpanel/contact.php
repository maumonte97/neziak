<?php
// ============================================
// NEZIAK - Contact Form API
// Subir a: public_html/api/contact.php
// Recibe leads del form de contacto y WhatsApp
// ============================================

// CORS - Permitir peticiones desde la landing
$allowed_origins = [
    'https://neziak.vercel.app',
    'https://www.neziak.com.mx',
    'https://neziak.com.mx',
    'http://localhost:3000'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Leer JSON
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos inválidos']);
    exit;
}

// Detectar fuente: 'contacto' o 'whatsapp'
$source = htmlspecialchars(strip_tags($input['source'] ?? 'contacto'));

// Campos requeridos según fuente
$required = ['nombre', 'empresa', 'telefono'];
if ($source === 'contacto') {
    $required[] = 'servicio';
    $required[] = 'urgencia';
}

foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Campo requerido: $field"]);
        exit;
    }
}

// Sanitizar campos comunes
$nombre   = htmlspecialchars(strip_tags($input['nombre']));
$empresa  = htmlspecialchars(strip_tags($input['empresa']));
$telefono = htmlspecialchars(strip_tags($input['telefono']));
$email    = htmlspecialchars(strip_tags($input['email'] ?? ''));
$mensaje  = htmlspecialchars(strip_tags($input['mensaje'] ?? ''));

// Campos del form de contacto
$cargo    = htmlspecialchars(strip_tags($input['cargo'] ?? ''));
$servicio = htmlspecialchars(strip_tags($input['servicio'] ?? ''));
$urgencia = htmlspecialchars(strip_tags($input['urgencia'] ?? ''));

// UTM
$utm_source   = htmlspecialchars(strip_tags($input['utm_source'] ?? ''));
$utm_medium   = htmlspecialchars(strip_tags($input['utm_medium'] ?? ''));
$utm_campaign = htmlspecialchars(strip_tags($input['utm_campaign'] ?? ''));
$utm_term     = htmlspecialchars(strip_tags($input['utm_term'] ?? ''));
$utm_content  = htmlspecialchars(strip_tags($input['utm_content'] ?? ''));
$gclid        = htmlspecialchars(strip_tags($input['gclid'] ?? ''));
$page_url     = htmlspecialchars(strip_tags($input['page_url'] ?? ''));

// Configuración de email
$to = 'ventas@neziak.com.mx, sergio.viera@mercanaut.mx';

if ($source === 'whatsapp') {
    $subject = "[WhatsApp] Nuevo lead de $empresa - $nombre";
    $badge = "<span style='background:#25D366;color:#fff;padding:4px 12px;border-radius:12px;font-size:13px;'>WhatsApp</span>";
} else {
    $subject = $urgencia === 'si'
        ? "[URGENTE] Nueva solicitud de $empresa - $servicio"
        : "Nueva solicitud de $empresa - $servicio";
    $badge = $urgencia === 'si'
        ? "<span style='background:#dc2626;color:#fff;padding:4px 12px;border-radius:12px;font-size:13px;'>Urgente</span>"
        : "<span style='background:#0063a2;color:#fff;padding:4px 12px;border-radius:12px;font-size:13px;'>Formulario</span>";
}

// Filas de la tabla según los datos disponibles
$rows = "";
$i = 0;
$fields = [
    'Nombre' => $nombre,
    'Empresa' => $empresa,
    'Cargo' => $cargo,
    'Email' => $email,
    'Teléfono' => $telefono,
    'Servicio' => $servicio,
    'Urgencia' => $urgencia,
    'Mensaje' => $mensaje,
];

foreach ($fields as $label => $value) {
    if (empty($value)) continue;
    $bg = ($i % 2 === 0) ? "background:#f8f9fa;" : "";
    $extra = ($label === 'Urgencia' && $urgencia === 'si') ? "color:red;font-weight:bold;" : "";
    $rows .= "<tr style='$bg'>
        <td style='padding:10px;font-weight:bold;border:1px solid #ddd;'>$label</td>
        <td style='padding:10px;border:1px solid #ddd;$extra'>$value</td>
    </tr>";
    $i++;
}

// UTM section
$utm_rows = "";
$utm_fields = [
    'UTM Source' => $utm_source,
    'UTM Medium' => $utm_medium,
    'UTM Campaign' => $utm_campaign,
    'UTM Term' => $utm_term,
    'UTM Content' => $utm_content,
    'GCLID' => $gclid,
    'Página' => $page_url,
];
$has_utm = false;
foreach ($utm_fields as $label => $value) {
    if (empty($value)) continue;
    $has_utm = true;
    $utm_rows .= "<tr><td style='padding:6px;border:1px solid #ddd;'>$label</td><td style='padding:6px;border:1px solid #ddd;'>$value</td></tr>";
}

// Cuerpo HTML
$body = "
<html>
<body style='font-family: Arial, sans-serif; color: #333;'>
<h2 style='color: #0063a2;'>Nueva Solicitud de Contacto $badge</h2>
<table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
    $rows
</table>
" . ($has_utm ? "
<h3 style='color: #706f6f; margin-top: 20px;'>Datos de campaña</h3>
<table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
    $utm_rows
</table>
" : "") . "
</body>
</html>
";

// Headers del email
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: NEZIAK Landing <noreply@neziak.com.mx>\r\n";
$headers .= "Reply-To: $nombre <noreply@neziak.com.mx>\r\n";

// Enviar
$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email enviado']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo enviar el email']);
}
