import ProjectPage from "./projectPage";

export const metadata = {
    title: {
        default: 'Dự án thiết kế',
    },
    description: 'Dự án thiết kế',
    keywords: 'Dự án thiết kế',
    openGraph: {
        title: 'Dự án thiết kế',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project`,
        type: 'website',
        description: 'Dự án thiết kế',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/evissa_thumbnail.png`],
    },
    twitter: {
        title: 'Dự án thiết kế',
        description: 'Dự án thiết kế',
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
            <ProjectPage />
        </>
    );
}
