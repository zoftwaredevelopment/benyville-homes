import { Phone, MapPin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6">
              ...Real Estate redefined
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Quality & Affordable Properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Properties
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
                <a href="#contact">Get Consultation</a>
              </Button>
            </div>
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone 1 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+2349137667618" className="text-primary hover:text-primary/80 transition-colors">
                +234 (0) 901 234 5678
              </a>
              <p className="text-muted-foreground text-sm mt-2">Alternative: +234 (0) 8100266115</p>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:email@example.com" className="text-primary hover:text-primary/80 transition-colors">
                email@example.com
              </a>
              <p className="text-muted-foreground text-sm mt-2">Response within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground">
                Abuja, Nigeria
              </p>
              <p className="text-muted-foreground text-sm mt-2">Central business district</p>
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
              © 2026 ...Real Estate redefined. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
