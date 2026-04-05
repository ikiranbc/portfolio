import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Smart Home IoT Platform",
    description: "A comprehensive dashboard for managing smart home devices with real-time data visualization and automated routines.",
    image: "/project1.png",
    link: "#"
  },
  {
    id: 2,
    name: "Task Management Pro",
    description: "A minimalist mobile-first task manager with advanced categorization, reminders, and team collaboration features.",
    image: "/project2.png",
    link: "#"
  },
  {
    id: 3,
    name: "Library Management System",
    description: "A basic library management system to let you not to read books. Your mother fucker.",
    image: "/library.png",
    link: "#"
  },
  {
    id: 4,
    name: "Library Management System part 2",
    description: "A basic library management system to let you not to read books. Your mother fucker.",
    image: "/library.png",
    link: "#"
  }

];

export default function Home() {
  return (
    <>
      <div className="background-ornament">
        <div className="glow-spot one"></div>
        <div className="glow-spot two"></div>
      </div>

      <main className="main-container">
        {/* --- Hero Section --- */}
        <section className="hero">
          <div className="profile-img-container">
            <Image 
              src="/profile.png" 
              alt="Kiran BC" 
              width={180} 
              height={180} 
              className="profile-img"
              priority
            />
          </div>
          <h1 className="name">Kiran BC.</h1>
          <p className="role">Fullstack Developer</p>
          <p className="bio">
            I build high-performance, beautiful web applications with a focus on 
            modern user experiences and scalable architecture. Something beautiful 
            is always in the works. I will be giving everything in the future.
          </p>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={400} 
                  height={240} 
                  className="project-thumb"
                />
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <a href={project.link} className="project-link">
                    View Project &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="main-container">
          <p>&copy; {new Date().getFullYear()} Kiran BC. Built with Next.js & Passion.</p>
        </div>
      </footer>
    </>
  );
}
