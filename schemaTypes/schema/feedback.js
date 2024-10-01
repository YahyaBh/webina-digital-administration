export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today',
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'rating'
            , title: 'Rating'
            , type: 'number'
            , options: {
                min: 1
                , max: 5
                , step: 1
            }
        },
    ],
};
