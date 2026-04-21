import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data to get you started before you connect Supabase
const MOCK_REQUESTS = [
  { 
    id: 1, 
    title: 'Need help with gardening', 
    category: 'Services', 
    location: 'Tavua', 
    description: 'Looking for someone to help clear a small patch for planting vegetables. Would be grateful for a few hours of help this weekend.',
    postedBy: 'Mere K.',
    postedDate: '2 days ago',
    helpersCount: 3
  },
  { 
    id: 2, 
    title: 'Looking for a spare kettle', 
    category: 'Material Goods', 
    location: 'Ba', 
    description: 'Ours broke this morning, happy to borrow or trade. Need it for making tea for the family.',
    postedBy: 'Jone T.',
    postedDate: '1 day ago',
    helpersCount: 1
  },
  { 
    id: 3, 
    title: 'Help with school fees', 
    category: 'Financial', 
    location: 'Suva', 
    description: 'Struggling to pay my daughter\'s school fees this term. Any assistance would be deeply appreciated.',
    postedBy: 'Salote M.',
    postedDate: '3 hours ago',
    helpersCount: 5
  },
  { 
    id: 4, 
    title: 'Need ride to hospital', 
    category: 'Services', 
    location: 'Nadi', 
    description: 'Need transportation to hospital for medical appointment next Tuesday morning. Can contribute to fuel.',
    postedBy: 'Tevita L.',
    postedDate: '5 hours ago',
    helpersCount: 2
  },
  { 
    id: 5, 
    title: 'Looking for emotional support', 
    category: 'Support', 
    location: 'Lautoka', 
    description: 'Going through a difficult time and would appreciate someone to talk to. Just need a listening ear.',
    postedBy: 'Ana S.',
    postedDate: '1 day ago',
    helpersCount: 4
  },
  { 
    id: 6, 
    title: 'Need food for family gathering', 
    category: 'Material Goods', 
    location: 'Labasa', 
    description: 'Hosting extended family this weekend. Could use help with some food items or ingredients.',
    postedBy: 'Ratu P.',
    postedDate: '4 days ago',
    helpersCount: 7
  },
];

const CATEGORIES = [
  { name: 'All', color: 'default' },
  { name: 'Financial', color: 'primary' },
  { name: 'Material Goods', color: 'accent' },
  { name: 'Services', color: 'secondary' },
  { name: 'Support', color: 'default' },
];

export default function RequestListingPage() {
  const [filter, setFilter] = useState('All');

  const filteredRequests = filter === 'All' 
    ? MOCK_REQUESTS 
    : MOCK_REQUESTS.filter(req => req.category === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Kerekere</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">My Requests</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Post Kerekere
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Community Requests</h1>
          <p className="text-lg text-muted-foreground">
            Browse kerekere requests from your community and offer help where you can
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <Button 
              key={cat.name} 
              variant={filter === cat.name ? 'default' : 'outline'}
              onClick={() => setFilter(cat.name)}
              className={filter === cat.name ? 'bg-primary text-primary-foreground' : 'text-foreground border-border'}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 border-border bg-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{filteredRequests.length}</p>
                <p className="text-sm text-muted-foreground">Active Requests</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-border bg-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {filteredRequests.reduce((sum, req) => sum + req.helpersCount, 0)}
                </p>
                <p className="text-sm text-muted-foreground">People Helping</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-border bg-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {new Set(filteredRequests.map(r => r.location)).size}
                </p>
                <p className="text-sm text-muted-foreground">Locations</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Requests Grid */}
        {filteredRequests.length === 0 ? (
          <Card className="p-12 text-center border-border bg-card">
            <p className="text-muted-foreground text-lg">No requests found in this category</p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="p-6 hover:shadow-lg transition-all border-border bg-card group">
                <div className="flex items-start justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {request.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Users className="h-4 w-4" />
                    <span>{request.helpersCount}</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {request.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {request.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{request.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      by {request.postedBy} • {request.postedDate}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Help Out
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
