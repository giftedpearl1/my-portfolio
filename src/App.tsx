import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  ExternalLink,
  Zap,
  Target,
  Search,
  ArrowUpRight,
  Quote,
  Sparkles,
  ShieldCheck,
  ZapIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Meet Gift", href: "#about" },
    { name: "How I Help", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Recent Work", href: "#work" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-md border-b py-3 shadow-sm" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Code2 className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight">Gift Lawrence</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Grow Your Business
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full" onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Let's Grow Your Business
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 text-primary bg-primary/5">
              Smart Websites • Automation • Business Growth
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Turn Your Website Into a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                24/7 Sales Machine
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I help business owners automate their growth with smart websites and simple tools that handle the heavy lifting while you focus on what you love.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Help Me Get More Customers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Meet Gift Lawrence
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PersonalBrand = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Elegant Image Container */}
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-background relative group">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/attachments/fa207711-c3c3-4660-8370-6c98943f5737/1778064562193_file_0000000021f07243a4e4e36947e043ca.png" 
                  alt="Gift Lawrence" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Decorative floating card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-background p-5 rounded-2xl shadow-2xl border flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-base leading-none mb-1">Results Driven</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Business Expert</p>
                </div>
              </motion.div>

              {/* Decorative floating card 2 - Mobile Hidden */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-1/4 -left-10 bg-primary p-4 rounded-2xl shadow-xl text-primary-foreground hidden md:flex flex-col items-center justify-center gap-1 z-20"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Premium</span>
              </motion.div>
            </div>

            {/* Background design element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-primary/10 rounded-[3rem] -z-10 rotate-12" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-[4rem] -z-20 -rotate-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Badge className="mb-6 px-4 py-1">Meet Gift Lawrence</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15] tracking-tight">
              I help businesses get <span className="text-primary">more customers</span> and run more smoothly.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Instead of handling everything manually, I create simple systems that help businesses respond faster, organize customer requests, and make work easier.
              </p>
              <p>
                From online booking to automated customer replies, I build solutions that help businesses save time, reduce stress, and grow better.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/10" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Make My Business Easier
                  <ZapIcon className="ml-2 w-5 h-5 fill-current" />
                </Button>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-muted/50 border border-border/50">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">Joined by 50+ owners</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <ArrowUpRight className="w-10 h-10 text-primary" />,
      title: "Turn visitors into paying customers",
      description: "Get a professional online presence that doesn't just look good—it builds trust and guides visitors to take action.",
      badge: "Business Website"
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-green-500" />,
      title: "Reply to customers faster even offline",
      description: "Never miss a lead again. I set up smart automation that answers common questions and captures leads 24/7.",
      badge: "Smart Replies"
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500" />,
      title: "Let customers book easily",
      description: "Stop the back-and-forth phone calls. Let your customers book your services instantly through WhatsApp or your site.",
      badge: "Easy Booking"
    },
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Guide customers from interest to payment",
      description: "Build a smooth journey for your customers so they can find what they need and pay you without any confusion.",
      badge: "Growth Systems"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple Solutions for Big Growth</h2>
          <p className="text-xl text-muted-foreground">
            I don't just build websites; I build systems that solve your business bottlenecks and help you focus on what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 w-fit rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="mb-4">{service.badge}</Badge>
                  <h3 className="text-xl font-bold mb-4 leading-tight">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Understand The Problem",
      desc: "First, we look at the areas where your business is losing time, customers, or opportunities."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Build The Solution",
      desc: "I create the website and tools your business needs to make things easier and more organized."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Grow Smarter",
      desc: "With better systems in place, your business can respond faster, serve customers better, and run more smoothly."
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-primary-foreground/80">
            A simple three-step process to transform your business from manual to automated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="mb-8 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                {step.desc}
              </p>
              {i < 2 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-white/20 to-transparent -ml-6" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to start?</h3>
            <p className="text-primary-foreground/70">Let's build a system that works for you.</p>
          </div>
          <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Build My Business System
          </Button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Automated Customer Flow",
      category: "Automation",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9c507cfd-d17b-4965-bda5-ba75d7e15a8a/smart-business-system-7d62fd80-1778064061157.webp",
      desc: "Built a system that captured 65% more leads by making it easier for customers to book instantly."
    },
    {
      title: "Smart Business Dashboard",
      category: "Web Tool",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9c507cfd-d17b-4965-bda5-ba75d7e15a8a/business-automation-dashboard-10adf184-1778064060907.webp",
      desc: "A custom tool that helps a local business track every customer request without losing track of messy emails."
    },
    {
      title: "High-Performance Website",
      category: "Web Development",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9c507cfd-d17b-4965-bda5-ba75d7e15a8a/web-development-image-29899bbd-1778052169394.webp",
      desc: "A fast, professional site that turned a struggling brand into a market leader with double the sales."
    }
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge className="mb-4">Recent Work</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Results for Real Businesses</h2>
            <p className="text-xl text-muted-foreground">A look at some of the systems I've built to help business owners win back their time.</p>
          </div>
          <Button variant="outline" className="h-12">View More Work</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-lg">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Button variant="secondary" size="sm" className="rounded-full px-6">
                    See the Result <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Badge variant="outline" className="mb-3 border-primary/20 text-primary">{p.category}</Badge>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus Thorne",
      role: "Local Business Owner",
      text: "Before working with Gift, I was manually answering every message. Now, my system handles bookings while I sleep. It's like having a 24/7 employee.",
      avatar: "MT"
    },
    {
      name: "Linda Richards",
      role: "Founder, GreenSpace",
      text: "The website Gift built actually makes me money. Customers find what they need and pay without me ever picking up the phone. Game changer.",
      avatar: "LR"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">What Business Owners Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <Card key={i} className="border-none shadow-xl bg-background overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote className="w-24 h-24" />
              </div>
              <CardContent className="p-10 relative z-10">
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(5)].map((_, star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic mb-8 leading-relaxed text-foreground/90 font-medium">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center font-bold text-primary-foreground text-xl">
                    {r.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{r.name}</h4>
                    <p className="text-muted-foreground">{r.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-primary-foreground">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Running Your Business Shouldn’t Feel Stressful
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 leading-relaxed">
            Many businesses lose customers because things are too manual and unorganized. 
            Let’s build a system that helps your business work smarter and grow better.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold w-full sm:w-auto shadow-xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let’s Build Your System
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white/20 text-white hover:bg-white/10 w-full sm:w-auto" onClick={() => window.location.href='#'}>
              See Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! I'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-12 md:p-16 bg-muted/50">
              <Badge className="mb-6">Contact Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Let's Fix Your Customer Flow</h2>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                Send me a message and let's discuss how we can make your business easier to run and faster to grow.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Free 30-min Strategy Call</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">Clear Action Plan Included</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">No Technical Jargon</span>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-border/50">
                <p className="text-sm font-bold uppercase tracking-wider mb-6 opacity-60">Direct Chat</p>
                <Button className="bg-[#25D366] hover:bg-[#20bd5c] text-white border-none h-14 w-full text-lg shadow-lg shadow-green-500/20">
                  <MessageSquare className="mr-3 w-6 h-6" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-70">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-70">Your Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 rounded-2xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-70">What part of your business is most stressful?</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me what's slowing you down..."
                    className="w-full px-5 py-4 rounded-2xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-lg" 
                  />
                </div>
                <Button type="submit" className="w-full h-16 text-xl shadow-xl shadow-primary/20" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Your Request..." : "Let’s Grow My Business"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Code2 className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight">Gift Lawrence</span>
          </div>
          
          <div className="flex gap-10 text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
          
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Gift Lawrence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Toaster position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <PersonalBrand />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}