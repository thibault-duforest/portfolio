import type { Picture } from 'vite-imagetools';

import * as m from '$lib/paraglide/messages.js';
import AccorHotelsBanner from "$lib/assets/images/banners/accorhotels-banner.png?enhanced"
import AccorHotelsBannerMobile from "$lib/assets/images/banners/accorhotels-banner-small.png?enhanced"
import AirliquideBanner from "$lib/assets/images/banners/airliquide-banner.png?enhanced"
import AirliquideBannerMobile from "$lib/assets/images/banners/airliquide-banner-small.png?enhanced"
import BigYouthBanner from "$lib/assets/images/banners/big-youth-banner.png?enhanced"
import BigYouthBannerMobile from "$lib/assets/images/banners/big-youth-banner-small.png?enhanced"
import CodeBanner from "$lib/assets/images/banners/code-banner.png?enhanced"
import CodeBannerMobile from "$lib/assets/images/banners/code-banner-small.png?enhanced"
import EfficienceDigitalBanner from "$lib/assets/images/banners/efficience-digital-banner.png?enhanced"
import EfficienceDigitalBannerMobile from "$lib/assets/images/banners/efficience-digital-banner-small.png?enhanced"
import HappyEndBanner from "$lib/assets/images/banners/happy-end-banner.png?enhanced"
import HappyEndBannerMobile from "$lib/assets/images/banners/happy-end-banner-small.png?enhanced"
import MazarineDigitalBanner from "$lib/assets/images/banners/mazarine-digital-banner.png?enhanced"
import MazarineDigitalBannerMobile from "$lib/assets/images/banners/mazarine-digital-banner-small.png?enhanced"
import OscaroBanner from "$lib/assets/images/banners/oscaro-banner.png?enhanced"
import OscaroBannerMobile from "$lib/assets/images/banners/oscaro-banner-small.png?enhanced"
import ShadowBanner from "$lib/assets/images/banners/shadow-banner.png?enhanced"
import ShadowBannerMobile from "$lib/assets/images/banners/shadow-banner-small.png?enhanced"
import WonderWeekendBanner from "$lib/assets/images/banners/wonder-weekend-banner.png?enhanced"
import WonderWeekendBannerMobile from "$lib/assets/images/banners/wonder-weekend-banner-small.png?enhanced"

export async function load({ params }: { params: { slug: string } }) {
  interface Project {
    id: number;
    slug: string;
    name: string;
    banner: Picture,
    bannerMobile: Picture,
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    missions: string[];
    technologies: string[];
    website?: string;
    github?: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      slug: "oscaro",
      name: "Oscaro.com",
      banner: OscaroBanner,
      bannerMobile: OscaroBannerMobile,
      startDate: `${m.month_august()} 2024`,
      endDate: `${m.month_february()} 2025`,
      position: m.job_position_integrator(),
      location: "Gennevilliers",
      description: m.project_oscaro_description(),
      missions: [
        m.project_oscaro_missions_1(),
        m.project_oscaro_missions_2(),
        m.project_oscaro_missions_3(),
        m.project_oscaro_missions_4(),
        m.project_oscaro_missions_5(),
        m.project_oscaro_missions_6(),
      ],
      technologies: ["Clojure", "RUM", "HTML5", "CSS3", "SASS", "React", "Gulp", "NPM", "Jira"],
      website: "https://oscaro.com/"
    },
    {
      id: 2,
      slug: "shadow",
      name: "Shadow",
      banner: ShadowBanner,
      bannerMobile: ShadowBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_september()} 2021`,
      endDate: `${m.month_april()} 2023`,
      description: m.project_shadow_description(),
      missions: [
        m.project_shadow_missions_1(),
        m.project_shadow_missions_2(),
        m.project_shadow_missions_3(),
        m.project_shadow_missions_4(),
        m.project_shadow_missions_5(),
        m.project_shadow_missions_6(),
        m.project_shadow_missions_7(),
      ],
      technologies: ["Gatsby", "Next.js", "Tailwind", "PostCSS", "Style Dictionary", "Jest", "Gitlab"],
      website: "http://shadow.tech/"
    },
    {
      id: 3,
      slug: "blade-shadow",
      name: "Blade Shadow",
      banner: ShadowBanner,
      bannerMobile: ShadowBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_january()} 2019`,
      endDate: `${m.month_march()} 2020`,
      description: m.project_shadow_blade_description(),
      missions: [
        m.project_shadow_blade_mission_1(),
        m.project_shadow_blade_mission_2(),
        m.project_shadow_blade_mission_3(),
        m.project_shadow_blade_mission_4(),
        m.project_shadow_blade_mission_5(),
        m.project_shadow_blade_mission_6(),
      ],
      technologies: ["React", "Mobx", "Typescript", "Gitlab", "Monday"],
      website: "http://shadow.tech/"
    },
    {
      id: 4,
      name: "AccorHotels",
      slug: "accorhotels",
      banner: AccorHotelsBanner,
      bannerMobile: AccorHotelsBannerMobile,
      location: "Issy-les-moulineaux, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_may()} 2018`,
      endDate: `${m.month_october()} 2018`,
      description: m.project_accorhotels_description(),
      missions: [
        m.project_accorhotels_mission_1(),
        m.project_accorhotels_mission_2(),
        m.project_accorhotels_mission_3(),
        m.project_accorhotels_mission_4(),
        m.project_accorhotels_mission_5(),
      ],
      technologies: ["Angular", "Vue", "Jest", "Git", "Jira"],
      website: "https://all.accor.com/"
    },
    {
      id: 5,
      slug: "air-liquide",
      name: "Air Liquide",
      banner: AirliquideBanner,
      bannerMobile: AirliquideBannerMobile,
      location: "Paris, France",
      position: m.job_position_lead_frontend_developer(),
      startDate: `${m.month_october()} 2017`,
      endDate: `${m.month_november()} 2017`,
      description: m.project_air_liquide_description(),
      missions: [],
      technologies: ["Angular", "HTML5", "CSS3", "JavaScript", "Npm", "Bower", "Grunt", "Jira"],
      website: "https://www.airliquide.com/fr"
    },
    {
      id: 6,
      slug: "wonder-weekend",
      name: "WonderWeekend",
      banner: WonderWeekendBanner,
      bannerMobile: WonderWeekendBannerMobile,
      location: "Paris, France",
      position: "Lead développeur Front-end",
      startDate: `${m.month_february()} 2016`,
      endDate: `${m.month_june()} 2017`,
      description: m.project_wonder_weekend_description(),
      missions: [
        m.project_wonder_weekend_mission_1(),
        m.project_wonder_weekend_mission_2(),
      ],
      technologies: ["Angular", "HTML5", "CSS3", "SASS", "JavaScript", "Npm", "Bower", "Gulp", "Backstop", "Bitbucket"],
    },
    {
      id: 7,
      slug: "happy-end",
      name: "Happy End",
      banner: HappyEndBanner,
      bannerMobile: HappyEndBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_august()} 2015`,
      endDate: `${m.month_january()} 2016`,
      description: m.project_happy_end_description(),
      missions: [
        m.project_happy_end_mission_1(),
        m.project_happy_end_mission_2(),
        m.project_happy_end_mission_3(),
        m.project_happy_end_mission_4(),
        m.project_happy_end_mission_5(),
        m.project_happy_end_mission_6(),
      ],
      technologies: ["HTML5", "CSS3", "LESS", "SASS", "Javascript", "jQuery", "Handlebars", "Bootstrap", "Browserify", "Npm", "Grunt", "Github"],
      website: "https://happyend.com/"
    },
    {
      id: 8,
      slug: "misc-clients",
      name: "Clients divers",
      banner: CodeBanner,
      bannerMobile: CodeBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_september()} 2014`,
      endDate: `${m.month_august()} 2015`,
      description: m.project_misc_clients_1_description(),
      missions: [
        m.project_misc_clients_1_mission_1(),
        m.project_misc_clients_1_mission_2(),
        m.project_misc_clients_1_mission_3(),
        m.project_misc_clients_1_mission_4(),
        m.project_misc_clients_1_mission_5(),
      ],
      technologies: ["HTML5", "CSS3", "Javascript", "AngularJS", "jQuery", "PHP", "Wordpress", "Ruby"],
    },
    {
      id: 9,
      slug: "big-youth",
      name: "Big Youth",
      banner: BigYouthBanner,
      bannerMobile: BigYouthBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_november()} 2014`,
      endDate: `${m.month_november()} 2014`,
      description: m.project_big_youth_description(),
      missions: [
        m.project_big_youth_mission_1(),
      ],
      technologies: ["Angular", "HTML5", "CSS3"],
      website: "https://www.bigyouth.fr/"
    },
    {
      id: 10,
      slug: "mazarine-digital",
      name: "Mazarine Digital",
      banner: MazarineDigitalBanner,
      bannerMobile: MazarineDigitalBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_november()} 2012`,
      endDate: `${m.month_june()} 2014`,
      description: m.project_mazarine_digital_description(),
      missions: [],
      technologies: ["HTML5", "CSS3", "Javascript", "jQuery", "API Google Maps", "Backbone", "RequireJS", "Handlebar", "Mustache", "Wordpress", "Drupal", "Tumblr", "npm", "grunt", "gulp", "SEO"],
      website: "https://www.mazarine.com/"
    },
    {
      id: 11,
      slug: "efficience-digital",
      name: "Efficience Digital",
      banner: EfficienceDigitalBanner,
      bannerMobile: EfficienceDigitalBannerMobile,
      location: "Paris, France",
      position: m.job_position_frontend_developer(),
      startDate: `${m.month_july()} 2011`,
      endDate: `${m.month_october()} 2012`,
      description: m.project_efficience_digital_description(),
      missions: [],
      technologies: ["HTML5", "CSS3", "jQuery", "PHP", "Wordpress", "Drupal", "Sencha touch"],
      website: "https://www.efficience.com/"
    }
  ];

  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    throw new Error('Project not found');
  }

  return {
    project
  };
}
