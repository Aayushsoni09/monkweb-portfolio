

// const LifeUpdateSection: React.FC = () => {
//   return (
//     <Section id="life-update" title="Life Update">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="max-w-3xl mx-auto text-center"
//       >
//         <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-2xl">
//           <div className="bg-white rounded-2xl p-8">
//             <Award size={48} className="mx-auto mb-6 text-blue-500" />
//             <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Preparing for AWS Solutions Architect Associate
//             </h3>
//             <p className="text-neutral-700 text-lg">
//               Currently dedicating my time to mastering AWS services and best practices. 
//               Follow my certification journey as I prepare to become an AWS Certified Solutions Architect Associate.
//               Stay tuned for insights and learning resources!
//             </p>
//           </div>
//         </div>
//       </motion.div>
//       <Divider className="mt-20" />
//     </Section>
//   );
// };

// export default LifeUpdateSection;


import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import Divider from '../ui/Divider';
import { ExternalLink } from 'lucide-react';

// You will need to make sure these images are available in your public or assets folder
// For example: import AwsLogo from 'path/to/assets/aws-logo.png';
// For this example, I'll use simple strings for the image paths.
const AWS_LOGO_PATH = '../../../dist/assets/aws.jpeg'; // Update this path
const DELOITTE_LOGO_PATH = '../../../dist/assets/deloitte.jpeg';
const MASTERCARD_LOGO_PATH = '../../../dist/assets/master.jpeg';
const TATA_LOGO_PATH = '../../../dist/assets/tata.jpeg';
const IITK_LOGO_PATH = '../../../dist/assets/iit.jpeg'; 

// Certification Data Structure
const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Oct 2025',
    expires: 'Oct 2028',
    credentialID: 'a19f6b0e53b445ed80671b3b6d07137a',
    credentialUrl: 'https://www.credly.com/badges/dccfdec7-02e9-4daf-817a-12b9df993ba7/public_url', 
    logo: AWS_LOGO_PATH,
    logoAlt: 'AWS Logo',
  },
  {
    id: 2,
    title: 'Deloitte Australia - Cyber Job Simulation',
    issuer: 'Deloitte',
    issued: 'Jul 2025',
    expires: null, // No expiration date for this one
    credentialID: 'XPYn5tUjsgRLQBkwd',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_wzovo4JhzZnFCT6Rr_1753468373171_completion_certificate.pdf', // Replace with actual URL
    logo: DELOITTE_LOGO_PATH,
    logoAlt: 'Deloitte Logo',
  },
    {
    id: 3,
    title: 'Mastercard - Cybersecurity Job Simulation',
    issuer: 'Mastercard',
    issued: 'Jul 2025',
    expires: null, // No expiration date for this one
    credentialID: '29L3C4G2MZiMqz4NS',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_wzovo4JhzZnFCT6Rr_1753469913162_completion_certificate.pdf', // Replace with actual URL
    logo: MASTERCARD_LOGO_PATH,
    logoAlt: 'Mastercard Logo',
  },
    {
    id: 4,
    title: 'Tata - Cybersecurity Analyst Job Simulation',
    issuer: 'Tata Group',
    issued: 'Jul 2025',
    expires: null, // No expiration date for this one
    credentialID: 'cHAXiWPh5sS5i7dDn',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_wzovo4JhzZnFCT6Rr_1753467263646_completion_certificate.pdf', // Replace with actual URL
    logo: TATA_LOGO_PATH,
    logoAlt: 'TaTa Logo',
  },
    {
    id: 5,
    title: 'Ethical Hacking',
    issuer: 'Indian Institute of Technology Kharagpur',
    issued: 'Dec 2022',
    expires: null, // No expiration date for this one
    credentialID: 'TP-WC-1138',
    credentialUrl: 'https://drive.google.com/file/d/1ViXKvDVAZGQuU-m_gdMNV5Dl22tk2CR5/view?usp=sharing', // Replace with actual URL
    logo: IITK_LOGO_PATH,
    logoAlt: 'IIT Kharagpur logo',
  }
];

// Helper component for a single certification entry
const CertificationItem: React.FC<typeof certifications[0]> = ({
  title,
  issuer,
  issued,
  expires,
  credentialID,
  credentialUrl,
  logo,
  logoAlt,
}) => (
  <div className="flex items-start space-x-4 py-4 border-b last:border-b-0">
    {/* Logo */}
    <div className="flex-shrink-0 w-14 h-14">
      {/* Assuming the logo is square, you can adjust sizing and object-fit */}
      <img
        src={logo}
        alt={logoAlt}
        className="w-full h-full object-contain"
        // Add a class for background color if the image is transparent (e.g., bg-gray-100)
      />
    </div>

    {/* Certification Details */}
    <div>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-600 mb-1">{issuer}</p>
      
      {/* Dates and Credential ID */}
      <p className="text-sm text-neutral-600">
        Issued {issued} {expires ? `• Expires ${expires}` : ''}
      </p>
      <p className="text-sm text-neutral-600 mb-3">
        Credential ID {credentialID}
      </p>

      {/* Show Credential Button */}
      <a
        href={credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center 
                   border border-neutral-400 rounded-full 
                   px-4 py-1.5 text-sm font-medium text-neutral-700 
                   hover:bg-neutral-50 transition duration-150"
      >
        Show credential
        <ExternalLink size={16} className="ml-2" />
      </a>
    </div>
  </div>
);

// Main Section Component
const CertificationsSection: React.FC = () => {
  return (
    // Updated Section props to reflect the new purpose
    <Section id="certifications" title="Licenses & Certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* The main container styling is simpler here, focusing on the list */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-neutral-200">
          {certifications.map((cert, index) => (
            <CertificationItem key={cert.id} {...cert} />
          ))}
        </div>
      </motion.div>
      <Divider className="mt-12" />
    </Section>
  );
};

export default CertificationsSection;