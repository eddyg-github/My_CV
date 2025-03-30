import React from 'react';
import image from '/public/image.jpg';
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiLink } from 'react-icons/bi';
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'; // Importar los íconos de redes sociales
import { FaGitlab } from 'react-icons/fa';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col items-start gap-5">
        {/* Imagen y nombre centrados */}
        <div className="flex flex-col items-center gap-5 border-b p-5 w-full dark:border-gray-700 relative">
          <img src={image} alt="Eduardo Ghidoli" className="w-44 rounded-full" />
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
            Experienced IT professional with over two decades of expertise as a Systems Administrator and IT Infrastructure Analyst.
            Proficient in DevOps methodologies, emphasizing continuous learning, best practices, and the cultivation of a collaborative
            DevOps culture. Dedicated to enhancing IT efficiency and contributing to the success of information systems and telecommunications.
          </p>
        </div>

        {/* Contact Info Section: Información de contacto */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">CONTACT</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Buenos Aires, Argentina</span>
            </li>

            {/* Ofuscación del correo */}
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <a href="mailto:eduardoghidoli@gmail.com">email</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section: Redes sociales */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            {/* Sección de LinkedIn */}
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a href="https://www.linkedin.com/in/eduardo-ghidoli" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            
            {/* Sección de Github */}
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a href="https://github.com/eddyg-github" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>

            {/* Sección de GitLab */}
            <li className="flex items-center gap-2">
              <FaGitlab className="text-xl" />
              <a href="https://gitlab.com/eduardoghidoli" target="_blank" rel="noopener noreferrer">GitLab</a>
            </li>
          </ul>
        </div>

        {/* Education Section: Educación */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            {/* Listado de estudios */}
            <li className="relative flex flex-col gap-1 border-l p-6">
              {/* Viñeta - Ajustada a la derecha */}
              <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
              {/* Información del estudio */}
              <span className="font-semibold md:text-lg">Degree in DevOps Engineering</span>
              <span className="font-light">EDUCACION IT / MANHATTAN UNIVERSITY | RIVERDALE, NY</span>
              <span className="text-sm text-gray-400">2023 – 2024</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6">
              {/* Viñeta - Ajustada a la derecha */}
              <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
              {/* Información del estudio */}
              <span className="font-semibold md:text-lg">Degree in Cloud Security & DevSecOps Engineering</span>
              <span className="font-light">EKOPARTY HACKADEMY</span>
              <span className="text-sm text-gray-400">2024 – Ongoing</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6">
              {/* Viñeta - Ajustada a la derecha */}
              <div className="absolute left-[-8px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
              {/* Información del estudio */}
              <span className="font-semibold md:text-lg">Associate Degree in Cybersecurity</span>
              <span className="font-light">UTN (Argentina) – National Technological University</span>
              <span className="text-sm text-gray-400">2023 – Ongoing</span>
            </li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="flex flex-col gap-8 border-b p-8 w-full dark:border-gray-800">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Technical Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Operating Systems */}
            {["Unix", "Linux", "WinSrv"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Programming & Scripting */}
            {["Bash", "Python", "Java", "JavaScript", "Node.js"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Cloud Technologies */}
            {["AWS", "Azure", "GCP", "OpenStack"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Containers & Orchestration */}
            {["Docker", "Kubernetes", "Lens", "Helm"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* CI/CD & Version Control */}
            {["Jenkins", "Git", "GitLab", "GitHub", "ArgoCD"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Infrastructure as Code (IaC) */}
            {["Terraform", "Pulumi", "Vagrant"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Monitoring & Logging */}
            {["Prometheus", "ELK Stack", "Grafana", "Datadog", "Dynatrace"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Web & App Servers */}
            {["Nginx"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Virtualization */}
            {["Hyper-V", "VirtualBox", "VMware"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Databases */}
            {["MSSQL", "MySQL", "MongoDB"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}

            {/* Front-End Technologies */}
            {["HTML", "CSS", "React.js", "Tailwind"].map((skill, idx) => (
              <span
                key={idx}
                className="bg-black text-white p-2 rounded-lg text-xs font-bold dark:bg-white dark:text-black flex items-center justify-center h-6 w-20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Complementary Certifications Section */}
        <div className='p-5 border-b dark:border-gray-700'>
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
            <h2 className='text-base font-semibold mb-2 text-gray-800 dark:text-gray-200'>
              Additional Certifications
            </h2>
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

        {/* Languages Section: Idiomas */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700 rounded-lg shadow-sm">
          <h1 className="text-base font-semibold md:text-2xl text-gray-900 dark:text-white">LANGUAGES</h1>
          <div className="grid grid-cols-3 gap-12 md:text-lg">
            {/* Columna 1 */}
            <ul className="relative border-l border-gray-300 pl-6 flex flex-col gap-5">
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">Spanish</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">Native</div>
              </li>
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">English</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">C2</div>
              </li>
            </ul>

            {/* Columna 2 */}
            <ul className="relative border-l border-gray-300 pl-6 flex flex-col gap-5">
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">French</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">B1</div>
              </li>
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">Mandarin</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">B1</div>
              </li>
            </ul>

            {/* Columna 3 */}
            <ul className="relative border-l border-gray-300 pl-6 flex flex-col gap-5">
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">Portuguese</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">A1</div>
              </li>
              <li className="relative flex flex-col gap-1">
                <div className="relative flex items-center">
                  <div className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 h-3 w-3 rounded-full bg-black dark:bg-white"></div>
                  <span className="text-base font-semibold text-black dark:text-white">Russian</span>
                </div>
                <div className="text-black dark:text-gray-300 text-sm">A1</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;