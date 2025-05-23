import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import { Link } from "wouter";
import { 
  FadeIn, 
  SlideUp, 
  SlideInLeft, 
  SlideInRight, 
  ScaleIn 
} from "@/components/ui/ScrollAnimation";

export default function HomePage() {
  // Adding smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href === '#' ? null : href;
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      
      {/* SME Support Hub Section with animations */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(rgba(3, 28, 64, 0.8), rgba(3, 28, 64, 0.8)), url('/images/sme-support-cta.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#031c40" // Navy fallback
          }} 
        />
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-white">
              <SlideInLeft delay={0.2}>
                <h2 className="text-3xl font-bold mb-4">
                  SME Support Hub
                </h2>
                <p className="text-xl mb-4">
                  Everything UK small businesses need in one place—contacts, deadlines, and downloadable resources.
                </p>
              </SlideInLeft>
              
              <ul className="space-y-2 mb-6">
                {/* Animated list items with staggered delay */}
                <SlideUp className="flex items-center" delay={0.3}>
                  <span className="text-[var(--orange)] mr-2">✓</span> Essential HMRC & Companies House contact details
                </SlideUp>
                <SlideUp className="flex items-center" delay={0.4}>
                  <span className="text-[var(--orange)] mr-2">✓</span> Key tax filing deadlines
                </SlideUp>
                <SlideUp className="flex items-center" delay={0.5}>
                  <span className="text-[var(--orange)] mr-2">✓</span> Downloadable PDF resources
                </SlideUp>
                <SlideUp className="flex items-center" delay={0.6}>
                  <span className="text-[var(--orange)] mr-2">✓</span> Regularly updated information
                </SlideUp>
              </ul>
              
              <FadeIn>
                <Link href="/sme-support-hub" className="inline-block px-6 py-3 bg-[var(--orange)] text-white rounded-md hover:bg-[var(--orange)]/90 hover:-translate-y-1 transition-all duration-300">
                  Access SME Support Hub
                </Link>
              </FadeIn>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <SlideInRight delay={0.4}>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full hover:shadow-xl transition-shadow duration-300">
                  <ScaleIn delay={0.6}>
                    <h3 className="text-xl font-bold mb-4 text-[var(--navy)]">Available Resources</h3>
                  </ScaleIn>
                  
                  <ul className="space-y-4">
                    <SlideUp className="flex items-start" delay={0.7}>
                      <div className="bg-orange-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--navy)]">SME Contacts Directory</h4>
                        <p className="text-gray-600 text-sm">All important UK business support contacts in one PDF.</p>
                      </div>
                    </SlideUp>
                    
                    <SlideUp className="flex items-start" delay={0.8}>
                      <div className="bg-orange-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[var(--navy)]">Key Business Deadlines</h4>
                        <p className="text-gray-600 text-sm">All tax and reporting deadlines for 2025 in a printable format.</p>
                      </div>
                    </SlideUp>
                  </ul>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>
      
      <WhyUsSection />
      
      {/* Studio Highlight Section with animations */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <SlideInLeft delay={0.2}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/drl0fxrkq/image/upload/v1744815129/P1012279-Enhanced-NR_dgdlta.jpg" 
                    alt="Progress Podcast & Video Studio" 
                    className="w-full h-auto rounded-lg transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent opacity-70"></div>
                </div>
              </SlideInLeft>
            </div>
            
            <div className="md:w-1/2 text-white">
              <SlideInRight delay={0.3}>
                <ScaleIn delay={0.4}>
                  <h2 className="text-3xl font-bold mb-4">
                    🎙️ Podcast & Video Studio
                  </h2>
                </ScaleIn>
                
                <p className="text-xl mb-4">
                  Purpose-built for businesses that want to sound and look professional without metropolitan prices.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <SlideUp className="flex items-center" delay={0.5}>
                    <span className="text-[var(--orange)] mr-2">✓</span> Professional DSLR cameras
                  </SlideUp>
                  <SlideUp className="flex items-center" delay={0.6}>
                    <span className="text-[var(--orange)] mr-2">✓</span> Broadcast-quality microphones
                  </SlideUp>
                  <SlideUp className="flex items-center" delay={0.7}>
                    <span className="text-[var(--orange)] mr-2">✓</span> Acoustically treated space
                  </SlideUp>
                  <SlideUp className="flex items-center" delay={0.8}>
                    <span className="text-[var(--orange)] mr-2">✓</span> On-site technical support
                  </SlideUp>
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/studio-banbury" 
                    className="inline-block px-6 py-3 bg-[var(--orange)] text-white rounded-md hover:bg-[var(--orange)]/90 hover:-translate-y-1 transition-all duration-300"
                  >
                    View Studio Details
                  </Link>
                  <Link 
                    href="/studio-banbury#booking-form" 
                    className="inline-block px-6 py-3 bg-white text-[var(--navy)] rounded-md hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    Book Studio Time
                  </Link>
                </div>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section with animations */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <ScaleIn delay={0.1}>
                <h2 className="text-3xl font-bold mb-3" style={{ color: 'var(--navy)' }}>
                  Looking for a proactive accountant in United Kingdom?
                </h2>
              </ScaleIn>
              <SlideUp delay={0.3}>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We're based in Oxford, Banbury, and London, and proudly serve ambitious businesses across the United Kingdom and beyond.
                  Ready to take your accounting to the next level? Let's talk about how we can help your business flourish.
                </p>
              </SlideUp>
            </div>
            
            {/* Contact Form Section */}
            <div className="mb-14">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-semibold text-[var(--navy)]">Get in Touch</h3>
                  
                  <div className="flex space-x-4">
                    <a href="mailto:info@progressaccountants.com" className="text-gray-500 hover:text-[var(--orange)] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a href="tel:01865921150" className="text-gray-500 hover:text-[var(--orange)] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 h-full">
                      <div className="flex items-start mb-6">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--navy)] mb-2">Business Hours</h3>
                          <div className="space-y-1.5 text-gray-600">
                            <p className="flex justify-between">
                              <span>Monday - Friday:</span>
                              <span className="font-medium">9:00 AM - 5:30 PM</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Saturday - Sunday:</span>
                              <span className="font-medium">Closed</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-[var(--navy)] mb-2">Contact Details</h3>
                          <div className="space-y-1.5 text-gray-600">
                            <p className="flex items-center">
                              <span className="font-medium mr-2">Email:</span>
                              <a href="mailto:info@progressaccountants.com" className="text-[var(--navy)] hover:text-[var(--orange)] transition-colors">
                                info@progressaccountants.com
                              </a>
                            </p>
                            <p>
                              <span className="font-medium mr-2">General Enquiries:</span>
                              <a href="tel:01865921150" className="text-[var(--navy)] hover:text-[var(--orange)] transition-colors">
                                01865 921 150
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <ContactForm compact={true} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Locations Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {/* Oxford Office */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[var(--navy)] mb-3">Oxford Office</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>John Eccles House, Oxford Science Park, OX4 4GP</span>
                    </p>
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>01865 921 150</span>
                    </p>
                  </div>
                
                  <div className="space-y-2">
                    <div className="relative overflow-hidden rounded-lg shadow-sm border border-gray-200 aspect-video">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.4344456587906!2d-1.2230884233905215!3d51.71881997181775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a3251dbacd%3A0xe44bbc8ac6c55c59!2sOxford%20Science%20Park!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Oxford Office Map"
                      ></iframe>
                    </div>
                    <div className="text-center">
                      <a href="https://goo.gl/maps/exampleOxford" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--navy)] font-medium hover:text-[var(--orange)] transition-colors">
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Banbury Office */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[var(--navy)] mb-3">Banbury Office</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>1st Floor Beaumont House, Beaumont Road, OX16 1RH</span>
                    </p>
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>01295 477 250</span>
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative overflow-hidden rounded-lg shadow-sm border border-gray-200 aspect-video">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.9512290731844!2d-1.3498106233780232!3d52.0620696712133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbf9c1ec66d1%3A0x641f85d46eed55d!2sBeaumont%20Rd%2C%20Banbury!5e0!3m2!1sen!2suk!4v1651234567891!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Banbury Office Map"
                      ></iframe>
                    </div>
                    <div className="text-center">
                      <a href="https://goo.gl/maps/exampleBanbury" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--navy)] font-medium hover:text-[var(--orange)] transition-colors">
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* London Office */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-[var(--navy)] mb-3">London Office</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>2 Frederick's Place, Old Jewry, EC2R 8AE</span>
                    </p>
                    <p className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--orange)] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>020 3833 9950</span>
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative overflow-hidden rounded-lg shadow-sm border border-gray-200 aspect-video">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.118271413698!2d-0.09074622339802587!3d51.51427727181761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760354ae0cf06f%3A0xee933e8203c1c8a!2sOld%20Jewry%2C%20London!5e0!3m2!1sen!2suk!4v1651234567892!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="London Office Map"
                      ></iframe>
                    </div>
                    <div className="text-center">
                      <a href="https://goo.gl/maps/exampleLondon" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--navy)] font-medium hover:text-[var(--orange)] transition-colors">
                        View larger map
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}