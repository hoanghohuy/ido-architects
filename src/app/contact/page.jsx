import ContactPage from "./contactPage";

export const metadata = {
    title: {
        default: 'Contact',
    },
    description: 'Contact',
    keywords: 'Contact',
    openGraph: {
        title: 'Contact',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        type: 'website',
        description: 'Contact',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/evissa_thumbnail.png`],
    },
    twitter: {
        title: 'Contact',
        description: 'Contact',
        card: 'summary',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/evissa_thumbnail.png`],
        site: '@idoarchitects',
        creator: '@idoarchitects',
    },
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'article',
        name: 'News | E-vissa.com',
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/evissa_thumbnail.png`,
        description: `News | E-vissa.com`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ContactPage />
        </>
    );
}
