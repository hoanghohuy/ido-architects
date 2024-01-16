import ContactPage from "./contactPage";

export const metadata = {
    title: {
        default: 'Liên hệ - Ido-architects.com',
    },
    description: 'Liên hệ',
    keywords: 'Liên hệ',
    openGraph: {
        title: 'Liên hệ - Ido-architects.com',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        type: 'website',
        description: 'Liên hệ',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
    },
    twitter: {
        title: 'Liên hệ - Ido-architects.com',
        description: 'Liên hệ',
        card: 'summary',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
        site: '@idoarchitects',
        creator: '@idoarchitects',
    },
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'article',
        name: 'News | E-vissa.com',
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png.png`,
        description: `News | E-vissa.com`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ContactPage />
        </>
    );
}
