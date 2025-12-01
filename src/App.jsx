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
        newId === "experience" ? experienceRef.current :
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
      outcome: "Machine learning model for early diabetes detection with high accuracy prediction.",
      link: "#",
      github: "#",
      image: "/images/project-2.jpg",
      tech: ["Python", "Scikit-learn", "Pandas", "Flask"]
    },
    {
      title: "Diabetes Care Companion",
      outcome: "Comprehensive health tracking app for diabetes patients with nutrition and insulin monitoring.",
      link: "#",
      github: "#",
      image: "/images/unnamed.jpg",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"]
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
        className="fixed top-6 right-6 z-50 cursor-pointer group"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-4 h-[1px] bg-white mb-1 transition-all group-hover:scale-110"></div>
        <div className="w-4 h-[1px] bg-white mb-1 transition-all group-hover:scale-110"></div>
        <div className="w-4 h-[1px] bg-white transition-all group-hover:scale-110"></div>
      </div>

      {/* MINI OVERLAY */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-4 right-1 w-64 h-screen bg-black/70 border-l border-zinc-800 z-[70]">
            <div className="p-6 text-xl font-semibold text-pink-400 cursor-pointer hover:text-pink"
                 onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Home
            </div>

            <a
              href="https://drive.google.com/file/d/1hZxuws9Ky1U1wuIvC1JJnImIKclJnXCu/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 block text-start text-pink-500 font-semibold py-2 rounded-lg hover:bg-pink-400 transition"
            >
              Resume
            </a>

            <div
              className="mx-6 block text-start text-pink-500 font-semibold py-2 rounded-lg hover:bg-pink-400 transition"
              onClick={() => {
                setMenuOpen(false);
                setExperienceOpen(true);
              }}
            >
              Experience
            </div>
          </div>
        </>
      )}

      {/* FIXED TOP-LEFT NAME */}
      <div 
        className="fixed top-6 left-6 md:left-10 z-50 pr-4"
        style={{
          fontFamily: "'Dancing Script', cursive, serif",
          fontSize: '1.8rem',
          lineHeight: '3rem',
          fontWeight: 600,
          background: 'linear-gradient(90deg, #ff77c8, #ff2ba6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          paddingRight: '8px',
          whiteSpace: 'nowrap'
        }}
      >
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
          background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
          transition: "left 0.20s ease-out, top 0.20s ease-out"
        }}
      />

      {/* HERO */}
      <main className="min-h-screen flex items-center justify-center px-6 text-center relative z-10">
        <div className="w-full max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-3">
            Hi, I'm <span className="text-pink-500">Dimple</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Shaping smarter systems.
          </p>

          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap text-sm text-gray-300">
            <div className="flex items-center gap-2 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800">
              <Code size={16} className="text-blue-400" /> AI & ML Practitioner 
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/60 px-4 py-2 rounded-full border border-zinc-800">
              <Code size={16} className="text-blue-400" /> Open-Source Contributor
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => toggleSection("about")} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-3 hover:border-zinc-600 transition-all"
            >
              <span className="text-xl">🌸</span> Me
            </button>
            <button 
              onClick={() => toggleSection("projects")} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-3 hover:border-zinc-600 transition-all"
            >
              <span className="text-xl">🧩</span> Projects
            </button>
            <button 
              onClick={() => toggleSection("skills")} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-3 hover:border-zinc-600 transition-all"
            >
              <span className="text-xl">🛠️</span> Skills
            </button>
            <button 
              onClick={() => toggleSection("contact")} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 py-3 hover:border-zinc-600 transition-all"
            >
              <span className="text-xl">💬</span> Connect 
            </button>
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section 
        ref={aboutRef} 
        id="about" 
        className={`relative z-10 transition-all duration-500 ${openSection === "about" ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
            <p className="text-gray-300 mb-6">
              I'm a Data Science and Machine Learning enthusiast with hands-on experience in building predictive models and deploying ML solutions.
              I enjoy contributing to open-source, exploring new technologies, and continuously improving my skills.
              I'm passionate about creating meaningful work and collaborating within the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS - OPTIMIZED IMAGE LAYOUT */}
      <section 
        ref={projectsRef} 
        id="projects" 
        className={`relative z-10 transition-all duration-500 ${openSection === "projects" ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div 
                key={i} 
                className="group bg-zinc-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500 hover:transform hover:scale-[1.02]"
              >
                {/* Perfect Image Container */}
                <div className="relative overflow-hidden bg-zinc-800/50" style={{ aspectRatio: '16/9' }}>
                  <img 
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={p.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-600 hover:bg-pink-700 rounded-full backdrop-blur-sm transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full backdrop-blur-sm transition-all"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {p.outcome}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, ii) => (
                      <span 
                        key={ii} 
                        className="bg-zinc-800/60 text-gray-300 px-2.5 py-1 rounded-lg text-xs border border-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-zinc-800">
                    <a 
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-pink-400 hover:text-pink-300 text-sm transition-colors"
                    >
                      Live <ExternalLink size={14} />
                    </a>
                    <a 
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      Code <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section 
        ref={skillsRef} 
        id="skills" 
        className={`relative z-10 transition-all duration-500 ${openSection === "skills" ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((g, i) => (
              <div key={i} className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">{g.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {g.items.map((s, ii) => (
                    <span 
                      key={ii} 
                      className="bg-zinc-800/60 px-4 py-2 rounded-lg text-white border border-zinc-700 hover:bg-zinc-700 transition-all"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section 
        ref={contactRef} 
        id="contact" 
        className={`relative z-10 transition-all duration-500 ${openSection === "contact" ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Connect</h2>
          
          <div className="bg-zinc-900/40 rounded-2xl p-8 border border-zinc-800">
            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://github.com/me-Dimple72"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800/60 rounded-full hover:bg-zinc-700 border border-zinc-700 transition"
              >
                <Github size={22} className="text-pink-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/dimple-37803628b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-800/60 rounded-full hover:bg-zinc-700 border border-zinc-700 transition"
              >
                <Linkedin size={22} className="text-pink-400" />
              </a>

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

      {/* EXPERIENCE POPUP */}
      {experienceOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            onClick={() => setExperienceOpen(false)}
          ></div>

          <div className="fixed top-1/2 left-1/2 w-[90%] max-w-3xl max-h-[85vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-zinc-700 rounded-2xl p-10 shadow-lg z-[100]">
            <div
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl cursor-pointer"
              onClick={() => setExperienceOpen(false)}
            >
              ✕
            </div>

            <h2 className="text-4xl font-bold mb-8 text-pink-400 text-center">
              Experience
            </h2>

            <div className="space-y-8">
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Campaign Strategist – EMC
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Lectrix / InterferenceTechnology.com  
                </p>
                <p className="leading-relaxed text-gray-300">
                  Helping electronics and EMC/EMI companies increase visibility, generate leads, 
                  and connect with high-intent engineers.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Client Success Partner
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  Second Brain Labs 
                </p>
                <p className="leading-relaxed text-gray-300">
                  Helping consultants and agency owners automate their outreach and land 
                  25+ qualified calls per month using our persuasion-led LinkedIn agent system.  
                  Enabled clients to add $10k–$25k in new pipeline without manual lead chasing.
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Open Source Contributor
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  GirlScript Summer of Code 
                </p>
                <p className="leading-relaxed text-gray-300">
                  • Contributed to the open-source projects by fixing issues, improving documentation, 
                  building features<br />
                  • Worked with tools like Git, GitHub, version control systems, and front-end technologies.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 text-center py-6 text-sm text-gray-500 border-t border-zinc-800">
        © {new Date().getFullYear()} | Dimple  
      </footer>
    </div>
  );
}