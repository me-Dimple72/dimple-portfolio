import React, { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Folder,
  Code,
  Send,
  ArrowUp
} from "lucide-react";

export default function App() {
  const [openSection, setOpenSection] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);



  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);


  // Floating light
  useEffect(() => {
    let last = 0;
    const onMove = (e) => {
      const now = Date.now();
      if (now - last > 40) {
        last = now;
        setMouse({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Open / close section
  const toggleSection = (id) => {
    const newId = openSection === id ? null : id;
    setOpenSection(newId);

    setTimeout(() => {
      let ref =
        newId === "about" ? aboutRef.current :
        newId === "projects" ? projectsRef.current :
        newId === "skills" ? skillsRef.current :
        newId === "contact" ? contactRef.current :
        newId === "experience" ? ref = experienceRef.current:

        null;

      if (ref && newId) ref.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  const projects = [
    {
      title: "Shubham-Estate",
      outcome: "A modern real-estate platform designed for seamless property browsing and lead management.",
      link: "http://www.shubhamestate.in/",
      github: "https://github.com/me-Dimple72/Shubham-Estate",
      image: "/images/diabetesbg.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"]
    },
    {
      title: "Diabetes Prediction using ML",
      outcome: "Fast e-commerce MVP.",
      link: "#",
      github: "#",
      image: "/images/project-2.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
      title: "Diabetes Care Companion",
      outcome: "Fast e-commerce MVP.",
      link: "#",
      github: "#",
      image: "/images/project-2.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL"]
    }

  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">

    {/* TOP RIGHT HAMBURGER */}
<div 
  className="fixed top-6 right-6 z-50  cursor-pointer group"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <div className="w-4 h-[1px] bg-white mb-1 transition-all group-hover:scale-110"></div>
  <div className="w-4 h-[1px] bg-white mb-1 transition-all group-hover:scale-110"></div>
  <div className="w-4 h-[1px] bg-white transition-all group-hover:scale-110"></div>
</div>

{/* MINI OVERLAY */}
{menuOpen && (
  <>
    {/* Background blur overlay */}
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      onClick={() => setMenuOpen(false)}  // clicking outside closes menu
    ></div>

    {/* Slide-in panel */}
    <div
      className="fixed top-4 right-1 w-64 h-screen bg-black/70 border-l border-zinc-800 z-[70]
                 animate-[slideIn_0.3s_ease-out]"
    >

      <div className="p-6 text-xl font-semibold text-pink-400 cursor-pointer hover:text-pink"
           onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        Home
      </div>

      {/* RESUME BUTTON */}
  <a
    href="https://drive.google.com/file/d/1hZxuws9Ky1U1wuIvC1JJnImIKclJnXCu/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="mx-6  block text-start text-pink-500 font-semibold py-2 rounded-lg 
               hover:bg-pink-400 transition"
  >
    Resume
  </a>

      {/* EXPERIENCE */}
<div
  className="mx-6  block text-start text-pink-500 font-semibold py-2 rounded-lg 
               hover:bg-pink-400 transition"
  onClick={() => {
    setMenuOpen(false);
    setExperienceOpen(true);   // opens your experience section
  }}
>
  Experience
</div>


    </div>
  </>
)}


      {/* FIXED TOP-LEFT NAME */}
    <div className="fixed top-6 left-6 md:left-10 z-50 pr-4 signature-name name-animate">
    Dimple Goyal
    </div>


      {/* Background Blob */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          width: "600px",
          height: "600px",
          left: `${mouse.x - 300}px`,
          top: `${mouse.y - 300}px`,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
          transition: "left 0.20s ease-out, top 0.20s ease-out"
        }}
      />

      {/* HERO */}
      <main className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-3 name-animate">
            Hi, I'm <span className="text-pink-500">Dimple</span>
          </h1>

          <p className=" fade-slide-in text-xl md:text-2xl text-gray-300 mb-8">
           Shaping smarter systems.
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap text-sm text-gray-300">
            <div className="flex items-center gap-2 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800 name-animate ">
              <Code size={16} className="text-blue-400" /> AI & ML Practitioner 
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800 name-animate">
              <Code size={16} className="text-blue-400" /> Open-Source Contributor
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => toggleSection("about")} className="nav-btn name-animate ">
              <span className="text-xl">🌸</span> Me
            </button>
            <button onClick={() => toggleSection("projects")} className="nav-btn name-animate">
              <span className="text-xl">🧩</span> Projects
            </button>
            <button onClick={() => toggleSection("skills")} className="nav-btn name-animate">
              <span className="text-xl">🛠️</span> Skills
            </button>
            <button onClick={() => toggleSection("contact")} className="nav-btn name-animate">
              <span className="text-xl">💬</span> Connect 
            </button>
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section ref={aboutRef} id="about" className={`section ${openSection === "about" ? "open" : ""}`}>
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
            <p className="text-gray-300 mb-6">
              I’m a Data Science and Machine Learning enthusiast with hands-on experience in building predictive models and deploying ML solutions.
              I enjoy contributing to open-source, exploring new technologies, and continuously improving my skills.
              I’m passionate about creating meaningful work and collaborating within the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} id="projects" className={`section ${openSection === "projects" ? "open" : ""}`}>
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                {p.image && <img src={p.image} className="project-img" />}
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.outcome}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, ii) => (
                    <span key={ii} className="tag">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <a href={p.link} className="link-blue">
                    Live <ExternalLink size={16} />
                  </a>

                  <a href={p.github} className="link-gray">
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillsRef} id="skills" className={`section ${openSection === "skills" ? "open" : ""}`}>
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((g, i) => (
              <div key={i} className="card">
                <h3 className="text-2xl font-bold mb-4">{g.category}</h3>

                <div className="flex flex-wrap gap-3">
                  {g.items.map((s, ii) => (
                    <span key={ii} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} id="contact" className={`section ${openSection === "contact" ? "open" : ""}`}>
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Connect</h2>
          
          <div className="bg-zinc-900/40 rounded-2xl p-8 border border-zinc-800">
            <div className="flex justify-center gap-6 pt-4">
              {/* GitHub */}
            <a
              href="https://github.com/me-Dimple72"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/60 rounded-full hover:bg-zinc-700 border border-zinc-700 transition"
            >
              <Github size={22} className="text-pink-400" />
            </a>

                {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dimple-37803628b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-800/60 rounded-full hover:bg-zinc-700 border border-zinc-700 transition"
            >
            <Linkedin size={22} className="text-pink-400" />
            </a>


                 {/* Email (icon only) */}
            <a
              href="mailto:dimplegoyal0704@gmail.com"
              className="p-3 bg-zinc-800/60 rounded-full hover:bg-zinc-700 border border-zinc-700 transition"
            >
              <Mail size={22} className="text-pink-400" />
            </a>            

            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}

{/* EXPERIENCE (FULL WIDTH SECTION LIKE PROJECTS) */}
{experienceOpen && (
  <>
    {/* DARK OVERLAY */}
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
      onClick={() => setExperienceOpen(false)}
    ></div>

    {/* POPUP WINDOW */}
    <div className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl max-h-[85vh] 
                    overflow-y-auto
                    -translate-x-1/2 -translate-y-1/2 
                    bg-zinc-900 border border-zinc-700 
                    rounded-2xl p-10 shadow-lg z-[100] 
                    animate-[fadeUp_0.35s_ease-out]">

      {/* CLOSE BUTTON */}
      <div
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl cursor-pointer"
        onClick={() => setExperienceOpen(false)}
      >
        ✕
      </div>

      {/* HEADING */}
      <h2 className="text-4xl font-bold mb-8 text-pink-400 text-center">
        Experience
      </h2>

      {/* EXPERIENCE BLOCKS */}
      <div className="space-y-8">

        {/* BLOCK 1 */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-white">
            Campaign Strategist – EMC
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Lectrix / InterferenceTechnology.com  
          </p>
          <p className="leading-relaxed">
            Helping electronics and EMC/EMI companies increase visibility, generate leads, 
            and connect with high-intent engineers.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-white">
            Client Success Partner
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Second Brain Labs 
          </p>
          <p className="leading-relaxed">
            Helping consultants and agency owners automate their outreach and land 
            25+ qualified calls per month using our persuasion-led LinkedIn agent system.  
            Enabled clients to add $10k–$25k in new pipeline without manual lead chasing.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-white">
            Open Source Contributor
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            GirlScript Summer of Code 
          </p>
          <p className="leading-relaxed">
            • Contributed to the open-source projects by fixing issues, improving documentation, 
            building features<br />
            • Worked with tools like Git, GitHub, version control systems, and front-end technologies.<br />
          </p>
        </div>

      </div>
    </div>
  </>
)}

{/* FOOTER */}
<footer className="text-center py-6 text-sm text-gray-500 border-t border-zinc-800">
  © {new Date().getFullYear()} | Dimple  
</footer>


          
      {/* SCROLL TO TOP */}
      
    </div>
  );
}
