import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, X, LayoutDashboard, ChevronDown, Users, Briefcase, 
  Phone, Layout, BookOpen, FastForward, Sparkles, UserPlus,
  ArrowLeftCircle, Newspaper, Film, Music, Building2, Building,
  Calculator, Calendar, PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useTenant } from "@/hooks/use-tenant";
import { getSiteBranding } from "@/lib/api";
import { defaultSiteBranding, SiteBranding } from "@shared/site_branding";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// NavbarLogo component for displaying site branding
function NavbarLogo() {
  const [siteBranding, setSiteBranding] = useState<SiteBranding>(defaultSiteBranding);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBranding = async () => {
      setIsLoading(true);
      try {
        const brandingData = await getSiteBranding();
        if (brandingData) {
          setSiteBranding(brandingData);
        }
      } catch (error) {
        console.error("Error loading site branding for logo:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBranding();
  }, []);

  // Display image logo if available, otherwise use text logo
  if (siteBranding.logo.imageUrl) {
    return (
      <Link href="/" className="no-underline flex items-center">
        <img 
          src={siteBranding.logo.imageUrl} 
          alt={siteBranding.logo.altText} 
          className="max-h-10 object-contain"
        />
      </Link>
    );
  }

  // Default text logo
  return (
    <Link href="/" className="font-poppins font-bold text-2xl no-underline" style={{ color: 'var(--navy)' }}>
      {siteBranding.logo.text.includes(" ") 
        ? siteBranding.logo.text.split(" ").map((word, index, arr) => (
            <span key={index} style={{ color: index === arr.length - 1 ? 'var(--orange)' : 'var(--navy)' }}>
              {word}{index < arr.length - 1 ? " " : ""}
            </span>
          ))
        : siteBranding.logo.text
      }
    </Link>
  );
}

// Define menu item groups
type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

// This navbar is ONLY for public-facing pages
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { tenant } = useTenant();
  const isStaff = user?.userType === 'admin' || user?.userType === 'super_admin' || user?.userType === 'editor' || user?.isSuperAdmin;
  const [location] = useLocation();
  
  // Check if client registration is enabled
  const clientRegistrationEnabled = tenant?.customization?.featureFlags?.enableClientLogin;

  // Define public-facing menu items
  const publicMenuGroups: MenuGroup[] = [
    {
      label: "Services",
      items: [
        { label: "All Services", href: "/services", icon: <Briefcase className="h-4 w-4 mr-2" /> },
        { label: "Why Choose Us", href: "/why-us", icon: <Sparkles className="h-4 w-4 mr-2" /> },
        { label: "Business Calculator", href: "/business-calculator", icon: <Calculator className="h-4 w-4 mr-2" /> },
        { label: "SME Support Hub", href: "/sme-support-hub", icon: <Building2 className="h-4 w-4 mr-2" /> },
      ]
    },
    {
      label: "Industries",
      items: [
        { label: "Film & TV", href: "/industries/film", icon: <Film className="h-4 w-4 mr-2" /> },
        { label: "Music", href: "/industries/music", icon: <Music className="h-4 w-4 mr-2" /> },
        { label: "Construction", href: "/industries/construction", icon: <Building2 className="h-4 w-4 mr-2" /> },
        { label: "Professional Services", href: "/industries/professional-services", icon: <Briefcase className="h-4 w-4 mr-2" /> },
      ]
    },
    {
      label: "Resources",
      items: [
        { label: "Business Calculator", href: "/business-calculator", icon: <Calculator className="h-4 w-4 mr-2" /> },
        { label: "SME Support Hub", href: "/sme-support-hub", icon: <Building2 className="h-4 w-4 mr-2" /> },
        { label: "News & Insights", href: "/news", icon: <Newspaper className="h-4 w-4 mr-2" /> },
        { label: "Podcast Studio", href: "/studio-banbury", icon: <Layout className="h-4 w-4 mr-2" /> },
      ]
    },
    {
      label: "About",
      items: [
        { label: "About Us", href: "/about", icon: <BookOpen className="h-4 w-4 mr-2" /> },
        { label: "Our Team", href: "/team", icon: <Users className="h-4 w-4 mr-2" /> },
        { label: "Contact Us", href: "/contact", icon: <Phone className="h-4 w-4 mr-2" /> },
        { label: "Podcast Studio", href: "/studio-banbury", icon: <Layout className="h-4 w-4 mr-2" /> },
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Helper to determine if a link is active
  const isActive = (href: string) => {
    return location === href;
  };

  // Function to render nav links with dropdown
  const renderDesktopDropdown = (group: MenuGroup) => {
    return (
      <DropdownMenu key={group.label}>
        <DropdownMenuTrigger className="font-medium text-[#1c3668] hover:text-[#f15a29] transition duration-300 outline-none flex items-center">
          {group.label} <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px]">
          <DropdownMenuLabel className="text-[#1c3668]">{group.label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {group.items.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Link
                href={item.href}
                className={`flex items-center py-2 px-2 ${isActive(item.href) ? 'text-[#f15a29]' : 'text-[#1c3668] hover:text-[#f15a29]'} transition duration-300 no-underline w-full`}
              >
                {item.icon}
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  // Function to render mobile menu items with headings
  const renderMobileMenuGroup = (group: MenuGroup) => {
    return (
      <div key={group.label} className="py-2">
        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 px-2">{group.label}</h4>
        {group.items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center py-2 px-2 font-medium ${isActive(item.href) ? 'text-[#f15a29]' : 'text-[#1c3668] hover:text-[#f15a29]'} transition duration-300 no-underline`}
            onClick={closeMenu}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  // Define local colors for the public site that don't depend on global theme
  const publicColors = {
    navy: "#1c3668",
    navyDark: "#132549",
    orange: "#f15a29",
    white: "#ffffff",
    gray: "#f0f0f0"
  };
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        
        {/* Desktop Menu - Public-facing menu only */}
        <div className="hidden md:flex items-center space-x-6">
          {publicMenuGroups.map(renderDesktopDropdown)}
          
          {/* Show login button and potentially client registration for non-authenticated users */}
          {!user && (
            <>
              {clientRegistrationEnabled && tenant?.id && (
                <Button 
                  variant="outline"
                  className="border-[#1c3668] text-[#1c3668] hover:bg-[#f15a29] hover:text-white hover:border-[#f15a29]"
                  asChild
                >
                  <Link 
                    href={`/client-register/${tenant.id}`} 
                    className="no-underline flex items-center"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Account
                  </Link>
                </Button>
              )}
              <Button 
                variant="default"
                className="text-white hover:shadow-md transition-all"
                asChild
              >
                <Link 
                  href="/auth" 
                  className="no-underline flex items-center"
                >
                  Login / Register
                </Link>
              </Button>
            </>
          )}
          
          {/* Show admin dashboard link with high visibility for staff */}
          {isStaff && (
            <Button 
              variant="settings"
              className="shadow-sm hover:shadow-md transition-all font-medium"
              asChild
            >
              <Link 
                href="/admin/dashboard" 
                className="no-underline flex items-center"
              >
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Admin Dashboard
              </Link>
            </Button>
          )}
          
          {/* Decoupled "Book a Call" button using public-specific CSS classes */}
          <a href="#book-call" className="book-call-btn">
            <PhoneCall className="h-4 w-4" />
            <span>Book a Call</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X style={{ color: '#1c3668' }} className="h-6 w-6" />
          ) : (
            <Menu style={{ color: '#1c3668' }} className="h-6 w-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Menu - Public-facing only */}
      <div 
        className={`md:hidden bg-white w-full absolute z-20 shadow-md overflow-y-auto max-h-[80vh] ${isMenuOpen ? '' : 'hidden'}`}
      >
        <div className="container mx-auto px-6 md:px-8 py-3 flex flex-col divide-y">
          {publicMenuGroups.map(renderMobileMenuGroup)}
          
          {/* Login section for non-authenticated users */}
          {!user && (
            <div className="py-2">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 px-2">Access</h4>
              
              {clientRegistrationEnabled && tenant?.id && (
                <Button 
                  variant="outline"
                  className="w-full mb-2 border-[#1c3668] text-[#1c3668] hover:bg-[#1c3668] hover:text-white hover:border-[#1c3668]"
                  onClick={closeMenu}
                  asChild
                >
                  <Link 
                    href={`/client-register/${tenant.id}`} 
                    className="flex items-center justify-center py-2 no-underline"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Account
                  </Link>
                </Button>
              )}
              
              <Button 
                variant="default"
                className="w-full bg-[#f15a29] text-white hover:bg-[#f15a29]/90"
                onClick={closeMenu}
                asChild
              >
                <Link 
                  href="/auth" 
                  className="flex items-center justify-center py-2 no-underline"
                >
                  Login / Register
                </Link>
              </Button>
            </div>
          )}
          
          {/* Admin link if staff */}
          {isStaff && (
            <div className="py-2">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 px-2">Admin</h4>
              <Button 
                variant="default"
                className="w-full bg-[#1c3668] text-white hover:bg-[#132549] transition-colors font-medium shadow-sm"
                onClick={closeMenu}
                asChild
              >
                <Link 
                  href="/admin/dashboard" 
                  className="flex items-center justify-center py-2 no-underline"
                >
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Admin Dashboard
                </Link>
              </Button>
            </div>
          )}
          
          {/* Call to action */}
          <div className="py-4">
            <a 
              href="#book-call"
              onClick={closeMenu}
              className="inline-block text-center w-full"
            >
              {/* Decoupled mobile "Book a Call" button using public-specific CSS classes */}
              <button className="book-call-btn-mobile">
                <PhoneCall className="h-4 w-4 mr-2" />
                Book a Call
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
