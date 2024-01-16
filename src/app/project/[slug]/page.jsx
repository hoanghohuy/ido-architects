import ProjectDetail from './projectDetail'


export const metadata = {
    title: {
        default: 'Hình ảnh hoàn thiện',
    },
    description: 'Hình ảnh hoàn thiện',
    keywords: 'Hình ảnh hoàn thiện',
    openGraph: {
        title: 'Hình ảnh hoàn thiện',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project-completed`,
        type: 'website',
        description: 'Hình ảnh hoàn thiện',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
    },
    twitter: {
        title: 'Hình ảnh hoàn thiện',
        description: 'News news',
        card: 'summary',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project-completed`,
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
        site: '@idoarchitects',
        creator: '@idoarchitects',
    },
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'article',
        name: 'Hình ảnh hoàn thiện',
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`,
        description: `Hình ảnh hoàn thiện`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ProjectDetail />
        </>
    );
}
