import React, { useState, useEffect } from 'react';
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiLink } from 'react-icons/bi';
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import { FaGitlab } from 'react-icons/fa';

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

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {

  const languageFlags = {
    Spanish: "https://flagcdn.com/w40/es.png", // España
    English: "https://flagcdn.com/w40/gb.png", // Reino Unido
    French: "https://flagcdn.com/w40/fr.png", // Francia
    Mandarin: "https://flagcdn.com/w40/cn.png", // China
    Portuguese: "https://flagcdn.com/w40/pt.png", // Portugal
    Russian: "https://flagcdn.com/w40/ru.png", // Rusia
  };

  const certificates = [
    { path: "ia-cert01", title: "Amazon Web Services (AWS) - Introduction to Generative AI" },
    { path: "ia-cert02", title: "Microsoft - Azure AI Fundamentals (AI-900T00-A)" },
    { path: "ia-cert03", title: "Microsoft - Develop GenAI Solutions with Azure OpenAI (AI-050T00)" },
    { path: "ia-cert04", title: "Microsoft - Empower your workforce with Copilot for Microsoft 365 Use Cases (MS-4004-A)" },
    { path: "ia-cert05", title: "Microsoft - Craft effective prompts for Microsoft Copilot for Microsoft 365 (MS-4005)" },
    { path: "ia-cert06", title: "CódigoFacilito - What The Hack - OpenAI Powered by Microsoft" },
    { path: "ia-cert07", title: "Massachusetts Institute of Technology (MIT) - Generative AI Certificate - Santander" },
    { path: "ia-cert08", title: "Google - Artificial Intelligence and Productivity - Santander" },
    { path: "ia-cert09", title: "TIDWIT - AWS GenAI Bootcamp" },
    { path: "ia-cert10", title: "TIDWIT - AWS GenAI Fundamentals" },
    { path: "ia-cert11", title: "TIDWIT - AWS GenAI Tools" },
    { path: "ia-cert12", title: "TIDWIT - Deep Dive into AWS GenAI Services" },
    { path: "ia-cert13", title: "Donweb - Building an AI Chatbot with Ollama" },
  ];

  const additionalCertifications = [
    { path: "ac-cert01", title: "Axigma - SAP SD Functional Consultant (Sales and Distribution)" },
    { path: "ac-cert02", title: "Centro Netec México - Data Analytics Fundamentals on AWS" },
    { path: "ac-cert03", title: "Educacion IT - Project Management Essentials" },
    { path: "ac-cert04", title: "Educación IT - Agile Team Leadership Certificate" },
    { path: "ac-cert05", title: "Educación IT - Scrum Fundamentals Certificate" },
    { path: "ac-cert06", title: "Zakidata - Power BI Career Accelerator Certificate" },
    { path: "ac-cert07", title: "Massachusetts Institute of Technology (MIT) - Internet of Things - Santander" },
    { path: "ac-cert08", title: "Netec - Introduction to Blockchain Technology Certificate" },
    { path: "ac-cert09", title: "Ingelearn - Certificate in Ladder Programming for Industrial Automation" },
    { path: "ac-cert10", title: "Skillfront - CASF: Certified Associate in Scrum Fundamentals" },
  ];

  const education = [
    { path: "ed-cert01", title: "Degree in DevOps Engineering" },
    {/* { path: "ed-cert02", title: "Degree in Cloud Security & DevSecOps Engineering" },
    { path: "ed-cert03", title: "Associate Degree in Cybersecurity" },*/}
  ];

  const [imageSrc, setImageSrc] = useState('/image01-bn.webp'); // Imagen inicial

  // Función para cambiar la imagen cuando el mouse entra
  const handleMouseEnter = () => {
    setImageSrc('/image01-color.webp'); // Imagen cuando el mouse está encima
  };

  // Función para volver a la imagen original cuando el mouse sale
  const handleMouseLeave = () => {
    setImageSrc('/image01-bn.webp'); // Imagen cuando el mouse sale
  };

  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col items-start gap-5">

        {/* Imagen y nombre centrados */}
        <div className="flex flex-col items-center gap-5 border-b p-5 w-full dark:border-gray-700 relative">
          <img
            src={imageSrc}
            alt="Eduardo Ghidoli"
            className="w-44 rounded-full"
            onMouseEnter={handleMouseEnter} // Cambiar imagen al pasar el mouse
            onMouseLeave={handleMouseLeave} // Volver a la imagen original al quitar el mouse
          />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              <span className="font-semibold">Eduardo Ghidoli</span>
            </h1>
            <h3 className="text-xl font-light">
              <span className="font-bold">SRE</span> | <span className="font-bold">DevOps</span> Engineer
            </h3>
          </div>
          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? <BiSun className="text-2xl" /> : <BiMoon className="text-2xl" />}
          </button>
        </div>

        {/* Qualification Highlights */}
        <div className="flex flex-col gap-5 border-b p-5 w-full dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">QUALIFICATION HIGHLIGHTS</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Experienced IT professional with over two decades of expertise as a Systems Administrator and IT Infrastructure Analyst. Proficient in DevOps methodologies, emphasizing continuous learning, best practices, and the cultivation of a collaborative DevOps culture. Dedicated to enhancing IT efficiency and contributing to the success of information systems and telecommunications.
          </p>
        </div>

        {/* Contact Info Section: Información de contacto */}
        <div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-base font-semibold md:text-2xl">CONTACT</h1>
          <ul className="space-y-3">
            {[
              { icon: <BiCurrentLocation className="text-xl" />, text: "Buenos Aires, Argentina", flag: "🇦🇷" },
              { icon: <BiEnvelope className="text-xl" />, text: <a href="mailto:eduardoghidoli@gmail.com">email</a> }
            ].map((contact, idx) => (
              <li key={idx} className="w-auto">
                {idx === 0 ? (
                  // Efecto aplicado al icono de ubicación con bandera y estrellas
                  <div className="group inline-flex items-center gap-2 p-1 rounded-md transition-transform duration-200 transform hover:scale-105 cursor-pointer">
                    <div className="border-2 p-1 rounded-full" style={{ borderColor: "#D1D5DB" }}>
                      {contact.icon}
                    </div>
                    <span className="transition-colors duration-200 group-hover:text-black dark:group-hover:text-white group-hover:font-bold">
                      {contact.text}
                    </span>
                    {/* Bandera de Argentina y estrellas aparecen solo al hacer hover */}
                    <span className="relative transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {/* Bandera */}
                      <span className="text-xl">{contact.flag}</span>
                      {/* Estrellas doradas más juntas y más altas */}
                      <span className="absolute top-[-8px] left-[-5px] text-yellow-500 text-xs group-hover:opacity-100 opacity-0 transition-opacity duration-300">★</span>
                      <span className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 text-yellow-500 text-xs group-hover:opacity-100 opacity-0 transition-opacity duration-300">★</span>
                      <span className="absolute top-[-8px] right-[-5px] text-yellow-500 text-xs group-hover:opacity-100 opacity-0 transition-opacity duration-300">★</span>
                    </span>
                  </div>
                ) : (
                  // Efecto aplicado al botón de email
                  <div className="group inline-flex items-center gap-2 p-1 rounded-md transition-transform duration-200 transform hover:scale-105 cursor-pointer">
                    <div className="border-2 p-1 rounded-full" style={{ borderColor: "#D1D5DB" }}>
                      {contact.icon}
                    </div>
                    <span className="transition-colors duration-200 group-hover:text-black dark:group-hover:text-white group-hover:font-bold">
                      {contact.text}
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section: Redes sociales */}
        <div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            {[
              { icon: <BiLogoLinkedin className="text-xl" />, name: "LinkedIn", url: "https://www.linkedin.com/in/eduardo-ghidoli" },
              { icon: <BiLogoGithub className="text-xl" />, name: "GitHub", url: "https://github.com/eddyg-github" },
              { icon: <FaGitlab className="text-xl" />, name: "GitLab", url: "https://gitlab.com/eduardoghidoli" }
            ].map((social, idx) => (
              <li key={idx} className="w-auto">
                <div className="group inline-flex items-center gap-2 p-1 rounded-md transition-transform duration-200 transform hover:scale-105 cursor-pointer">
                  <span className="transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
                    <div className="border-2 p-1 rounded-full" style={{ borderColor: "#D1D5DB" }}>
                      {social.icon}
                    </div>
                  </span>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 group-hover:text-black dark:group-hover:text-white group-hover:font-bold"
                  >
                    {social.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section: Educación */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            {[
              {
                degree: "Degree in DevOps Engineering",
                link: "https://www.educacionit.com/perfil/eduardo-ghidoli-935685/certificado/64510",
                school: "EDUCACION IT / MANHATTAN UNIVERSITY | RIVERDALE, NY",
                year: "2023 – 2024",
                cert: true,
              },
              {
                degree: "Degree in Cloud Security & DevSecOps Engineering",
                school: "EKOPARTY HACKADEMY",
                year: "2024 – Ongoing",
              },
              {
                degree: "Associate Degree in Cybersecurity",
                school: "UTN (Argentina) – National Technological University",
                year: "2023 – Ongoing",
              },
            ].map((s, i) => (
              <li key={i} className="relative flex flex-col gap-1 border-l p-6">
                <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white" />
                {s.link ? (
                  <div className="inline-flex items-center w-fit">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold md:text-lg transition-transform transition-colors duration-200 hover:scale-105 hover:font-bold hover:text-black dark:hover:text-white origin-center"
                    >
                      {s.degree}
                    </a>
                  </div>
                ) : (
                  <span className="font-semibold md:text-lg">{s.degree}</span>
                )}
                <span className="font-light">{s.school}</span>
                <span className="text-sm text-gray-400">{s.year}</span>
                {s.cert && (
                  <div className="pt-4 w-40">
                    <CertificateImage
                      imageSrc={{
                        full: "/certificates/ed-cert01-full.webp",
                        bn: "/certificates/ed-cert01-sml-bn.webp",
                        bnInverse: "/certificates/ed-cert01-sml-bn-inverse.webp",
                        color: "/certificates/ed-cert01-sml-color.webp",
                      }}
                      altText="Certificado DevOps"
                      title=""
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="flex flex-col gap-6 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Technical Skills</h1>
          <div className="flex flex-wrap gap-0">
            {[
              ["JavaScript", "AWS", "Unix", "Node.js", "Kubernetes"],
              ["Git", "Bash", "Jenkins", "Prometheus", "GCP", "Helm"],
              ["Vagrant", "VirtualBox", "CSS", "Java", "Datadog"],
              ["OpenStack", "Lens", "Python", "Linux", "Terraform"],
              ["HTML", "GitLab", "Azure", "ArgoCD", "VMware"],
              ["MySQL", "Grafana", "Dynatrace", "Docker", "WinSrv"],
              ["Nginx", "ELK Stack", "GitHub", "Pulumi", "MSSQL"],
              ["Hyper-V", "MongoDB", "React.js", "Tailwind"]
            ].map((line, idx) => (
              line.map((skill, skillIdx) => (
                <span
                  key={`${idx}-${skillIdx}`}
                  className="border-2 text-gray-800 dark:text-gray-100 p-2 rounded-lg text-xs font-bold transition-transform transform hover:scale-110 hover:shadow-2xl dark:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 hover:font-extrabold"
                  style={{
                    borderColor: "#D1D5DB",
                    marginRight: "4px",
                    marginBottom: "4px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, font-weight 0.3s ease",
                  }}
                >
                  {skill}
                </span>
              ))
            ))}
          </div>
        </div>

{/* Languages Section: Idiomas */}
<div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
  <h1 className="text-base font-semibold md:text-2xl text-gray-900 dark:text-white">
    LANGUAGES
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:text-lg">
    {[
      [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'C2' },
      ],
      [
        { name: 'French', level: 'B1' },
        { name: 'Mandarin', level: 'B1' },
      ],
      [
        { name: 'Portuguese', level: 'A1' },
        { name: 'Russian', level: 'A1' },
      ],
    ].map((column, colIndex) => (
      <ul
        key={colIndex}
        className="relative border-l border-gray-300 pl-6 flex flex-col gap-5"
      >
        {column.map((language, index) => (
          <li key={index} className="relative flex flex-col gap-1 group">
            <div className="relative flex items-center gap-2">
              <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
              <img
                src={languageFlags[language.name]}
                alt={`${language.name} flag`}
                className="w-6 h-4 rounded-sm filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:w-6.5 group-hover:h-4.5"
              />
              <span className="text-base font-semibold text-black dark:text-white transition-all duration-300 group-hover:font-bold group-hover:text-[1.05rem]">
                {language.name}
              </span>
            </div>
            <div className="text-black dark:text-gray-300 text-sm transition-all duration-300 group-hover:font-bold group-hover:text-[1rem]">
              {language.level}
            </div>
          </li>
        ))}
      </ul>
    ))}
  </div>
</div>


        {/* Complementary Certifications Section */}
        <div className="flex flex-col gap-1 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-base font-bold md:text-xl mb-2 text-gray-900 dark:text-gray-100">COMPLEMENTARY CERTIFICATIONS</h1>
          <div className='mb-1'>
            <h2 className='text-base font-semibold mb-2 text-gray-800 dark:text-gray-200'>Generative AI & Advanced Tools</h2>
          </div>
          <div className="grid grid-cols-12 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
            {certificates.map(({ path, title }) => (
              <div key={path} className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={{
                    full: `/certificates/${path}-full.webp`,
                    bn: `/certificates/${path}-sml-bn.webp`,
                    bnInverse: `/certificates/${path}-sml-bn-inverse.webp`,
                    color: `/certificates/${path}-sml-color.webp`,
                  }}
                  altText={`Certificado ${title}`}
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications Section */}
        <div className="flex flex-col gap-1 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-base font-bold md:text-xl mb-2 text-gray-900 dark:text-gray-100">ADDITIONAL CERTIFICATIONS</h1>

          <div className="grid grid-cols-12 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
            {additionalCertifications.map(({ path, title }) => (
              <div key={path} className="flex flex-col items-center">
                <CertificateImage
                  imageSrc={{
                    full: `/certificates/${path}-full.webp`,
                    bn: `/certificates/${path}-sml-bn.webp`,
                    bnInverse: `/certificates/${path}-sml-bn-inverse.webp`,
                    color: `/certificates/${path}-sml-color.webp`,
                  }}
                  altText={`Certificado ${title}`}
                  title={title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
