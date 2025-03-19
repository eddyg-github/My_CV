import React from 'react';

const Home = () => {
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

{/* Línea separadora entre About Me y Experience */}
<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">

{/* Sección Experience */}
<div className="space-y-1">
  <h1 className='text-2xl font-bold md:text-4xl'>Experience</h1>
  <div className="flex flex-col gap-6">
    {/* Lista de experiencias - una sola columna */}
    <ul className="flex-1">
      <li className="relative flex flex-col gap-1 border-l p-6">
        {/* Viñeta - Ajustada más arriba */}
        <div className="absolute left-[-10px] top-[70px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
        {/* Información de la experiencia */}
        <div className='px-0'>
          <span className='text-2xl font-bold'>Farmacias TKL</span>
        </div>
        <span className='text-lg font-semibold'>DevOps Engineer</span>
        <span className='text-sm text-gray-400'>Mar 2024 - Present</span>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Set up and maintained microservices testing environments on AWS EKS and Kubernetes, ensuring scalability and high availability.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Managed cloud secrets and enforced software version control policies to maintain security and facilitate timely updates.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Collaborated on infrastructure optimization in AWS for microservices testing, improving performance and reducing operational costs.
        </p>
      </li>

      <li className="relative flex flex-col gap-1 border-l p-6">
        {/* Viñeta de IT Systems - Ajustada correctamente */}
        <div className="absolute left-[-10px] top-[35px] h-3 w-3 rounded-full bg-black dark:bg-white"></div>
        {/* Información de la experiencia */}
        <span className='text-lg font-semibold'>IT Systems Infrastructure Analyst</span>
        <span className='text-sm text-gray-400'>Sep 2015 - Mar 2024</span>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Administered and maintained physical and virtual servers across Unix, Linux, and Windows environments to ensure high availability.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Configured and managed Active Directory for user authentication and security, optimizing access control.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Enhanced network security by managing firewalls, routers, and switches, significantly reducing security risks.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Conducted performance assessments and implemented improvements to increase system reliability and efficiency.
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Implemented automated backup solutions to ensure data security and rapid recovery in case of failure.
        </p>
      </li>
    </ul>
  </div>
</div>
</div>






<div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
<div className="max-w-3xl space-y-8">
  <h1 className='text-2xl font-bold md:text-4xl'>Key Certifications</h1>

  {/* Cloud Computing, DevOps & Infrastructure Certifications */}
  <h2 className="text-xl font-semibold md:text-2xl">Cloud Computing, DevOps & Infrastructure Certifications</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card para cada certificación */}
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">IT College</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">AWS Cloud Practitioner Course</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Amazon Web Services (AWS)</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">AWS Educate Introduction to Cloud 101</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Centro Netec México</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">AWS Discovery Day: Are You Well-Architected?</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Microsoft</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Azure Fundamentals (AZ-900T00-A)</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Microsoft</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Designing Microsoft Azure Infrastructure Solutions (AZ-305T00-A)</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">The Linux Foundation</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Introduction to Kubernetes (LFS158)</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">EducacionIT</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Certified in Streamlining Deployments Using Git and Coolify</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Microsoft</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Querying Data with Microsoft Transact-SQL (DP-080)</p>
    </div>
  </div>

  {/* Cybersecurity Certifications */}
  <h2 className="text-xl font-semibold md:text-2xl">Cybersecurity Certifications</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">ISC2</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">ISC2 CC – Certified in Cybersecurity</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Microsoft</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Microsoft Cybersecurity Architect (SC-100)</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Cisco Networking Academy</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Digital Awareness Certificate</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Cisco Networking Academy</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Introduction to Cybersecurity Certificate</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Fortinet</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Certified Associate in Cybersecurity</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Fortinet</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Certified Fundamentals in Cybersecurity</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Palo Alto Networks</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity Fundamentals</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Palo Alto Networks</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Cloud Security Fundamentals</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Certiprof</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity Awareness Professional Certification - CAPC</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Cybrary</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Ethical Hacking: Reconnaissance Techniques</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">OPSWAT Academy</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Certificate in Introduction to Critical Infrastructure Protection</p>
    </div>

    <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600">
      <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-white">Academia de Ciberseguridad</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Certified Cybersecurity Technician (CCT)</p>
    </div>
  </div>
</div>
</div>






        

        <div className="space-y-10">
  <h1 className="text-2xl font-bold md:text-4xl">References</h1>

  <div className="flex flex-wrap gap-10">
    <div className="text-baseline space-y-1">
      <h3 className="text-lg font-light">Mobile Developer</h3>
      <h2 className="text-base font-semibold md:text-2xl">Mr. Davis Jackson</h2>
      <p className="text-gray-600 dark:text-gray-400">Phone: 123-456-789</p>
      <p className="text-gray-600 dark:text-gray-400">Email: user@gmail.com</p>
    </div>

    <div className="text-baseline space-y-1">
      <h3 className="text-lg font-light">Mobile Developer</h3>
      <h2 className="text-base font-semibold md:text-2xl">Mr. Davis Jackson</h2>
      <p className="text-gray-600 dark:text-gray-400">Phone: 123-456-789</p>
      <p className="text-gray-600 dark:text-gray-400">Email: user@gmail.com</p>
    </div>

    <div className="text-baseline space-y-1">
      <h3 className="text-lg font-light">Mobile Developer</h3>
      <h2 className="text-base font-semibold md:text-2xl">Mr. Davis Jackson</h2>
      <p className="text-gray-600 dark:text-gray-400">Phone: 123-456-789</p>
      <p className="text-gray-600 dark:text-gray-400">Email: user@gmail.com</p>
    </div>

    <div className="text-baseline space-y-1">
      <h3 className="text-lg font-light">Mobile Developer</h3>
      <h2 className="text-base font-semibold md:text-2xl">Mr. Davis Jackson</h2>
      <p className="text-gray-600 dark:text-gray-400">Phone: 123-456-789</p>
      <p className="text-gray-600 dark:text-gray-400">Email: user@gmail.com</p>
    </div>


  </div>
</div>





      </main>
    </div>
  );
};

export default Home;
