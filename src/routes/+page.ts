import type { Picture } from 'vite-imagetools';
import ProfilePicture from "$lib/assets/images/thibault-duforest.png?enhanced"

export async function load() {
    interface Profile {
        name: string,
        picture: Picture,
        title: string,
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
        title: 'Développeur Front-End sénior',
        status: 'Freelance',
        experience: "13 ans d'expérience",
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
