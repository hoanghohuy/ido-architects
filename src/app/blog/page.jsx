import BlogPage from "./blogPage";

export const metadata = {
    title: {
        default: 'BLog',
    },
    description: 'BLog',
    keywords: 'BLog',
    openGraph: {
        title: 'BLog',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        type: 'website',
        description: 'BLog',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
    },
    twitter: {
        title: 'BLog',
        description: 'BLog',
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
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`,
        description: `News | E-vissa.com`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogPage />
        </>
    );
}
