import { base } from '$app/paths';
import { localizeHref } from '$lib/paraglide/runtime';

export const getLocalizedUrl = (path: string) => localizeHref(`${base}${path}`);
