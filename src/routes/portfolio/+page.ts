export async function load() {
    const projects = [
        {
          id: 1,
          name: "Portfolio Personnel",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Mars 2025",
          technologies: ["SvelteKit", "TailwindCSS", "Vite"]
        },
        {
          id: 2,
          name: "E-commerce Responsif",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Janvier 2025",
          technologies: ["React", "Node.js", "MongoDB"]
        },
        {
          id: 3,
          name: "Dashboard Analytics",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Décembre 2024",
          technologies: ["Vue.js", "Express", "D3.js"]
        },
        {
          id: 4,
          name: "Application Mobile",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Octobre 2024",
          technologies: ["React Native", "Firebase"]
        },
        {
          id: 5,
          name: "Site Vitrine",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Août 2024",
          technologies: ["HTML", "SCSS", "JavaScript"]
        },
        {
          id: 6,
          name: "API RESTful",
          image: "https://picsum.photos/320/340/?blur=5",
          date: "Juillet 2024",
          technologies: ["Node.js", "Express", "PostgreSQL"]
        }
      ];
    
    if (!projects) {
      throw new Error('Projet non trouvé');
    }
    
    return {
        projects
    };
  }
