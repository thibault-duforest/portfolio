import { type Skill, Category } from '$lib/types/skill'

export async function load() {
    const skills: Omit<Skill, "colorClass">[] = [
        { name: 'HTML5', level: '100%', categoryID: Category.INTEGRATION, categoryLabel: 'Intégration' },
        { name: 'CSS3', level: '100%', categoryID: Category.INTEGRATION, categoryLabel: 'Intégration' },
        { name: 'Design System', level: '95%', categoryID: Category.DESIGN, categoryLabel: 'Design' },
        { name: 'Design Tokens', level: '80%', categoryID: Category.DESIGN, categoryLabel: 'Design' },
        { name: 'JavaScript', level: '90%', categoryID: Category.LANGUAGE, categoryLabel: 'Langages' },
        { name: 'TypeScript', level: '85%', categoryID: Category.LANGUAGE, categoryLabel: 'Langages' },
        { name: 'Svelte', level: '60%', categoryID: Category.LANGUAGE, categoryLabel: 'Langages' },
        { name: 'PHP', level: '70%', categoryID: Category.LANGUAGE, categoryLabel: 'Langages' },
        { name: 'Ruby', level: '50%', categoryID: Category.LANGUAGE, categoryLabel: 'Langages' },
        { name: 'ReactJS', level: '90%', categoryID: Category.FRAMEWORK, categoryLabel: 'Frameworks' },
        { name: 'VueJS', level: '80%', categoryID: Category.FRAMEWORK, categoryLabel: 'Frameworks' },
        { name: 'NextJS', level: '75%', categoryID: Category.FRAMEWORK, categoryLabel: 'Frameworks' },
        { name: 'Gatsby', level: '75%', categoryID: Category.FRAMEWORK, categoryLabel: 'Frameworks' },
        { name: 'SvelteKit', level: '40%', categoryID: Category.FRAMEWORK, categoryLabel: 'Frameworks' },
        { name: 'Accessibilité RGAA', level: '90%', categoryID: Category.QUALITY, categoryLabel: 'Qualité' },
        { name: 'Tests Unitaires', level: '80%', categoryID: Category.QUALITY, categoryLabel: 'Qualité' },
        { name: 'Git', level: '85%', categoryID: Category.TOOL, categoryLabel: 'Outils' },
        { name: 'CI-CD', level: '70%', categoryID: Category.TOOL, categoryLabel: 'Outils' },
        { name: 'Communication', level: '100%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
        { name: 'Esprit d\'équipe', level: '100%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
        { name: 'Esprit d\'analyse', level: '95%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
        { name: 'Gestion du temps', level: '90%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
        { name: 'Veille technologique', level: '90%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
        { name: 'Créativité', level: '85%', categoryID: Category.SOFT_SKILL, categoryLabel: 'Soft skills' },
    ];

    const DEFAULT_CATEGORY_COLOR_CLASS = 'bg-red-400'

    const categoryColorCLass: Partial<{ [key in Category]: string }> = {
        [Category.INTEGRATION]: 'bg-yellow-400',
        [Category.DESIGN]: 'bg-orange-400',
        [Category.LANGUAGE]: 'bg-blue-400',
        [Category.FRAMEWORK]: 'bg-sky-400',
        [Category.QUALITY]: 'bg-lime-400',
        [Category.TOOL]: 'bg-emerald-400',
    }

    const completedSkills: Skill[] = [];

    skills.forEach((skill, i) => {
        completedSkills[i] = {
            ...skill,
            colorClass: categoryColorCLass[skill.categoryID] ?? DEFAULT_CATEGORY_COLOR_CLASS
        }
    });

    if (!skills) {
        throw new Error('Profile not found');
    }

    return {
        skills: completedSkills
    };
}
