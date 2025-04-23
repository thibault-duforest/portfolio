import SkillHtml5 from '$lib/assets/svg/skill-html5.svg?src';
import SkillCss3 from '$lib/assets/svg/skill-css3.svg?src';
import SkillJavascript from '$lib/assets/svg/skill-javascript.svg?src';
import SkillTypescript from '$lib/assets/svg/skill-typescript.svg?src';
import SkillReact from '$lib/assets/svg/skill-react.svg?src';
import SkillNextJs from '$lib/assets/svg/skill-nextjs.svg?src';
import SkillVue from '$lib/assets/svg/skill-vue.svg?src';
import SkillSvelte from '$lib/assets/svg/skill-svelte.svg?src';
import SkillNode from '$lib/assets/svg/skill-node.svg?src';
import SkillDesignSystem from '$lib/assets/svg/skill-design-system.svg?src';
import SkillDesignTokens from '$lib/assets/svg/skill-design-tokens.svg?src';
import SkillAccessibility from '$lib/assets/svg/skill-accessibility.svg?src';
import SkillUnitTest from '$lib/assets/svg/skill-unit-test.svg?src';
import SkillCICD from '$lib/assets/svg/skill-ci-cd.svg?src';

export const skillsData = [
  {
    name: "Langages & Standards",
    skills: [
      {
        name: "HTML5",
        color: "orange",
        icon: SkillHtml5,
      },
      {
        name: "CSS3",
        color: "blue",
        icon: SkillCss3,
      },
      {
        name: "JavaScript",
        color: "yellow",
        icon: SkillJavascript,
      },
      {
        name: "TypeScript",
        color: "blue",
        icon: SkillTypescript,
      }
    ]
  },
  {
    name: "Frameworks & Librairies",
    skills: [
      {
        name: "ReactJS",
        color: "cyan",
        icon: SkillReact,
      },
      {
        name: "NextJS",
        color: "gray",
        icon: SkillNextJs,
      },
      {
        name: "VueJS",
        color: "emerald",
        icon: SkillVue,
      },
      {
        name: "Svelte",
        color: "red",
        icon: SkillSvelte,
      },
      {
        name: "NodeJS",
        color: "green",
        icon: SkillNode,
      }
    ]
  },
  {
    name: "Design & Accessibilité",
    skills: [
      {
        name: "Design System",
        color: "orange",
        icon: SkillDesignSystem,
      },
      {
        name: "Design Tokens",
        color: "purple",
        icon: SkillDesignTokens,
      },
      {
        name: "Accessibilité RGAA",
        color: "blue",
        icon: SkillAccessibility,
      }
    ]
  },
  {
    name: "DevOps & Qualité",
    skills: [
      {
        name: "Unit testing",
        color: "green",
        icon: SkillUnitTest,
      },
      {
        name: "CI / CD",
        color: "orange",
        icon: SkillCICD,
      }
    ]
  }
]
