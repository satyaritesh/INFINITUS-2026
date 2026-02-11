import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Infinitus 2026',
        alternateName: 'Infinitus - Annual Techno Cultural Fest',
        startDate: '2026-03-01T09:00:00+05:30',
        endDate: '2026-03-03T22:00:00+05:30',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
            '@type': 'Place',
            name: 'SRM University AP',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Neerukonda, Mangalagiri',
                addressLocality: 'Guntur',
                postalCode: '522240',
                addressRegion: 'Andhra Pradesh',
                addressCountry: 'IN',
            },
        },
        image: [
            'https://infinitus26.com/images/footerImages/INFINITUS2026LOGO.jpeg',
        ],
        description: 'Join Infinitus 2026, the Annual National Level Techno Cultural Fest at SRM University Andhra Pradesh. Experience 3 days of innovation, technology competitions, cultural performances, hackathons, workshops, gaming tournaments (Apex Trails), and live concerts from March 1-3, 2026.',
        url: 'https://infinitus26.com',
        organizer: {
            '@type': 'Organization',
            name: 'SRM University AP',
            url: 'https://srmap.edu.in',
            logo: 'https://infinitus26.com/images/footerImages/INFINITUS2026LOGO.jpeg',
        },
        performer: {
            '@type': 'Organization',
            name: 'SRM University AP Students',
        },
        offers: {
            '@type': 'Offer',
            url: 'https://infinitus26.com',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01T00:00:00+05:30',
        },
        keywords: 'techno cultural fest, college fest, SRM AP, Infinitus 2026, hackathon, cultural events, technical competitions, gaming tournament, concerts, workshops, student fest, Andhra Pradesh',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
