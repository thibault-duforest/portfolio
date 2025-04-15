import { type Skill, Category } from '$lib/types/skill'
import * as m from '$lib/paraglide/messages.js';

export async function load() {
    const skills: Omit<Skill, "colorClass">[] = [
        { name: 'HTML5', level: '100%', categoryID: Category.INTEGRATION, categoryLabel: m['skills.categories.integration']() },
        { name: 'CSS3', level: '100%', categoryID: Category.INTEGRATION, categoryLabel: m['skills.categories.integration']() },
        { name: 'Design System', level: '95%', categoryID: Category.DESIGN, categoryLabel: m['skills.categories.design']() },
        { name: 'Design Tokens', level: '80%', categoryID: Category.DESIGN, categoryLabel: m['skills.categories.design']() },
        { name: 'JavaScript', level: '90%', categoryID: Category.LANGUAGE, categoryLabel: m['skills.categories.languages']() },
        { name: 'TypeScript', level: '85%', categoryID: Category.LANGUAGE, categoryLabel: m['skills.categories.languages']() },
        { name: 'Svelte', level: '60%', categoryID: Category.LANGUAGE, categoryLabel: m['skills.categories.languages']() },
        { name: 'PHP', level: '70%', categoryID: Category.LANGUAGE, categoryLabel: m['skills.categories.languages']() },
        { name: 'Ruby', level: '50%', categoryID: Category.LANGUAGE, categoryLabel: m['skills.categories.languages']() },
        { name: 'ReactJS', level: '90%', categoryID: Category.FRAMEWORK, categoryLabel: m['skills.categories.frameworks']() },
        { name: 'VueJS', level: '80%', categoryID: Category.FRAMEWORK, categoryLabel: m['skills.categories.frameworks']() },
        { name: 'NextJS', level: '75%', categoryID: Category.FRAMEWORK, categoryLabel: m['skills.categories.frameworks']() },
        { name: 'Gatsby', level: '75%', categoryID: Category.FRAMEWORK, categoryLabel: m['skills.categories.frameworks']() },
        { name: 'SvelteKit', level: '40%', categoryID: Category.FRAMEWORK, categoryLabel: m['skills.categories.frameworks']() },
        { name: m['skills.labels.accessibility'](), level: '90%', categoryID: Category.QUALITY, categoryLabel: m['skills.categories.quality']() },
        { name: m['skills.labels.unit_test'](), level: '80%', categoryID: Category.QUALITY, categoryLabel: m['skills.categories.quality']() },
        { name: 'Git', level: '85%', categoryID: Category.TOOL, categoryLabel: m['skills.categories.tools']() },
        { name: 'CI-CD', level: '70%', categoryID: Category.TOOL, categoryLabel: m['skills.categories.tools']() },
        { name: m['skills.labels.communication'](), level: '100%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
        { name: m['skills.labels.team_spirit'](), level: '100%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
        { name: m['skills.labels.analysis'](), level: '95%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
        { name: m['skills.labels.time'](), level: '90%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
        { name: m['skills.labels.tech'](), level: '90%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
        { name: m['skills.labels.creativity'](), level: '85%', categoryID: Category.SOFT_SKILL, categoryLabel: m['skills.categories.soft_skills']() },
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
