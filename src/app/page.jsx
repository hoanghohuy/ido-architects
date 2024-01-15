import Home from './page';

export const metadata = {
    title: 'Ido Architects',
    description: 'Ido Architects',
    keywords: 'Ido Architects',
    openGraph: {
        images: [''],
        title: 'Ido Architects',
        url: 'Ido Architects',
        type: 'website',
        description: 'Ido Architects',
    },
    twitter: {
        card: 'Ido Architects',
        url: 'Ido Architects',
        title: 'Ido Architects',
        description: 'Ido Architects',
        images: [''],
        site: 'Ido Architects',
        creator: 'Ido Architects',
    },
};

export default function page() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: `Ido Architects`,
        image: `Ido Architects`,
        description: `Ido Architects`,
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Home />
        </>
    );
}
