export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'text',
        },
        {
            name: 'rating'
            , title: 'Rating'
            , type: 'number'
            , options: {
                min: 1,
                max: 5,
                step: 0.5
            }
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
