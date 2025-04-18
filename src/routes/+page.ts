import type { Picture } from 'vite-imagetools';

import ProfilePicture from "$lib/assets/images/thibault-duforest.png?enhanced"
import * as m from '$lib/paraglide/messages.js';

export async function load() {
    interface Profile {
        name: string,
        picture: Picture,
        title: string,
        age: string,
        status: string,
        experience: string,
        location: string,
        phone: string,
        email: string,
        social: {
            linkedin: string,
            github: string
        }
    }

    const profile: Profile = {
        name: 'Thibault DUFOREST',
        picture: ProfilePicture,
        title: m.about_job_title(),
        age: m.about_age(),
        status: 'Freelance',
        experience: m.about_years_of_experience(),
        location: 'Valenton, 94460, FRANCE',
        phone: '06 16 45 14 86',
        email: 'duforest.thibault@gmail.com',
        social: {
            linkedin: 'linkedin.com/in/thibaultduforest',
            github: 'github.com/thibault-duforest'
        }
    };

    if (!profile) {
        throw new Error('Profile not found');
    }

    return {
        profile
    };
}
