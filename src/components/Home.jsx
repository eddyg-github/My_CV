import React, { useState, useEffect } from 'react';

const CertificateImage = ({ imageSrc, altText, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleImageClick = () => {
    setIsExpanded(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <button 
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={handleClose}
          >
            ×
          </button>
          <img 
            src={imageSrc.full}
            alt="Certificado expandido"
            className="max-w-[80vw] max-h-[80vh] object-contain"
            style={{ borderRadius: '0' }}  // Asegurando que no haya bordes redondeados
          />
        </div>
      )}

      <div className="relative group cursor-pointer w-full aspect-w-3 aspect-h-2" onClick={handleImageClick}>
        <img
          src={isDarkMode ? imageSrc.bnInverse : imageSrc.bn}
          alt={altText}
          className="w-full h-full object-contain shadow-md transition-all duration-300"
          style={{ borderRadius: '0' }}  // Asegurando que no haya bordes redondeados
        />
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img
            src={imageSrc.color}
            alt="Certificado Color"
            className="w-full h-full object-contain shadow-md"
            style={{ borderRadius: '0' }}  // Asegurando que no haya bordes redondeados
          />
        </div>
      </div>
      <div className="text-center font-bold mt-2 text-[7px] md:text-[8px] lg:text-[9px] px-2">
        {title}
      </div>
    </>
  );
};

const Home = () => {
  const cert1 = {
    full: "/certificates/devops-cert01-full.jpg",
    bn: "/certificates/devops-cert01-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert01-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert01-sml-color.jpg"
  };

  const cert2 = {
    full: "/certificates/devops-cert02-full.jpg",
    bn: "/certificates/devops-cert02-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert02-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert02-sml-color.jpg"
  };

  const cert3 = {
    full: "/certificates/devops-cert03-full.jpg",
    bn: "/certificates/devops-cert03-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert03-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert03-sml-color.jpg"
  };

  const cert4 = {
    full: "/certificates/devops-cert04-full.jpg",
    bn: "/certificates/devops-cert04-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert04-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert04-sml-color.jpg"
  };

  const cert5 = {
    full: "/certificates/devops-cert05-full.jpg",
    bn: "/certificates/devops-cert05-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert05-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert05-sml-color.jpg"
  };

  const cert6 = {
    full: "/certificates/devops-cert06-full.jpg",
    bn: "/certificates/devops-cert06-sml-bn.jpg",
    bnInverse: "/certificates/devops-cert06-sml-bn-inverse.jpg",
    color: "/certificates/devops-cert06-sml-color.jpg"
  };

  return (
    <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
      <main className='flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14'>
        {/* Sección About */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <div className="space-y-5">
            <h1 className='text-2xl font-bold md:text-4xl'>About Me</h1>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
              I am an IT professional with over two decades of experience, transitioning into the world of DevOps. My career began as a Systems Administrator, and I've spent years refining my skills in IT infrastructure, automation, and systems optimization. While I’m still growing in the DevOps field, I am passionate about continuous learning, best practices, and enhancing IT efficiency through collaboration and automation.
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400 md:text-base'>
              My focus is on leveraging tools like AWS, automation scripts, and best practices to improve infrastructure management and streamline development processes. I am committed to contributing my knowledge and skills to help teams build reliable, scalable, and efficient systems. 
            </p>
          </div>
        </div>

        {/* Sección de certificaciones */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <div className="max-w-3xl space-y-8">
            <h1 className='text-2xl font-bold md:text-4xl'>Key Certifications</h1>

            {/* Cloud Computing, DevOps & Infrastructure Certifications */}
            <h2 className="text-xl font-semibold md:text-2xl">Cloud Computing, DevOps & Infrastructure Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5 mx-auto">
              <div className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={cert1}
                  altText="Certificado B/N DevOps"
                  title="IT College - AWS Cloud Practitioner Course"
                />
              </div>
              <div className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={cert2}
                  altText="Certificado B/N AWS Educate"
                  title="Amazon Web Services (AWS) - AWS Educate Introduction to Cloud 101"
                />
              </div>
              <div className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={cert3}
                  altText="Certificado B/N AWS Discovery Day"
                  title="Centro Netec México - AWS Discovery Day Are You Well-Architected"
                />
              </div>
              <div className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={cert4}
                  altText="Certificado B/N Azure Fundamentals"
                  title="Microsoft - Azure Fundamentals (AZ-900T00-A)"
                />
              </div>
              <div className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={cert5}
                  altText="Certificado B/N Azure Design"
                  title="Microsoft - Designing Microsoft Azure Infrastructure Solutions (AZ-305T00-A)"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
