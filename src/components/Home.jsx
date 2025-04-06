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

  return (
    <>
      {isExpanded && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setIsExpanded(false)}>
          <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={() => setIsExpanded(false)}>×</button>
          <img src={imageSrc.full} alt="Certificado expandido" className="max-w-[80vw] max-h-[80vh] object-contain" />
        </div>
      )}

      <div className="relative group cursor-pointer w-full aspect-w-3 aspect-h-2 transition-transform transform hover:scale-110 hover:shadow-2xl dark:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50" onClick={() => setIsExpanded(true)}>
        <img
          src={isDarkMode ? imageSrc.bnInverse : imageSrc.bn}
          alt={altText}
          className={`w-full h-full object-contain shadow-md ${isDarkMode ? 'shadow-gray-600' : 'shadow-gray-300'} transition-all duration-300`}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img src={imageSrc.color} alt="Certificado Color" className="w-full h-full object-contain shadow-md" />
        </div>
      </div>
      <div className="text-center font-bold mt-2 text-[7px] md:text-[8px] lg:text-[9px] px-2">{title}</div>
    </>
  );
};

const Home = () => {
  const certificates = [
    { path: "devops-cert01", title: "IT College - AWS Cloud Practitioner Course" },
    { path: "devops-cert02", title: "Amazon Web Services (AWS) - AWS Educate Introduction to Cloud 101" },
    { path: "devops-cert03", title: "Netec - AWS Discovery Day: Are You WellArchitected?" },
    { path: "devops-cert04", title: "Microsoft - Azure Fundamentals (AZ-900T00-A)" },
    { path: "devops-cert05", title: "Microsoft - Designing Microsoft Azure Infrastructure Solutions (AZ-305T00-A)" },
    { path: "devops-cert06", title: "The Linux Foundation - Introduction to Kubernetes (LFS158)" },
    { path: "devops-cert07", title: "EducacionIT - Certified in Streamlining Deployments Using Git and Coolify" },
    { path: "devops-cert08", title: "Microsoft - Querying Data with Microsoft Transact-SQL (DP-080)" },
    { path: "devops-cert09", title: "Akuity - Introduction to Continuous Delivery and GitOps using Argo CD" },
    { path: "devops-cert10", title: "The Linux Foundation - Getting Started with OpenTofu (LFEL1009)" },
    { path: "devops-cert11", title: "The Linux Foundation - Introduction to Istio (LFS144)" },
    { path: "devops-cert12", title: "Amazon Web Services (AWS) - Amazon EKS Pre-assessment Certificate" },
    { path: "devops-cert13", title: "Código Facilito - GitHub Actions Certificate" },
  ];

  // Agregamos las certificaciones de Ciberseguridad con las rutas actualizadas
  const cybersecurityCertificates = [
    { path: "soc-cert01", title: "ISC2 CC – Certified in Cybersecurity" },
    { path: "soc-cert02", title: "Microsoft Cybersecurity Architect (SC-100)" },
    { path: "soc-cert03", title: "Cisco Networking Academy - Digital Awareness Certificate" },
    { path: "soc-cert04", title: "Cisco Networking Academy - Introduction to Cybersecurity Certificate" },
    { path: "soc-cert05", title: "Fortinet - Certified Associate in Cybersecurity" },
    { path: "soc-cert06", title: "Palo Alto Networks - Cybersecurity Fundamentals" },
    { path: "soc-cert07", title: "Palo Alto Networks - Cloud Security Fundamentals" },
    { path: "soc-cert08", title: "Certiprof - Cybersecurity Awareness Professional Certification - CAPC" },
    { path: "soc-cert09", title: "Cybrary - Ethical Hacking Reconnaissance Techniques" },
    { path: "soc-cert10", title: "OPSWAT Academy - Certificate in Introduction to Critical Infrastructure Protection" },
    { path: "soc-cert11", title: "Academia de Ciberseguridad - Certified Cybersecurity Technician (CCT)" },
    { path: "soc-cert12", title: "IBM - Cybersecurity Fundamentals" },
    { path: "soc-cert13", title: "CódigoFacilito - Static Testing Course Certificate" },
    { path: "soc-cert14", title: "Ekoparty - Attacking Amazon Web Services Workshop Certificate" },
    { path: "soc-cert15", title: "Seguridad Cero Academy - Cybersecurity Fundamentals Certificate" },
  ];

  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        {/* Sección About */}
        <div className="flex flex-col gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-2xl font-bold md:text-4xl">About Me</h1>
          {[
            "I am an IT professional with over two decades of experience, transitioning into the world of DevOps. My career began as a Systems Administrator, and I've spent years refining my skills in IT infrastructure, automation, and systems optimization. While I’m still growing in the DevOps field, I am passionate about continuous learning, best practices, and enhancing IT efficiency through collaboration and automation.",
            "My focus is on leveraging tools like AWS, automation scripts, and best practices to improve infrastructure management and streamline development processes. I am committed to contributing my knowledge and skills to help teams build reliable, scalable, and efficient systems."
          ].map((text, idx) => (
            <p key={idx} className="text-sm text-gray-600 dark:text-gray-400 md:text-base">{text}</p>
          ))}
        </div>

        {/* Línea separadora entre About Me y Experience */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          {/* Sección Experience */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>
            <div className="flex flex-col gap-6">
              {/* Lista de experiencias */}
              <ul className="flex-1">
                {/* Primera experiencia */}
                <li className="relative border-l p-6">
                  {/* Viñeta alineada con DevOps Engineer */}
                  <div className="absolute left-[-8px] top-[96px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>

                  {/* Información del primer rol */}
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://www.farmaciastkl.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold transition-transform transition-colors duration-200 hover:scale-105 hover:font-extrabold hover:text-black dark:hover:text-white origin-center w-fit inline-block"
                    >
                      Farmacias TKL
                    </a>
                    <span className="text-base text-gray-500">
                      Industry: Pharmaceutical Retail & Services
                    </span>
                    <div className="text-lg font-semibold">DevOps Engineer</div>
                    <span className="text-sm text-gray-400">Mar 2024 - Present</span>
                  </div>

                  {/* Descripción de tareas */}
                  <div className="mt-2 flex flex-col gap-1">
                    {[
                      'Set up and maintained microservices testing environments on AWS EKS and Kubernetes, ensuring scalability and high availability.',
                      'Managed cloud secrets and enforced software version control policies to maintain security and facilitate timely updates.',
                      'Collaborated on infrastructure optimization in AWS for microservices testing, improving performance and reducing operational costs.'
                    ].map((desc, i) => (
                      <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                    ))}
                  </div>
                </li>

                {/* Segunda experiencia */}
                <li className="relative flex flex-col gap-1 border-l p-6">
                  <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white" />
                  <div className="px-0">
                    <div className="text-lg font-semibold">IT Systems Infrastructure Analyst</div>
                  </div>
                  <span className="text-sm text-gray-400">Sep 2015 - Mar 2024</span>
                  {[
                    'Administered and maintained physical and virtual servers across Unix, Linux, and Windows environments to ensure high availability.',
                    'Configured and managed Active Directory for user authentication and security, optimizing access control.',
                    'Enhanced network security by managing firewalls, routers, and switches, significantly reducing security risks.',
                    'Conducted performance assessments and implemented improvements to increase system reliability and efficiency.',
                    'Implemented automated backup solutions to ensure data security and rapid recovery in case of failure.'
                  ].map((desc, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-2xl font-bold md:text-4xl">Key Certifications</h1>
          <h2 className="text-xl font-semibold md:text-2xl">Cloud Computing, DevOps & Infrastructure Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5 mx-auto">
            {certificates.map(({ path, title }) => (
              <div key={path} className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={{
                    full: `/certificates/${path}-full.webp`,
                    bn: `/certificates/${path}-sml-bn.webp`,
                    bnInverse: `/certificates/${path}-sml-bn-inverse.webp`,
                    color: `/certificates/${path}-sml-color.webp`
                  }}
                  altText={`Certificado ${title}`}
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>

        {/* New Cybersecurity Certifications Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-2xl font-bold md:text-4xl">Cybersecurity Certifications</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-5 mx-auto">
            {cybersecurityCertificates.map(({ path, title }) => (
              <div key={path} className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={{
                    full: `/certificates/${path}-full.webp`,
                    bn: `/certificates/${path}-sml-bn.webp`,
                    bnInverse: `/certificates/${path}-sml-bn-inverse.webp`,
                    color: `/certificates/${path}-sml-color.webp`
                  }}
                  altText={`Certificado ${title}`}
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>

{/* Línea separadora entre About Me y Employment History */}
<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
  {/* Sección Employment History */}
  <div className="space-y-1">
    <h1 className="text-2xl font-bold md:text-4xl">Employment History</h1>
    <div className="flex flex-col gap-6">
      {/* Lista de experiencias - una sola columna */}
      <ul className="flex-1">
        {[
          {
            company: 'Argentine National Senate',
            role: 'IT Operations and Infrastructure | SysAdmin',
            period: '2014 - 2015',
            industry: 'Industry: National Government – Legislative Power',
            url: 'https://www.senado.gob.ar/',
            description: [
              'Spearheaded IT Operations and Infrastructure initiatives, optimizing system performance and ensuring efficient daily operations by implementing IT initiatives as directed.',
              'Managed servers, networks, and configurations with an emphasis on operational efficiency.',
              'Implemented proactive security measures to maintain data integrity and compliance with cybersecurity standards.'
            ]
          },
          {
            company: 'Argentine Ministry of Agriculture, Livestock, and Fisheries',
            role: 'IT Operations and Infrastructure | IT Support',
            period: '2011 - 2014',
            industry: 'Industry: Government – Agricultural Policy and Development',
            url: 'https://www.argentina.gob.ar/economia/agricultura',
            description: [
              'Led IT Operations and Infrastructure activities, supporting IT operations to ensure system stability and scalability.',
              'Provided reliable IT support by addressing user issues and enhancing the IT environment.',
              'Assisted in the improvement of IT infrastructure and the implementation of security protocols to protect sensitive information.'
            ]
          },
          {
            company: 'Telefónica (now Telecom)',
            role: 'IT Support & Operations',
            period: '2008 - 2011',
            industry: 'Industry: Telecommunications – Digital Services',
            url: 'https://www.telefonica.com.ar/',
            description: [
              'Delivered effective IT support and help desk services to ensure seamless day-to-day operations.',
              'Played a vital role in troubleshooting and resolving user-reported issues promptly.',
              'Collaborated with cross-functional teams to improve IT processes and user satisfaction.'
            ]
          },
          {
            company: 'Stelimp',
            role: 'IT Support | Help Desk',
            period: '2004 - 2008',
            industry: 'Industry: Building Maintenance Solutions',
            description: [
              'Provided dedicated IT support, addressing user concerns, and maintaining a productive work environment.',
              'Played a key role in troubleshooting hardware and software issues, ensuring minimal downtime.',
              'Contributed significativamente a la implementación de políticas y procedimientos de TI efectivos, mejorando la eficiencia operativa en general.',
              'Colaboró con el equipo de TI para optimizar el rendimiento del sistema y resolver problemas técnicos rápidamente.',
              'Extendió los servicios de soporte de TI a las operaciones en Uruguay, asegurando la continuidad de las operaciones en múltiples ubicaciones.'
            ]
          },
          {
            company: 'Undersoft',
            role: 'IT Support | Help Desk',
            period: '2002 - 2004',
            industry: 'Industry: IT Support and Systems Integration',
            description: [
              'Provided responsive IT support to address user concerns, and maintain a productive work environment.',
              'Played a key role in troubleshooting hardware and software issues, ensuring minimal downtime.',
              'Contributed to the implementation of IT policies and procedures.'
            ]
          },
          {
            company: 'Win Informática',
            role: 'IT Support | Help Desk',
            period: '2000 - 2002',
            industry: 'Industry: IT Hardware and Support Services',
            description: [
              'Offered comprehensive IT support, addressing user queries, and technical issues effectively.',
              'Contributed to the development and maintenance of IT infrastructure.',
              'Assisted in the deployment and maintenance of software and hardware systems.'
            ]
          }
        ].map((experience, index) => (
          <li key={index} className="relative flex flex-col gap-1 border-l p-6">
            {/* Viñeta alineada con el título del rol */}
            <div className="absolute left-[-6px] top-[90px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
            {/* Información de la experiencia */}
            <div className="px-0">
              <div className="flex flex-col">
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl font-bold transition-transform transition-colors duration-200 hover:scale-105 hover:font-extrabold hover:text-black dark:hover:text-white ${experience.company === 'Stelimp' || experience.company === 'Undersoft' || experience.company === 'Win Informática' ? '' : 'hover:scale-105 hover:font-extrabold hover:text-black dark:hover:text-white'}`}
                >
                  {experience.company}
                </a>
                <span className="text-base text-gray-500">
                  {experience.industry}
                </span>
              </div>
              <div className="text-lg font-semibold">{experience.role}</div>
            </div>
            <span className="text-sm text-gray-400">{experience.period}</span>
            {experience.description.map((desc, i) => (
              <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>


        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 All rights reserved.</p>
        </footer>
        <div className="border-t p-5 dark:border-gray-700">
        </div>

      </main>
    </div>
  );
};

export default Home;
