import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/mobile-nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <Image src="/benyville-icon.png" alt="BenyVille Homes" width={32} height={32} className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-foreground">BenyVille Homes</span>
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

      {/* Hero Section - BenyVille logo with buttons underneath tagline */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-backdrop.png)' }}
          aria-hidden
        />
        {/* Mobile: logo and buttons stack with minimal gap */}
        <div className="relative z-10 flex flex-1 flex-col justify-between sm:justify-end">
          <div className="relative w-full flex-1 min-h-[40vh] sm:min-h-0 sm:absolute sm:inset-0 sm:z-[1]">
            <Image
              src="/images/hero-logo.png"
              alt="BenyVille Homes - Real Estate redefined"
              fill
              className="object-contain object-top sm:object-cover sm:object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 pb-8 sm:pt-0 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#services">Explore Services</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-background/95">
                <a href="#contact">Get Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Section 1 - Team */}
      <section className="relative min-h-[70vh] py-24 sm:py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-benyville-team.png"
          alt="BenyVille Homes team at construction site"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white text-balance leading-relaxed drop-shadow-lg">
            At BenyVille, we primarily strive to reduce the housing deficit in Nigeria by building homes at high standards and selling them at fair price points.
          </p>
        </div>
      </section>

      {/* Copy Section 2 - Exhibition */}
      <section className="relative min-h-[70vh] py-24 sm:py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/section-exhibition.png"
          alt="BenyVille Homes exhibition booth"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white text-balance leading-relaxed drop-shadow-lg">
            We are committed to transforming your dreams into reality with our exceptional service and expertise. With years of experience under our belt, we pride ourselves on our integrity and professionalism.
          </p>
        </div>
      </section>

      {/* Copy Section 3 - Building */}
      <section className="relative min-h-[70vh] py-24 sm:py-32 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/section-building.png"
          alt="Modern residential building by BenyVille Homes"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white text-balance leading-relaxed drop-shadow-lg">
            Whether you are searching for your ideal home or lucrative investment opportunities in the Nigerian real estate market, we deliver tremendous value and results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive real estate solutions tailored for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Estate Development</h3>
              <p className="text-muted-foreground">
                Strategic land development with modern infrastructure and sustainable planning for thriving communities.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Construction</h3>
              <p className="text-muted-foreground">
                High-quality construction services with attention to detail, timely delivery, and excellent craftsmanship.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔑</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Property Management</h3>
              <p className="text-muted-foreground">
                Professional property management ensuring optimal performance and maximum returns on your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-foreground">Years of proven expertise in Abuja real estate market</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-foreground">Transparent and honest business practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-foreground">Affordable pricing without compromising quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-foreground">Dedicated customer support team</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground">Properties Sold</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-foreground">Years Experience</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-foreground">Happy Clients</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-foreground">Active Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to find your dream property? Contact us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone 1 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+2349137667618" className="text-primary hover:text-primary/80 transition-colors">
                +2349137667618
              </a>
              <p className="text-muted-foreground text-sm mt-2">
                Alternative:{' '}
                <a href="tel:+2348100266115" className="text-primary hover:text-primary/80 transition-colors">
                  +2348100266115
                </a>
              </p>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground">
                1 Kudang Street, Wuse 2, Abuja
              </p>
            </div>

            {/* Facebook */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Facebook</h3>
              <a href="https://www.facebook.com/share/1KxzeftX2p/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Follow us on Facebook
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Instagram</h3>
              <a href="https://www.instagram.com/benyvillehomes?igsh=cHl5OGN3bWFrejRq" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                Follow us on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
