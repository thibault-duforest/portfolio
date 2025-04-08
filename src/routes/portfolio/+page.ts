import type { Picture } from 'vite-imagetools';
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
    slug: string;
    name: string;
    logo: Picture,
    startDate: string;
    endDate: string;
    technologies: string[];
  }

  const projects: Project[] = [
    {
      id: 1,
      slug: "oscaro",
      name: "Oscaro.com",
      logo: OscaroLogo,
      startDate: "08/2024",
      endDate: "03/2025",
      technologies: ["Clojure", "RUM", "HTML5", "CSS3", "SASS", "React", "Gulp", "NPM", "Jira"],
    },
    {
      id: 2,
      slug: "shadow",
      name: "Shadow",
      logo: ShadowLogo,
      startDate: "09/2021",
      endDate: "04/2023",
      technologies: ["Gatsby", "Next.js", "Tailwind", "PostCSS", "Style Dictionary", "Jest", "Gitlab"]
    },
    {
      id: 3,
      slug: "blade-shadow",
      name: "Blade Shadow",
      logo: ShadowBladeLogo,
      startDate: "01/2019",
      endDate: "03/2020",
      technologies: ["React", "Mobx", "Typescript", "Gitlab", "Monday"]
    },
    {
      id: 4,
      slug: "accorhotels",
      name: "AccorHotels",
      logo: AccorHotelsLogo,
      startDate: "05/2018",
      endDate: "10/2018",
      technologies: ["Angular", "Vue", "Jest", "Git", "Jira"]
    },
    {
      id: 5,
      slug: "air-liquide",
      name: "Air Liquide",
      logo: AirliquideLogo,
      startDate: "10/2017",
      endDate: "11/2017",
      technologies: ["Angular", "HTML5", "CSS3", "JavaScript", "Npm", "Bower", "Grunt", "Jira"]
    },
    {
      id: 6,
      slug: "wonder-weekend",
      name: "Wonder Weekend",
      logo: WonderWeekendLogo,
      startDate: "02/2016",
      endDate: "06/2017",
      technologies: ["Angular", "HTML5", "CSS3", "SASS", "JavaScript", "Npm", "Bower", "Gulp", "Backstop", "Bitbucket"]
    },
    {
      id: 7,
      slug: "happy-end",
      name: "Happy End",
      logo: HappyEndLogo,
      startDate: "08/2015",
      endDate: "01/2016",
      technologies: ["HTML5", "CSS3", "LESS", "SASS", "Javascript", "jQuery", "Handlebars", "Bootstrap", "Browserify", "Npm", "Grunt", "Github"]
    },
    {
      id: 8,
      slug: "misc-clients",
      name: "Clients divers",
      logo: CodeLogo,
      startDate: "09/2014",
      endDate: "08/2015",
      technologies: ["HTML5", "CSS3", "Javascript", "AngularJS", "jQuery", "PHP", "Wordpress", "Ruby"]
    },
    {
      id: 9,
      slug: "big-youth",
      name: "Big Youth",
      logo: BigYouthLogo,
      startDate: "11/2014",
      endDate: "11/2014",
      technologies: ["Angular", "HTML5", "CSS3"]
    },
    {
      id: 10,
      slug: "mazarine-digital",
      name: "Mazarine Digital",
      logo: MazarineDigitalLogo,
      startDate: "11/2012",
      endDate: "06/2014",
      technologies: ["HTML5", "CSS3", "Javascript", "jQuery", "API Google Maps", "Backbone", "RequireJS", "Handlebar", "Mustache", "Wordpress", "Drupal", "Tumblr", "npm", "grunt", "gulp", "SEO"]
    },
    {
      id: 11,
      slug: "efficience-digital",
      name: "Efficience Multimédia",
      logo: EfficienceDigitalLogo,
      startDate: "07/2011",
      endDate: "10/2012",
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
