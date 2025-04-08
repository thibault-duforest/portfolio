import AccorHotelsLogo from "$lib/assets/images/logos/accorhotels-logo.png?enhanced"
import AirliquideLogo from "$lib/assets/images/logos/airliquide-logo.png?enhanced"
import BigYouthLogo from "$lib/assets/images/logos/big-youth-logo.png?enhanced"
import CodeLogo from "$lib/assets/images/logos/code-logo.png?enhanced"
import EfficienceDigitalLogo from "$lib/assets/images/logos/efficience-digital-logo.png?enhanced"
import HappyEndLogo from "$lib/assets/images/logos/happy-end-logo.png?enhanced"
import MazarineDigitalLogo from "$lib/assets/images/logos/mazarine-digital-logo.png?enhanced"
import OscaroLogo from "$lib/assets/images/logos/oscaro-logo.png?enhanced"
import ShadowBladeLogo from "$lib/assets/images/logos/shadow-blade-logo.png?enhanced"
import ShadowLogo from "$lib/assets/images/logos/shadow-logo.png?enhanced"
import WonderWeekendLogo from "$lib/assets/images/logos/wonder-weekend-logo.png?enhanced"

export async function load() {
  interface Project {
    id: number;
    name: string;
    logo: Picture,
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    duration: string;
    description: string;
    missions: string[];
    technologies: string[];
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "Oscaro.com",
      logo: OscaroLogo,
      location: "Gennevilliers, France",
      position: "Intégrateur sénior",
      startDate: "08/2024",
      endDate: "03/2025",
      duration: "8 mois",
      description: "Dans le cadre d'une mission pour WASSA, j'ai intégré l'équipe Front-End d'Oscaro.com, et plus précisément l'équipe Intégration, en tant que Développeur Intégrateur Sénior. Mon rôle consiste à optimiser et moderniser l'intégration des composants tout en contribuant à l'évolution du Design System et des outils de développement.",
      missions: [
        "Développement et intégration de composants HTML/CSS conformes aux bonnes pratiques d'accessibilité et de performance.",
        "Intégration des composants au sein de la bibliothèque de composants Clojure (RUM).",
        "Conception et amélioration du Design System : conseils et mise en place des standards pour une meilleure cohérence visuelle et technique.",
        "Définition et implémentation des Design Tokens, facilitant l'harmonisation des styles et leur gestion centralisée.",
        "Création d'un outil en ReactJS permettant d'afficher et tester les nouveaux composants du Design System.",
        "Migration et optimisation des outils de build."
      ],
      technologies: ["Clojure", "RUM", "HTML5", "CSS3", "SASS", "React", "Gulp", "NPM", "Jira"]
    },
    {
      id: 3,
      name: "Shadow",
      logo: ShadowLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "09/2021",
      endDate: "04/2023",
      duration: "1 an et 8 mois",
      description: "Dans le cadre d'une nouvelle mission au sein du groupe Shadow (anciennement Blade), je suis intervenu sur les différents projets de refonte des applications frontend de Shadow : site vitrine, e-commerce, compte client, sso.",
      missions: [
        "Migration et refonte totale du site e-commerce et compte client sur NextJS.",
        "Mise à jour des fonctionnalités, corrections de bugs sur la partie Gatsby du site vitrine.",
        "En collaboration avec l'équipe intégration, mise en place de la nouvelle architecture pour la refonte graphique sur site vitrine.",
        "Mise en place de POCs pour la refonte sur site e-commerce afin d'offrir plus d'outils et de flexibilité pour les équipes backend et produit.",
        "Mise en place de shared-components pour les différentes applications frontend.",
        "Réflexion et mise en place d'outils pour la gestion des Design Tokens de la charte graphique de Shadow.",
        "Mise en place et écriture de tests unitaires avec Jest."
      ],
      technologies: ["Gatsby", "Next.js", "Tailwind", "PostCSS", "Style Dictionary", "Jest", "Gitlab"]
    },
    {
      id: 4,
      name: "Blade Shadow",
      logo: ShadowBladeLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "01/2019",
      endDate: "03/2020",
      duration: "1 an et 3 mois",
      description: "Dans le cadre d'une mission coopté par un salarié en interne, j'ai renforcé l'équipe Web du groupe Blade afin de travailler sur les interfaces frontend du produit Shadow.",
      missions: [
        "Développement de pages, de bloc de contenus et correction de bugs sur le site Web de présentation de Shadow.",
        "Développement de la nouvelle plate-forme e-commerce from scratch.",
        "Développement de la nouvelle plate-forme de compte client from scratch.",
        "Mise à jour et correction de bugs sur la plate-forme de connexion (sso).",
        "Développement d'un outil pour la gestion des newsletters.",
        "Réflexion sur le future de la partie frontend de Shadow (mise en place de process, d'outils frontend communs, de gestion inter-équipe etc.)"
      ],
      technologies: ["React", "Mobx", "Typescript", "Gitlab", "Monday"]
    },
    {
      id: 5,
      name: "AccorHotels",
      logo: AccorHotelsLogo,
      location: "Issy-les-moulineaux, France",
      position: "Développeur Front-end",
      startDate: "05/2018",
      endDate: "10/2018",
      duration: "6 mois",
      description: "Dans le cadre d'une mission mandatée par HR Team, j'ai renforcé l'équipe frontend du groupe Accor Hôtel en travaillant sur le site internet de réservation de chambres, sur les micro services et sur des applications internes.",
      missions: [
        "Mise à jour des interfaces frontend de Angular vers Vue.",
        "Développement de fonctionnalités et corrections de bugs sur le site internet.",
        "Mise à jour et correction de bug sur les microservices.",
        "Développement de tests unitaires.",
        "Correction de bugs sur les applications internes."
      ],
      technologies: ["Angular", "Vue", "Jest", "Git", "Jira"]
    },
    {
      id: 6,
      name: "Air Liquide",
      logo: AirliquideLogo,
      location: "Paris, France",
      position: "Lead développeur Front-end",
      startDate: "10/2017",
      endDate: "11/2017",
      duration: "2 mois",
      description: "Dans le cadre d'une mission via l'entreprise Talent.io, j'ai repris et développé une application web pour les collaborateurs du groupe.",
      missions: [],
      technologies: ["Angular", "HTML5", "CSS3", "JavaScript", "Npm", "Bower", "Grunt", "Jira"]
    },
    {
      id: 7,
      name: "WonderWeekend",
      logo: WonderWeekendLogo,
      location: "Paris, France",
      position: "Lead développeur Front-end",
      startDate: "02/2016",
      endDate: "06/2017",
      duration: "1 an et 5 mois",
      description: "Dans le cadre d'une mission pourvoyée par l'agence de développeurs Top Five, je suis intervenu en régie au sein du siège de Wonderbox afin de poursuivre le développement frontend du projet de sa filiale, wonderweekend.com, solution de weekend packagés.",
      missions: [
        "Reprise et développement du projet www.WonderWeekend.com (start-up filiale de WonderBox).",
        "Mise en place d'un outil de testing de régression CSS."
      ],
      technologies: ["Angular", "HTML5", "CSS3", "SASS", "JavaScript", "Npm", "Bower", "Gulp", "Backstop", "Bitbucket"]
    },
    {
      id: 8,
      name: "Happy End",
      logo: HappyEndLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "08/2015",
      endDate: "01/2016",
      duration: "6 mois",
      description: "Dans le cadre d'une mission pourvoyée par l'agence de développeurs Top Five, je suis intervenu en régie afin de renforcer l'équipe Web de l'agence Happy End.",
      missions: [
        "Intégration HTML/CSS/JS de pages/minisites Dior.com",
        "Intégration JS d'un moteur de recherche",
        "Correction cross-browser de bugs",
        "Création d'un système de gestion de newsletter en interne",
        "Utilisation de GIT (github) et workflow front (NPM, Grunt, Browserify, Photoshop, Chrome Dev tools etc.)",
        "Participation à la réflexion sur la future stratégie digitale de ZagToon"
      ],
      technologies: ["HTML5", "CSS3", "LESS", "SASS", "Javascript", "jQuery", "Handlebars", "Bootstrap", "Browserify", "Npm", "Grunt", "Github"]
    },
    {
      id: 9,
      name: "Clients divers",
      logo: CodeLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "09/2014",
      endDate: "08/2015",
      duration: "1 an",
      description: "Missions de développement web front-end pour le compte de particuliers et professionnels",
      missions: [
        "Big Youth : Mission de renforcement au sein d'une agence de communication digitale au cœur de Paris (HTML5, CSS3, Javascript, AngularJS, jQuery, gulp, ergonomie).",
        "Bouygues Telecom : Mission visant à rendre opérationnel le site vitrine Bbox Miami pour la sortie publique (HTML5, CSS3, Javascript)",
        "Société Civile 2015 : Mission de développement d'un site participatif destiné aux acteurs de la société civile (HTML5, CSS3, Javascript, PHP, Wordpress)",
        "Park Futbol : mission de maintenance d'un site participatif (HTML5, CSS3, Javascript, jQuery, PHP, Wordpress).",
        "Cohoop : bénévole pour la création d'un site de collaboration entre étudiants (HTML5, CSS3, Javascript, Ruby (ERB), templating)."
      ],
      technologies: ["HTML5", "CSS3", "Javascript", "AngularJS", "jQuery", "PHP", "Wordpress", "Ruby"]
    },
    {
      id: 10,
      name: "Big Youth",
      logo: BigYouthLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "11/2014",
      endDate: "11/2014",
      duration: "1 mois",
      description: "Dans le cadre d'une mission mandatée par l'agence de développeurs Drims Creative, j'ai renforcé l'équipe de l'agence Web Big Youth.",
      missions: [
        "Création de pages et corrections de bugs pour Lottomatica."
      ],
      technologies: ["Angular", "HTML5", "CSS3"]
    },
    {
      id: 11,
      name: "Mazarine",
      logo: MazarineDigitalLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "11/2012",
      endDate: "06/2014",
      duration: "1 an et 8 mois",
      description: "Développement front et back de sites vitrines pour le compte de Chanel, Dior, Chopard, Guerlain, Messika, Van Cleef, JC de Castelbajac, Volvo Cars, La Maison Villaret.",
      missions: [],
      technologies: ["HTML5", "CSS3", "Javascript", "jQuery", "API Google Maps", "Backbone", "RequireJS", "Handlebar", "Mustache", "Wordpress", "Drupal", "Tumblr", "npm", "grunt", "gulp", "SEO"]
    },
    {
      id: 12,
      name: "Efficience Multimédia",
      logo: EfficienceDigitalLogo,
      location: "Paris, France",
      position: "Développeur Front-end",
      startDate: "07/2011",
      endDate: "10/2012",
      duration: "1 an et 4 mois",
      description: "Intégration de sites vitrines et participatifs pour le compte de la LMDE, MCDEF, Biocoop, Shamengo.",
      missions: [],
      technologies: ["HTML5", "CSS3", "jQuery", "PHP", "Wordpress", "Drupal", "Sencha touch"]
    }
  ];

  if (!projects) {
    throw new Error('Project not found');
  }

  return {
    projects
  };
}
