import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12 sm:h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image src="/benyville-icon.png" alt="BenyVille Homes" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-foreground">BenyVille Homes</span>
            </div>
            <nav className="flex items-center gap-4">
              <div className="hidden md:flex gap-8">
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              </div>
              <MobileNav />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero - Logo fills screen, tight spacing */}
      <section className="relative h-auto sm:h-screen flex flex-col overflow-hidden bg-background">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-backdrop.png)' }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-1 flex-col justify-start sm:justify-end min-h-0">
          <div className="relative w-full h-[58vh] min-h-0 sm:h-auto sm:flex-1 sm:absolute sm:inset-0 sm:z-[1]">
            <Image
              src="/images/hero-logo.png"
              alt="BenyVille Homes - Real Estate redefined"
              fill
              className="object-contain object-top sm:object-cover sm:object-top"
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-1 pb-2 sm:pt-0 sm:pb-3 shrink-0">
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg">
                <a href="#services">Explore Services</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-background/95 rounded-full">
                <a href="#contact">Get Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: All 3 paragraphs on one image */}
      <section className="relative min-h-[45vh] py-10 sm:py-14 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-benyville-team.png"
          alt="BenyVille Homes"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed drop-shadow-md">
            At BenyVille, we primarily strive to reduce the housing deficit in Nigeria by building homes at high standards and selling them at fair price points.
          </p>
          <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed drop-shadow-md">
            We are committed to transforming your dreams into reality with our exceptional service and expertise. With years of experience under our belt, we pride ourselves on our integrity and professionalism.
          </p>
          <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed drop-shadow-md">
            Whether you are searching for your ideal home or lucrative investment opportunities in the Nigerian real estate market, we deliver tremendous value and results.
          </p>
        </div>
      </section>

      {/* Section 2: Our Services on image */}
      <section id="services" className="relative min-h-[45vh] py-10 sm:py-14 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/section-exhibition.png"
          alt="BenyVille Homes services"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl mb-1">🏗️</div>
              <h3 className="font-bold text-white text-sm mb-0.5">Estate Development</h3>
              <p className="text-white/90 text-xs leading-snug">
                Strategic land development with modern infrastructure and sustainable planning.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl mb-1">🏠</div>
              <h3 className="font-bold text-white text-sm mb-0.5">Construction</h3>
              <p className="text-white/90 text-xs leading-snug">
                High-quality construction with attention to detail and timely delivery.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
              <div className="text-xl mb-1">🔑</div>
              <h3 className="font-bold text-white text-sm mb-0.5">Property Management</h3>
              <p className="text-white/90 text-xs leading-snug">
                Professional management for optimal performance and maximum returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Get in Touch on image */}
      <section id="contact" className="relative min-h-[45vh] py-10 sm:py-14 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/section-building.png"
          alt="BenyVille Homes contact"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">
            Get In Touch
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <Phone className="text-white w-5 h-5 mx-auto mb-1" />
              <h3 className="font-bold text-white text-xs mb-0.5">Phone</h3>
              <a href="tel:+2349137667618" className="text-white/95 text-xs hover:underline block truncate">+2349137667618</a>
              <a href="tel:+2348100266115" className="text-white/80 text-xs hover:underline block truncate">+2348100266115</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <MapPin className="text-white w-5 h-5 mx-auto mb-1" />
              <h3 className="font-bold text-white text-xs mb-0.5">Location</h3>
              <p className="text-white/95 text-xs">1 Kudang St, Wuse 2, Abuja</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <Facebook className="text-white w-5 h-5 mx-auto mb-1" />
              <h3 className="font-bold text-white text-xs mb-0.5">Facebook</h3>
              <a href="https://www.facebook.com/share/1KxzeftX2p/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/95 text-xs hover:underline">Follow us</a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <Instagram className="text-white w-5 h-5 mx-auto mb-1" />
              <h3 className="font-bold text-white text-xs mb-0.5">Instagram</h3>
              <a href="https://www.instagram.com/benyvillehomes?igsh=cHl5OGN3bWFrejRq" target="_blank" rel="noopener noreferrer" className="text-white/95 text-xs hover:underline">Follow us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image src="/benyville-icon.png" alt="BenyVille Homes" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold">BenyVille Homes</span>
            </div>
            <p className="text-center md:text-right text-sm opacity-80">
              © 2026 BenyVille Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
