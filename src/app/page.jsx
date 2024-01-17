import Home from './page';

export const metadata = {
    title: 'CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS',
    description: 'CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS',
    keywords: 'Ido Architects',
    openGraph: {
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
        title: 'CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS',
        url: '/',
        type: 'website',
        description: 'CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS',
    },
    twitter: {
        card: 'Ido Architects',
        url: '/',
        title: 'CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS',
        description: 'Ido Architects',
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
        site: '@ido-architects',
        creator: '@ido-architects',
    },
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: `CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS`,
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`,
        description: `CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG IDO-ARCHITECTS`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Home />
        </>
    );
}
