import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Infinitus 2026',
        startDate: '2026-03-01', // Placeholder date
        endDate: '2026-03-03',   // Placeholder date
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
            'https://infinitus-2026-srmap.vercel.app/images/footerImages/INFINITUS2026LOGO.jpeg',
        ],
        description: 'The Annual National Level Techno Cultural Fest of SRM University Andhra Pradesh.',
        organizer: {
            '@type': 'Organization',
            name: 'SRM University AP',
            url: 'https://srmap.edu.in',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
