import { defineType } from "sanity";

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            validation: (Rule) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule) => Rule.required()
        },
        {
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        }
    ]
})