import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import CostSection from './components/CostSection';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Industries from './components/Industries';
import ClientsBar from './components/ClientsBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Hero2 from './components/Hero2';
import AvisoPrivacidad from './pages/AvisoPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';

function Landing() {
  return (
    <>
      <Hero />
      <ClientsBar />
      <CostSection />
      <Services />
      {/* <WhyUs /> */}
      <Process />
      <Industries />
      <Contact />
    </>
  );
}

function Landing2() {
  return (
    <>
      <Hero2 />
      <ClientsBar />
      <CostSection />
      <Services />
      <Process />
      <Industries />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing2" element={<Landing2 />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
