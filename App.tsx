import { ThemeProvider } from './components/ThemeContext';
import SEOHandler from './components/SEOHandler';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import AboutIUL from './components/AboutIUL';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import BookingCalendar from './components/BookingCalendar';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <ThemeProvider>
      {/* Dynamic SEO Meta & Structured Data Handler */}
      <SEOHandler />

      {/* Main Layout Container */}
      <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-zinc-100 font-sans antialiased transition-colors duration-300">
        
        {/* Fixed Header / Navigation */}
        <Navbar />

        {/* Content sections limited to max-w-7xl (1200px equivalent padding container) as requested */}
        <main className="w-full">
          {/* Hero Presentation Section */}
          <Hero />

          {/* Core Values / Benefits */}
          <Benefits />

          {/* Interactive Educational Section (Simulator) */}
          <AboutIUL />

          {/* Customer Reviews & Social Proof */}
          <Testimonials />

          {/* Interactive Scheduling Center (Local Calendar & Calendly representation) */}
          <BookingCalendar />

          {/* FAQ Accordion Section */}
          <FAQ />

          {/* Trust CTA section */}
          <CTA />

          {/* Contact form & Google Maps */}
          <ContactForm />
        </main>

        {/* Comprehensive Footer */}
        <Footer />

        {/* Floating WhatsApp Bubble */}
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
