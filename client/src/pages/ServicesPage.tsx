import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'wouter';
import { 
  Calculator, 
  BookOpen, 
  BarChart4, 
  ClipboardCheck, 
  DollarSign, 
  Cloud, 
  FileSpreadsheet,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  PageHeaderSkeleton,
  ServicesSkeleton,
  CardSkeleton,
  CtaSkeleton
} from '@/components/ui/skeletons';

interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

const services: Service[] = [
  {
    id: 1,
    name: "📊 Tax Planning & Preparation",
    description: "Minimise liabilities and plan ahead with strategic tax support tailored to your business type and income streams.",
    icon: <Calculator className="h-10 w-10 mb-4 text-blue-400" />,
    slug: "tax-planning"
  },
  {
    id: 2,
    name: "📚 Bookkeeping",
    description: "Stay organised and up to date with clear, reliable bookkeeping that keeps your business running smoothly.",
    icon: <BookOpen className="h-10 w-10 mb-4 text-pink-400" />,
    slug: "bookkeeping"
  },
  {
    id: 3,
    name: "📈 Business Advisory",
    description: "Get real insight into your business performance with tailored advice, forecasts, and strategy sessions.",
    icon: <BarChart4 className="h-10 w-10 mb-4 text-blue-400" />,
    slug: "business-advisory"
  },
  {
    id: 4,
    name: "📄 Financial Reporting",
    description: "Understand your numbers in plain English with detailed, timely reports that support better decisions.",
    icon: <FileSpreadsheet className="h-10 w-10 mb-4 text-pink-400" />,
    slug: "financial-reporting"
  },
  {
    id: 5,
    name: "🔍 Audit Support",
    description: "Whether required or voluntary, we help you prepare for audits and reviews with clarity and confidence.",
    icon: <ClipboardCheck className="h-10 w-10 mb-4 text-blue-400" />,
    slug: "audit-support"
  },
  {
    id: 6,
    name: "☁️ Cloud Accounting",
    description: "We use tools like Xero and QuickBooks to give you real-time visibility, automated workflows, and remote access.",
    icon: <Cloud className="h-10 w-10 mb-4 text-pink-400" />,
    slug: "cloud-accounting"
  },
  {
    id: 7,
    name: "🎬 Industry-Specific Accounting",
    description: "Tailored support for Construction, Film, Music, and Property—aligned to your sector's compliance, tax, and financial structure needs.",
    icon: <Briefcase className="h-10 w-10 mb-4 text-blue-400" />,
    slug: "industry-specific"
  },
  {
    id: 8,
    name: "📅 Virtual Finance Director (VFD)",
    description: "On-demand financial leadership without the overhead. Strategic planning, forecasting, and accountability for your growth journey.",
    icon: <DollarSign className="h-10 w-10 mb-4 text-pink-400" />,
    slug: "virtual-finance-director"
  }
];

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Return skeleton during loading state
  if (isLoading) {
    return (
      <div className="bg-gray-900 min-h-screen">
        <Helmet>
          <title>Our Services | Progress Accountants</title>
        </Helmet>
        
        {/* Skeleton Hero Section */}
        <section className="bg-gray-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <PageHeaderSkeleton />
          </div>
        </section>
        
        {/* Skeleton Services Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="space-y-4 mb-16 max-w-3xl mx-auto">
              <div className="h-8 w-64 mx-auto bg-gray-800 animate-pulse rounded-md"></div>
              <div className="h-4 w-full bg-gray-800 animate-pulse rounded-md"></div>
              <div className="h-4 w-full bg-gray-800 animate-pulse rounded-md"></div>
              <div className="h-4 w-3/4 mx-auto bg-gray-800 animate-pulse rounded-md"></div>
            </div>
            
            <ServicesSkeleton count={8} />
          </div>
        </section>
        
        {/* Skeleton Feature Sections */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-6 md:px-8">
            <CardSkeleton count={1} />
          </div>
        </section>
        
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6 md:px-8">
            <CardSkeleton count={1} />
          </div>
        </section>
        
        {/* Skeleton CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-pink-500">
          <div className="container mx-auto px-6 md:px-8">
            <CtaSkeleton />
          </div>
        </section>
      </div>
    );
  }
  
  // Return actual content once loaded
  return (
    <div className="bg-gray-900 min-h-screen">
      <Helmet>
        <title>Our Services | Progress Accountants</title>
        <meta name="description" content="Explore the comprehensive accounting and financial services offered by Progress Accountants to help your business thrive." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">🧾 Our Services</h1>
            <p className="text-xl text-gray-300">
              Accounting, Tax, and Strategic Support for Growing Businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-300 mb-4">
              At Progress, we do more than keep you compliant—we help you grow. From day-to-day bookkeeping to long-term planning, our services are built around your goals, not just your deadlines.
            </p>
            <p className="text-gray-300">
              We specialise in small business support, construction, film, music, property, and professional services. Explore how we can help you stay in control and one step ahead.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-700">
                <div className="flex-grow">
                  <div className="text-gradient-to-r from-blue-400 to-pink-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>
                <Link href={`/services/${service.slug}`} className="text-blue-400 font-medium inline-flex items-center hover:text-pink-400 transition-colors duration-300 no-underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Studio Feature */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="h-64 md:h-auto bg-gray-700 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Podcast & Video Studio</h3>
                  <p className="text-gray-300 mb-6">A cutting-edge facility for content creators</p>
                  <Link href="/studio-banbury">
                    <Button className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-md hover:-translate-y-[2px] transition duration-300">
                      Explore the Studio
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right: Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">More Than Just Accounting</h3>
                <p className="text-gray-300 mb-4">
                  Progress Accountants offers more than just financial services. Our state-of-the-art podcast and video studio in Banbury provides a professional environment for content creation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Professional recording equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-pink-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Acoustically treated space</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Lighting and camera setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-pink-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Available for hourly and daily rental</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Dashboard Feature */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Client Financial Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Our digital client portal provides you with 24/7 access to your financial information, documents, and communication with our team.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time financial reporting</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-pink-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Secure document storage and sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Direct messaging with your accountant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-pink-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Task management and deadline tracking</span>
                  </li>
                </ul>
                
                <Link href="/client-dashboard">
                  <Button className="bg-gradient-to-br from-blue-600 to-pink-500 text-white hover:shadow-lg hover:-translate-y-[2px] transition duration-300">
                    View Demo Dashboard
                  </Button>
                </Link>
              </div>
              
              {/* Right: Image/Placeholder */}
              <div className="h-64 md:h-auto bg-gray-700 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Client Portal</h3>
                  <p className="text-gray-300 mb-6">Your finances at your fingertips</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Ready to Take Your Business Further?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss how our services can be tailored to meet your specific needs.
          </p>
          <Link href="/contact">
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-[2px] transition duration-300"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}