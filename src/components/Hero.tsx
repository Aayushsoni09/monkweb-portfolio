import React, { useState, useEffect } from 'react';
import Divider from './ui/Divider';

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDisplayModal(true);
      setTimeout(() => {
        setLocalIsOpen(true);
      }, 10);
    } else {
      setLocalIsOpen(false);
      setTimeout(() => {
        setDisplayModal(false);
      }, 300);
    }
  }, [isOpen]);

  if (!displayModal) return null;

  return (
    <div
      className={`modal-overlay ${localIsOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto modal-content-animated"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light transition-colors"
        >
          ×
        </button>
        <h3 className="text-3xl font-semibold mb-6 text-center text-neutral-800 font-serif-display">
          {title}
        </h3>
        <div className="font-serif-display text-neutral-700">{children}</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-neutral-900 hero-section-with-magic shadow-lg">
      <Container className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                animateHero
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              Hey Internet
            </h1>

            <div
              className={`aspect-video w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-700 ease-out delay-200 ${
                animateHero
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Portfolio Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const MyStoryAndDifference: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState<boolean>(false);

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Why I am different
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Crafting digital experiences that blend innovation with purpose.
          </p>

          <Button
            onClick={() => setIsStoryModalOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Uncover My Story
          </Button>
          <Divider className="mt-20" />
        </div>
      </Container>
      <Modal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        title="My Story"
      >
        <div className="space-y-4 text-left">
          <p className="mb-4">
            My journey into development began not with basic exercises, but with
            a fervent passion for creating immersive digital experiences. While
            my peers explored foundational concepts, I was already building a{' '}
            <strong>fully animated portfolio website</strong> using{' '}
            <strong>HTML</strong>, <strong>CSS</strong>,{' '}
            <strong>JavaScript</strong>, and the{' '}
            <strong>Green Sock Animation Platform (GSAP)</strong>. This early
            initiative, documented in a compelling video, showcased my drive for
            innovation and mastery of modern web technologies from the outset.
          </p>
          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/9XshqVwErno"
              title="Early Portfolio Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="mb-4">
            My proactive engagement on LinkedIn, sharing my web development
            learnings, quickly led to my{' '}
            <strong>first client engagement</strong>. I partnered with{' '}
            <a
              href="https://www.linkedin.com/in/shash-kapoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Shashank Kapoor
            </a>
            , where I was instrumental in setting up the robust{' '}
            <strong>Django (Python) backend</strong> for his yoga-focused
            educational platform. This experience solidified my capabilities in
            delivering scalable and functional backend solutions.
          </p>
          <p className="mb-4">
            My consistent knowledge sharing on LinkedIn attracted my{' '}
            <strong>second significant client</strong>,{' '}
            <a
              href="https://www.linkedin.com/in/navjot-singh-639911a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Navjot Singh
            </a>
            . I played a pivotal role in developing a comprehensive module for a
            project that had to be submitted to the{' '}
            <strong>University of Toronto</strong>, which was a{' '}
            <strong>hospital management system</strong>. Leading the doctor's
            module, I meticulously implemented critical features such as{' '}
            <strong>secure authentication</strong>,{' '}
            <strong>doctor's appointment scheduling</strong>, and{' '}
            <strong>managing available hours</strong> using{' '}
            <strong>Django</strong> and <strong>JavaScript</strong>. This
            collaborative project, working alongside two other talented
            individuals, significantly expanded my expertise in large-scale
            system development and teamwork.
          </p>
          <p className="mb-4">
            Through a referral from my brother, I secured a client,{' '}
            <a
              href="https://www.linkedin.com/in/rishimahajan1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Rishi Mahajan{' '}
            </a>
            <strong>Sr. Performance Development Manager at Nestlé</strong> ,for
            whom I rapidly developed an <strong>e-commerce website</strong> for
            an Ayurvedic cosmetic startup. Demonstrating my agility and
            commitment to delivering under tight deadlines, I quickly mastered
            custom coding within the <strong>Wix platform</strong> to integrate{' '}
            <strong>Razorpay</strong>, showcasing my ability to learn and
            implement new technologies on demand. This project's success is also
            captured in a dedicated video.
          </p>
          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/86JzTTEgkfk"
              title="E-commerce Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="mb-4">
            Collaborating with my friend{' '}
            <a
              href="https://www.linkedin.com/in/divyaranjan-parida/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Divyaranjan Parida
            </a>
            , I developed a sophisticated{' '}
            <strong>travel agency management portal</strong>. This complex
            system, featuring distinct admin, travel agency owner, and user
            modules, was a profound learning experience in advanced{' '}
            <strong>Django</strong> and <strong>JavaScript</strong> development.
            A video documenting this project garnered{' '}
            <strong>over 2,000 views</strong>, reflecting its impact and the
            depth of our work.
          </p>
          <div className="aspect-video w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/kItUhivlV4M"
              title="Travel Agency Portal Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="mb-4">
            My professional journey continued with a transformative six-month
            internship at <strong>Kangaroo Software Pvt. Ltd.</strong> Here, I
            gained invaluable hands-on experience in designing and implementing{' '}
            <strong>REST APIs</strong> and expertly managing the{' '}
            <strong>backend</strong> infrastructure for their cutting-edge new
            project.
          </p>
          <p className="mb-4">
            Driven by a commitment to building secure and resilient
            applications, I pursued and successfully obtained a certification in{' '}
            <strong>Web Application Security from IIT Kharagpur</strong>. This
            rigorous training equipped me with a deep understanding of{' '}
            <strong>OWASP Top 10 vulnerabilities</strong>, advanced
            vulnerability discovery techniques,{' '}
            <strong>dorking methodologies</strong>, and comprehensive target
            scanning and control strategies, ensuring I build with security as a
            foundational principle.
          </p>
          <p className="mb-4">
            Beyond client work, I founded <strong>'monkweb,'</strong> a personal
            brand dedicated to providing free, high-quality education in
            technology, driven by my belief in empowering others through
            knowledge sharing.
          </p>
          <p className="mb-4">
            Currently, as a <strong>Master's in Computer Applications</strong>,
            I am actively expanding my expertise in{' '}
            <strong>AWS cloud services</strong>, meticulously documenting my
            learning journey and insights across YouTube, LinkedIn, and
            Instagram. This reflects my dedication to continuous growth and
            staying at the forefront of cloud technologies.
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/videoseries?list=PLYl14m0QaciRQgRZ44Wh2a0VLL5Nn_fDt"
              title="YouTube Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[450px] rounded-lg"
            ></iframe>
          </p>
          <hr />
          <p>
            My diverse experiences across <strong>frontend development</strong>,
            robust <strong>backend systems</strong>, critical{' '}
            <strong>cybersecurity practices</strong>, and scalable{' '}
            <strong>cloud infrastructure</strong> have forged me into a highly
            adaptable and versatile professional. While I thrive in various
            technical environments, my current focus and passion lie in
            leveraging <strong>cloud technologies</strong> to build the next
            generation of innovative solutions.
          </p>
        </div>
      </Modal>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans-inter">
      <style>
        {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

              body {
                  font-family: 'Inter', sans-serif;
                  background-color: #F8F8F8;
                  color: #1A1A1A;
                  line-height: 1.6;
              }
              .font-serif-display {
                  font-family: 'Playfair Display', serif;
              }
              .font-sans-inter {
                  font-family: 'Inter', sans-serif;
              }

              .modal-overlay {
                  position: fixed;
                  inset: 0;
                  background-color: rgba(0, 0, 0, 0.6);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  z-index: 1000;
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity 0.3s ease, visibility 0.3s ease;
              }
              .modal-overlay.open {
                  opacity: 1;
                  visibility: visible;
              }

              .modal-content-animated {
                  transform: scale(0.95);
                  opacity: 0;
                  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
              }
              .modal-overlay.open .modal-content-animated {
                  transform: scale(1);
                  opacity: 1;
              }
              `}
      </style>
      <Hero />
      <MyStoryAndDifference />
    </div>
  );
};

export default App;