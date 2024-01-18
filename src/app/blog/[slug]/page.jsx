import BlogDetail from './BlogDetail';

export const metadata = {
    title: {
        default: 'Chi tiết bài viết',
    },
    description: 'Chi tiết bài viết',
    keywords: 'Chi tiết bài viết',
    openGraph: {
        title: 'Chi tiết bài viết',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/project-completed`,
        type: 'website',
        description: 'Chi tiết bài viết',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
    },
    twitter: {
        title: 'Chi tiết bài viết',
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
        name: 'Chi tiết bài viết',
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`,
        description: `Chi tiết bài viết`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogDetail />
        </>
    );
}
