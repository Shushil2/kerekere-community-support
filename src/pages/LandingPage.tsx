
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, HandHeart, Shield, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Kerekere</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">About</Button>
            <Button variant="ghost" className="text-foreground">How It Works</Button>
            <Button variant="outline" className="text-foreground border-border">Sign In</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Bula! Welcome to <span className="gradient-ocean bg-clip-text text-transparent">Kerekere</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A platform built on the Fijian tradition of kerekere - asking for help when you need it, 
              and offering support to those who do. Together, we strengthen our community.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ask for Help <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground">
                Offer Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How Kerekere Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to practice the beautiful tradition of kerekere in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">Share Your Need</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Post a kerekere request describing what you need - whether it's financial help, 
                  material goods, services, or emotional support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-foreground">Community Responds</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Community members see your request and offer help in whatever way they can, 
                  keeping the spirit of kerekere alive
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-foreground">Build Trust</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Track fulfilled requests and build a reputation of giving and receiving, 
                  strengthening community bonds
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Types of Kerekere</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever your need, our community is here to help
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Financial', desc: 'Help with bills, emergencies, or unexpected expenses', color: 'primary' },
              { title: 'Material Goods', desc: 'Food, clothing, household items, or equipment', color: 'accent' },
              { title: 'Services', desc: 'Transportation, childcare, repairs, or skills', color: 'secondary' },
              { title: 'Support', desc: 'Emotional support, advice, or companionship', color: 'primary' }
            ].map((category, idx) => (
              <Card key={idx} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-foreground">{category.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{category.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-foreground">
                    Browse Requests <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need help or want to offer it, Kerekere brings Fijians together 
            in the spirit of mutual support and care
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Create Your Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Kerekere</span>
              </div>
              <p className="text-muted-foreground">
                Strengthening Fijian communities through mutual support
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Browse Requests</a></li>
                <li><a href="#" className="hover:text-primary">Post Kerekere</a></li>
                <li><a href="#" className="hover:text-primary">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Guidelines</a></li>
                <li><a href="#" className="hover:text-primary">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Kerekere. Built with love for the Fijian community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}