import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return [
        { slug: 'oscaro' },
        { slug: 'shadow' },
        { slug: 'blade-shadow' },
        { slug: 'accorhotels' },
        { slug: 'air-liquide' },
        { slug: 'wonder-weekend' },
        { slug: 'happy-end' },
        { slug: 'misc-clients' },
        { slug: 'big-youth' },
        { slug: 'mazarine-digital' },
        { slug: 'efficience-digital' },
    ];
};

export const prerender = true;
