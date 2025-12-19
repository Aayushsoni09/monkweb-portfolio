import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is available

// --- UI Components (Copied from download_resume_button_code for self-containment) ---

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = 'md',
  className = '',
}) => {
  let paddingClass = 'px-6 py-3';
  if (size === 'lg') {
    paddingClass = 'px-8 py-4 text-lg';
  } else if (size === 'sm') {
    paddingClass = 'px-4 py-2 text-sm';
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-xl font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${paddingClass} ${className}`}
    >
      {children}
    </button>
  );
};

// Download Resume Button Component
const DownloadResumeButton: React.FC = () => {
  const handleDownload = () => {
    window.open('https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/Aayush-Soni-resume.pdf', '_blank');
  };

  return (
    <Button
      onClick={handleDownload}
      size="md" // Made the button smaller
      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
    >
      <span className="text-xl">⬇</span> {/* Adjusted icon size */}
      Download Resume
    </Button>
  );
};

// --- Header Component ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        style={{
          backgroundColor,
          borderBottom: '1px solid',
          borderColor: `rgba(229, 229, 229, ${borderOpacity.get()})`,
        }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm"
      >
        <Container className="py-3 sm:py-4">
          {' '}
          {/* Added vertical padding for spacing */}
          <div className="flex items-center justify-between min-h-[4rem] sm:min-h-[5rem]">
            {' '}
            {/* Adjusted height to min-height */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <DownloadResumeButton />
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['Skills', 'Projects', 'Testimonials', 'Contact'].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} // Staggered delay
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} // Delay for mobile button
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} className="text-neutral-800" />
            </motion.button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 z-50 bg-white p-4 md:hidden"
      >
        <div className="flex justify-end">
          <button
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} className="text-neutral-800" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col space-y-8">
          {['Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-neutral-900 text-2xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Header;
