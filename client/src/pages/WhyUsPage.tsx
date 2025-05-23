import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Award, 
  Clock, 
  Shield, 
  Lightbulb, 
  Zap, 
  BarChart, 
  Users,
  Sparkles
} from 'lucide-react';
import { PageHeaderSkeleton, FeaturesSkeleton } from '@/components/ui/skeletons';
import { useBusinessIdentity } from '@/hooks/use-business-identity';

export default function WhyUsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { businessIdentity, isLoading: isLoadingIdentity } = useBusinessIdentity();

  useEffect(() => {
    // Combine real data loading with synthetic loading for a smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, isLoadingIdentity ? 2000 : 1500);
    
    return () => clearTimeout(timer);
  }, [isLoadingIdentity]);

  const testimonials = [
    {
      quote: "Their expertise has transformed our financial operations. We now have clarity and control like never before.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      rating: 5
    },
    {
      quote: "Progress Accountants doesn't just crunch numbers—they provide insights that have directly improved our profitability.",
      name: "Michael Robinson",
      position: "Director, Horizon Retail",
      rating: 5
    },
    {
      quote: "Working with them has eliminated the stress of tax season. Proactive, professional, and genuinely invested in our success.",
      name: "Emma Thompson",
      position: "Operations Manager, Greenfield Properties",
      rating: 5
    }
  ];

  // Return skeleton during loading state
  if (isLoading || isLoadingIdentity) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Helmet>
          <title>Why Choose Us | Progress Accountants</title>
        </Helmet>

        {/* Skeleton Hero Section */}
        <section className="bg-[var(--navy)] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <PageHeaderSkeleton />
          </div>
        </section>

        {/* Skeleton Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <FeaturesSkeleton count={6} />
          </div>
        </section>
      </div>
    );
  }

  // Extract business information
  const businessName = businessIdentity?.core?.businessName || "Progress Accountants";
  const yearFounded = businessIdentity?.core?.yearFounded || "2018";
  const usps = businessIdentity?.personality?.usps || [];
  const missionStatement = businessIdentity?.personality?.missionStatement || "";
  const values = businessIdentity?.personality?.values || [];
  const certifications = businessIdentity?.personality?.certifications || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Why Choose Us | {businessName}</title>
        <meta name="description" content={`Discover what makes ${businessName} different and why businesses choose us for their accounting needs. Expertise, technology, and a client-first approach.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[var(--navy)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Why Choose {businessName}?</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              More than just accountants—we're your financial growth partners.
            </p>
            
            {missionStatement && (
              <div className="mt-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="italic text-lg text-white/90">"{missionStatement}"</p>
              </div>
            )}
            
            <div className="mt-8 inline-block px-4 py-2 rounded-full bg-white/10 text-orange-300 text-sm font-medium">
              Established {yearFounded} • Serving businesses with excellence
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/10 pointer-events-none"></div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-700">
              We're not just accountants who file your tax returns. Our approach combines technology, expertise, and a genuine commitment to your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-6 p-4 rounded-full inline-flex bg-orange-50" style={{ color: 'var(--orange)' }}>
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
                Technology-Driven
              </h3>
              <p className="text-gray-600">
                Modern cloud-based accounting solutions that give you real-time visibility into your finances anytime, anywhere. No more waiting for quarterly reports.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-6 p-4 rounded-full inline-flex bg-orange-50" style={{ color: 'var(--orange)' }}>
                <Lightbulb size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
                Proactive Advisors
              </h3>
              <p className="text-gray-600">
                We don't just react to deadlines—we anticipate opportunities, identify risks before they become problems, and actively help you plan for growth.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-6 p-4 rounded-full inline-flex bg-orange-50" style={{ color: 'var(--orange)' }}>
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
                Relationship Focused
              </h3>
              <p className="text-gray-600">
                We take the time to understand your business, your goals, and your challenges. Every financial decision is made in the context of your bigger picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      {values.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
                Our Values
              </h2>
              <p className="text-lg text-gray-700">
                These core principles guide every interaction and decision we make.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="mr-4 text-orange-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: 'var(--navy)' }}>
                      {value}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {index === 0 ? "We bring authenticity and transparency to every client relationship." :
                       index === 1 ? "We consistently deliver results that exceed expectations." :
                       index === 2 ? "We embrace forward-thinking approaches and continuous improvement." :
                       index === 3 ? "We take ownership of our work and are accountable for outcomes." :
                       "We uphold the highest standards of professional and ethical conduct."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USPs Section */}
      {usps.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--navy)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-orange-300 text-sm font-medium mb-4">
                Our Unique Advantages
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Why Clients Choose Us
              </h2>
              <p className="text-lg text-gray-300">
                Here's what makes our accounting services truly stand out from the competition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start bg-blue-900/50 p-6 rounded-lg">
                  <div className="mr-4 text-orange-400">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{usp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications and Credentials */}
      {certifications.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
                Our Certifications & Credentials
              </h2>
              <p className="text-lg text-gray-700">
                We maintain the highest standards of professional excellence.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {certifications.map((certification, index) => (
                <div key={index} className="flex items-center bg-gray-50 px-6 py-4 rounded-lg shadow-sm">
                  <div className="mr-3 text-orange-500">
                    <Award size={20} />
                  </div>
                  <span className="font-medium" style={{ color: 'var(--navy)' }}>{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Don't just take our word for it—here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium" style={{ color: 'var(--navy)' }}>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button 
                variant="outline" 
                className="hover:text-[var(--orange)] hover:border-[var(--orange)] flex items-center gap-2"
              >
                <span>Read More Testimonials</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
              Our Client Process
            </h2>
            <p className="text-lg text-gray-700">
              A transparent, effective approach designed to maximize your financial success.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative md:flex items-center mb-16">
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600">
                    We start by understanding your business goals, challenges, and current financial situation.
                  </p>
                </div>
                
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white shadow-md mb-4 md:mb-0">
                  <span className="text-orange-500 font-bold">1</span>
                </div>
                
                <div className="md:w-1/2 md:pl-8 md:text-left">
                  <h3 className="md:hidden text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Initial Consultation
                  </h3>
                  <p className="md:hidden text-gray-600 mb-4">
                    We start by understanding your business goals, challenges, and current financial situation.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Clock size={18} className="text-orange-500 mr-2" />
                      <span className="text-gray-700 font-medium">45-60 minutes</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      A no-obligation conversation to see if we're a good fit for your needs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative md:flex items-center mb-16">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-50 p-4 rounded-lg md:ml-auto md:mr-0">
                    <div className="flex items-center mb-2 md:justify-end">
                      <BarChart size={18} className="text-orange-500 mr-2" />
                      <span className="text-gray-700 font-medium">Tailored Strategy</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We develop a customized financial strategy aligned with your specific business objectives.
                    </p>
                  </div>
                </div>
                
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white shadow-md my-4 md:my-0">
                  <span className="text-orange-500 font-bold">2</span>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Strategic Planning
                  </h3>
                  <p className="text-gray-600">
                    Based on our discoveries, we create a comprehensive plan to optimize your financial operations.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative md:flex items-center mb-16">
                <div className="hidden md:block w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Implementation
                  </h3>
                  <p className="text-gray-600">
                    We set up systems, processes, and reporting structures to bring your financial strategy to life.
                  </p>
                </div>
                
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white shadow-md mb-4 md:mb-0">
                  <span className="text-orange-500 font-bold">3</span>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="md:hidden text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Implementation
                  </h3>
                  <p className="md:hidden text-gray-600 mb-4">
                    We set up systems, processes, and reporting structures to bring your financial strategy to life.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Zap size={18} className="text-orange-500 mr-2" />
                      <span className="text-gray-700 font-medium">Seamless Integration</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We handle the heavy lifting to ensure minimal disruption to your business operations.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative md:flex items-center">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-50 p-4 rounded-lg md:ml-auto md:mr-0">
                    <div className="flex items-center mb-2 md:justify-end">
                      <Shield size={18} className="text-orange-500 mr-2" />
                      <span className="text-gray-700 font-medium">Continuous Support</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Regular reviews, updates, and expert guidance to ensure your financial success.
                    </p>
                  </div>
                </div>
                
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 border-4 border-white shadow-md my-4 md:my-0">
                  <span className="text-orange-500 font-bold">4</span>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>
                    Ongoing Partnership
                  </h3>
                  <p className="text-gray-600">
                    We provide proactive advice, regular reporting, and strategic adjustments as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[var(--navy)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's start with a conversation about your business and how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto hover:shadow-md hover:-translate-y-[2px] transition duration-300 flex items-center gap-2"
                  style={{ 
                    backgroundColor: 'var(--orange)',
                    color: 'white' 
                  }}
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/50 hover:border-white text-white flex items-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}