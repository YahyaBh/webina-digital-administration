export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'mainTitle',
            title: 'Main Title',
            type: 'string',
        },
        {
            name: 'servicesHighlits',
            title: 'Services Highlights',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'homeDescription',
            title: 'Home Description',
            type: 'text',
        },
        {
            name: 'promoDate',
            title: 'Promo Date',
            type: 'datetime',
        },
        {
            name: 'videoId',
            title: 'Video ID',
            type: 'string',
        },
        {
            name: 'featuredPosts',
            title: 'Featured Posts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
        },
        {
            name: 'sectionTexts',
            title: 'Section Texts',
            type: 'array',
            of: [{ type: 'text' }],
        },
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'project' } }],
        },
        {
            name: 'featuredPosts',
            title: 'Featured Posts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
        },
    ],
};
