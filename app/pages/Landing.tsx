"use client"

import { ReactNode } from "react";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, ChevronDown, Lock, ShieldCheck, Zap } from "lucide-react"
import heroDashboard from '@/public/hero-dashboard.png'
import defiVisualization from '@/public/defi-visualisation.png'
import NavBar from "../components/landing/NavBar";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
        <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Decentralized Finance for the Modern Investor
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Access the future of finance with our secure, transparent, and user-friendly DeFi platform. Earn, borrow,
              and grow your crypto assets with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <div className="inline-flex items-center bg-gray-400 text-black px-6 py-3 rounded-lg font-bold transition-colors hover:bg-gray-400/80 gap-2">
                Start Investing <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-1">
              <div className="bg-black rounded-xl overflow-hidden">
                <Image
                  src={heroDashboard}
                  width={1200}
                  height={600}
                  alt="DeFi Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-foreground/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
                  About BKR DeFi
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Decentralized Finance</h2>
                <p className="text-muted-foreground mb-6">
                  BKR DeFi was built on the principle that financial services should be open, transparent, and accessible
                  to everyone. Our platform eliminates intermediaries, reduces costs, and provides opportunities
                  previously unavailable to most investors.
                </p>
                <p className="text-muted-foreground mb-6">
                  With a focus on security, usability, and innovation, we're creating a new standard for DeFi platforms
                  that anyone can use - regardless of their technical expertise.
                </p>
                <div className="flex gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">$2B+</div>
                    <div className="text-sm text-muted-foreground">Total Value Locked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">100K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Supported Chains</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl -rotate-6 transform"></div>
                <Image
                  src={defiVisualization}
                  width={800}
                  height={600}
                  alt="DeFi Platform Visualization"
                  className="relative rounded-xl shadow-lg z-10"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-gray-400/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
                Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Succeed in DeFi</h2>
              <p className="text-muted-foreground">
                Our platform combines powerful features with an intuitive interface, making decentralized finance
                accessible to everyone.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-primary" />}
                title="Yield Farming"
                description="Maximize your returns with our optimized yield farming strategies across multiple chains and protocols."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <FeatureCard
                icon={<Lock className="h-10 w-10 text-primary" />}
                title="Secure Staking"
                description="Stake your assets securely and earn passive income with competitive APY rates and minimal risk."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Flash Loans"
                description="Access instant, uncollateralized loans for arbitrage opportunities and other advanced strategies."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                title="Insurance Protection"
                description="Optional coverage for your deposits against smart contract vulnerabilities and hacks."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.5}>
              <FeatureCard
                icon={<ChevronDown className="h-10 w-10 text-primary" />}
                title="Low Gas Fees"
                description="Layer 2 integration and gas optimization to minimize transaction costs and maximize efficiency."
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <FeatureCard
                icon={<BarChart2 className="h-10 w-10 text-primary" />}
                title="Portfolio Analytics"
                description="Comprehensive analytics dashboard to track performance, profitability, and asset allocation."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-gray-400/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Steps to Start Your DeFi Journey</h2>
              <p className="text-muted-foreground">
                Getting started with BKR DeFi is easy, even if you're new to decentralized finance. Follow these simple
                steps to begin.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2">
            <ScrollAnimation delay={0.1}>
              <div className="bg-black p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Connect Your Wallet</h3>
                <p className="text-muted-foreground">
                  Link your preferred crypto wallet to BKR DeFi with a single click. We support MetaMask, WalletConnect,
                  and more.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <div className="bg-black p-8 rounded-xl shadow-sm relative">
                 <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold text-xl">
                    2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Deposit Your Assets</h3>
                <p className="text-muted-foreground">
                  Transfer your crypto assets to the platform. Start small and increase as you get comfortable with the
                  system.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <div className="bg-black p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-black font-bold text-xl">
                    3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Start Earning</h3>
                <p className="text-muted-foreground">
                  Choose your preferred investment strategy from our range of options and start earning returns on your
                  assets.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-gray-400/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
              <p className="text-muted-foreground">
                Join thousands of satisfied users who have transformed their approach to crypto investments.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <TestimonialCard
                quote="BKR DeFi made it incredibly easy for me to start earning passive income from my crypto holdings. The interface is intuitive and the returns have been impressive."
                name="Alex Johnson"
                title="Crypto Investor"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <TestimonialCard
                quote="As someone new to DeFi, I was worried about complexity. BKR DeFi's simple approach and excellent support made the journey seamless. I'm now earning more than I ever did with traditional finance."
                name="Sarah Williams"
                title="First-time DeFi User"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <TestimonialCard
                quote="The analytics dashboard alone is worth it. Being able to track my portfolio performance in real-time has helped me make better investment decisions and maximize my returns."
                name="Michael Chen"
                title="Professional Trader"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-gray-400/10 text-primary px-4 py-2 rounded-lg text-sm font-medium mb-6">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts Behind BKR DeFi</h2>
              <p className="text-muted-foreground">
                Our team combines decades of experience in blockchain technology, finance, and user experience design to
                create the most accessible DeFi platform.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <ScrollAnimation delay={0.1}>
              <TeamMemberCard
                name="Aditya Kumar"
                image="https://avatars.githubusercontent.com/u/104731745?v=4"
                role="Solana & Backend Developer"
                description="Expert in building secure and efficient smart contracts on Solana."
                github="https://github.com/adityakrcodes"
                linkedin="https://linkedin.com/in/adityakrcodes"
                website="https://adityakrcodes.com"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <TeamMemberCard
                name="Abdul Bayees"
                image="https://avatars.githubusercontent.com/u/76129251?v=4"
                role="Frontend Developer"
                description="Developed multiple DeFi applications with a focus on user experience and performance."
                github="https://github.com/ab7022"
                linkedin="https://linkedin.com/in/abdulbayees/"
                website="https://davidrodriguez.tech"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <TeamMemberCard
                name="Akhil D"
                image="https://avatars.githubusercontent.com/u/69696969?v=4"
                role="Database Developer"
                description="Expert in database management and optimization for high-performance applications."
                github="#"
                linkedin="#"
                website="#"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your DeFi Journey?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Join thousands of investors already using BKR DeFi to grow their digital assets and access the future of
                finance.
              </p>
              <div className="inline-flex items-center bg-gray-400 text-black px-6 py-3 rounded-lg font-bold transition-colors hover:bg-gray-400/80">
                Get Started Now <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <Link href="/" className="flex items-center justify-center">
                <span className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-gray-400 to-gray-400/70 bg-clip-text text-transparent">
                  BKR DeFi
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                The future of decentralized finance, accessible to everyone. Secure, transparent, and innovative.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} BKR DeFi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for animations on scroll

function ScrollAnimation({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

// Feature card component
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black p-8 rounded-xl shadow-sm border border-border/40 hover:border-primary/20 hover:shadow-md transition-all">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

// Testimonial card component
interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
}

function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="bg-black p-8 rounded-xl shadow-sm border border-border/40">
      <div className="text-primary mb-4">
        <svg
          width="45"
          height="36"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M13.5 18H9C9.33333 12 12 9 18 9V13.5C15 13.5 13.5 15 13.5 18ZM31.5 18H27C27.3333 12 30 9 36 9V13.5C33 13.5 31.5 15 31.5 18ZM13.5 36H9C9.33333 30 12 27 18 27V31.5C15 31.5 13.5 33 13.5 36ZM31.5 36H27C27.3333 30 30 27 36 27V31.5C33 31.5 31.5 33 31.5 36Z"></path>
        </svg>
      </div>
      <p className="mb-6 text-muted-foreground">{quote}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-muted/50"></div>
        <div className="ml-3">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  )
}

// Team member card component
interface TeamMemberCardProps {
    image: string;
    name: string;
    role: string;
    description: string;
    github: string;
    linkedin: string;
    website: string;
}

function TeamMemberCard({ image, name, role, description, github, linkedin, website }: TeamMemberCardProps) {
  return (
    <div className="bg-black md:max-w-80 p-8 rounded-xl shadow-sm border border-border/40 hover:border-gray-400/20 hover:shadow-md transition-all">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-muted mb-4 overflow-hidden">
          <Image
            src={image}
            width={96}
            height={96}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3 text-center">{role}</p>
        <p className="text-muted-foreground text-center mb-4">{description}</p>
        <div className="flex space-x-4 mt-auto">
          <Link href={github} className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href={linkedin} className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link href={website} className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Website</span>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

