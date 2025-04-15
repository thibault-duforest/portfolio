import { base } from '$app/paths';
import { baseLocale, getLocale } from '$lib/paraglide/runtime';

export const getBasePath = () => {
    const locale = getLocale();

    return `${base}${locale !== baseLocale ? `/${locale}` : ''}`;
};
