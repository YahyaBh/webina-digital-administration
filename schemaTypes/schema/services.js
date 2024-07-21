export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // Enables hotspot for cropping
            },
            description: 'Image for the card',
            validation: Rule => Rule.required()
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the card',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the card',
            validation: Rule => Rule.required()
        },
        {
            name: 'mainService',
            title: 'Main Service',
            type: 'boolean',
            description: 'Mark this card as the main service',
            validation: Rule => Rule.custom(async (mainService, context) => {
                if (mainService) {
                    const existingMainService = await context.client.fetch(`
                  *[_type == "card" && mainService == true && _id != $id][0] {
                    _id
                }
                `, { id: context.document._id });

                    if (existingMainService) {
                        return 'There can only be one main service';
                    }
                }
                return true;
            })
        }
    ]
}
