export enum Category {
    INTEGRATION = 'integration',
    DESIGN = 'design',
    LANGUAGE = 'language',
    FRAMEWORK = 'framework',
    QUALITY = 'quality',
    TOOL = 'tool',
    SOFT_SKILL = 'soft_skill',
}

export interface Skill {
    name: string,
    level: string,
    categoryID: Category,
    categoryLabel: string,
    colorClass: string
}
