import React, { useState } from 'react';
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiLink } from 'react-icons/bi';
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import { FaGitlab } from 'react-icons/fa';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  const [imageSrc, setImageSrc] = useState('/public/image01-bn.webp'); // Imagen inicial

  // Función para cambiar la imagen cuando el mouse entra
  const handleMouseEnter = () => {
    setImageSrc('/public/image01-color.webp'); // Imagen cuando el mouse está encima
  };

  // Función para volver a la imagen original cuando el mouse sale
  const handleMouseLeave = () => {
    setImageSrc('/public/image01-bn.webp'); // Imagen cuando el mouse sale
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
            <h3 className="text-xl font-light">DevOps Engineer</h3>
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
              { icon: <BiCurrentLocation className="text-xl" />, text: "Buenos Aires, Argentina" },
              { icon: <BiEnvelope className="text-xl" />, text: <a href="mailto:eduardoghidoli@gmail.com">email</a> }
            ].map((contact, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {contact.icon}
                <span>{contact.text}</span>
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
              <li key={idx} className="flex items-center gap-2">
                {social.icon}
                <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section: Educación */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            {[
              { degree: "Degree in DevOps Engineering", school: "EDUCACION IT / MANHATTAN UNIVERSITY | RIVERDALE, NY", year: "2023 – 2024" },
              { degree: "Degree in Cloud Security & DevSecOps Engineering", school: "EKOPARTY HACKADEMY", year: "2024 – Ongoing" },
              { degree: "Associate Degree in Cybersecurity", school: "UTN (Argentina) – National Technological University", year: "2023 – Ongoing" }
            ].map((study, idx) => (
              <li key={idx} className="relative flex flex-col gap-1 border-l p-6">
                <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                <span className="font-semibold md:text-lg">{study.degree}</span>
                <span className="font-light">{study.school}</span>
                <span className="text-sm text-gray-400">{study.year}</span>
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
          className="border-2 text-gray-800 dark:text-gray-100 p-2 rounded-lg text-xs font-bold transition-transform transform hover:scale-110 hover:shadow-2xl dark:hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          style={{
            borderColor: "#D1D5DB", // Borde gris claro
            marginRight: "4px", // Reducido el margen entre elementos
            marginBottom: "4px", // Reducido el margen inferior
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transición suave
          }}
        >
          {skill}
        </span>
      ))
    ))}
  </div>
</div>










        {/* Complementary Certifications Section */}
        <div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
          <h1 className='text-lg font-bold md:text-2xl mb-4 text-gray-900 dark:text-gray-100'>
            Complementary Certifications
          </h1>

          {/* Generative AI Section */}
          <div className='mb-4'>
            <h2 className='text-base font-semibold mb-2 text-gray-800 dark:text-gray-200'>
              Generative AI & Advanced Tools
            </h2>
            <div className='rounded-lg p-4 shadow-sm space-y-2'>
              {[
                ['Amazon Web Services (AWS)', 'Introduction to Generative AI'],
                ['Microsoft', 'Azure AI Fundamentals (AI-900T00-A)'],
                ['Microsoft', 'Develop GenAI Solutions with Azure OpenAI (AI-050)'],
                ['Microsoft', 'Copilot Use Cases (MS-4004-A)'],
                ['Microsoft', 'Prompting for Copilot (MS-4005)'],
                ['Microsoft', 'What the Hack: Azure OpenAI'],
                ['Google', 'AI & Productivity Certificate'],
                ['Massachusetts Institute of Technology', 'Generative AI Certificate'],
                ['TIDWIT', 'AWS GenAI Bootcamp'],
                ['TIDWIT', 'GenAI Fundamentals'],
                ['TIDWIT', 'GenAI Tools'],
                ['TIDWIT', 'GenAI Deep Dive'],
              ].map(([issuer, cert], idx) => (
                <div key={idx} className='flex flex-col'>
                  <span className='text-black dark:text-white font-medium'>{issuer}</span>
                  <span className='text-gray-700 dark:text-gray-400 text-sm'>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Certifications Section */}
          <div>
            <h1 className='text-lg font-bold md:text-2xl mb-4 text-gray-900 dark:text-gray-100'>
              Additional Certifications
            </h1>
            <div className='rounded-lg p-4 shadow-sm space-y-2'>
              {[
                ['Axigma', 'SAP Functional Consultant (SD)'],
                ['Centro Netec México', 'AWS Data Analytics Fundamentals'],
                ['EducacionIT', 'Project Management Essentials'],
                ['EducacionIT', 'Scrum Fundamentals Certified (SFC)'],
                ['ZAKIDATA', 'Career Accelerator with Power BI'],
                ['Massachusetts Institute of Technology', 'Internet Of Things (IoT) Certificate'],
                ['Centro Netec México', 'Introduction to Blockchain Technology'],
              ].map(([issuer, cert], idx) => (
                <div key={idx} className='flex flex-col'>
                  <span className='text-black dark:text-white font-medium'>{issuer}</span>
                  <span className='text-gray-700 dark:text-gray-400 text-sm'>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Languages Section: Idiomas */}
      <div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
        <h1 className="text-base font-semibold md:text-2xl text-gray-900 dark:text-white">LANGUAGES</h1>
        <div className="grid grid-cols-3 gap-12 md:text-lg">
          {[
            // Columna 1
            [
              { name: 'Spanish', level: 'Native' },
              { name: 'English', level: 'C2' },
            ],
            // Columna 2
            [
              { name: 'French', level: 'B1' },
              { name: 'Mandarin', level: 'B1' },
            ],
            // Columna 3
            [
              { name: 'Portuguese', level: 'A1' },
              { name: 'Russian', level: 'A1' },
            ],
          ].map((column, colIndex) => (
            <ul key={colIndex} className="relative border-l border-gray-300 pl-6 flex flex-col gap-5">
              {column.map((language, index) => (
                <li key={index} className="relative flex flex-col gap-1">
                  <div className="relative flex items-center">
                    <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                    <span className="text-base font-semibold text-black dark:text-white">{language.name}</span>
                  </div>
                  <div className="text-black dark:text-gray-300 text-sm">{language.level}</div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;