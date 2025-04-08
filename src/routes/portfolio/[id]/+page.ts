export async function load({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);

  const projects = [
    {
      id: 1,
      name: "Portfolio Personnel",
      image: "https://picsum.photos/1008/320/",
      date: "Mars 2025",
      technologies: ["SvelteKit", "TailwindCSS", "Vite"],
      description: "Portfolio personnel créé avec SvelteKit et TailwindCSS. Ce projet présente mes compétences, expériences et réalisations dans le domaine du développement web.",
      features: [
        "Design responsive adapté à tous les appareils",
        "Animations fluides pour une expérience utilisateur optimale",
        "Mode sombre / clair",
        "Optimisation SEO",
        "Système de contact intégré"
      ],
      github: "https://github.com/thibault-duforest/portfolio",
      liveDemo: null
    },
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    throw new Error('Project not found');
  }

  return {
    project
  };
}
