import React from 'react';
import Container from './ui/Container';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="text-neutral-400 max-w-xs">
              Creating elegant, functional digital experiences that solve real
              problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Aayushsoni09"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayush-soni-09/"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/WebMonk44510"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-neutral-400">
              Email: aayush.soni.work@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-neutral-500 text-sm">
          <p>© {currentYear} monkweb. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
