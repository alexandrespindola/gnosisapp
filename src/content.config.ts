import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ 
    loader: docsLoader(), 
    schema: docsSchema({
      extend: z.object({
        statusTranslation: z.string().optional(),
        coverImage: z.string().optional(),
        sidebar: z.object({
          label: z.string().nullable(),
          order: z.number().nullable()
        }).optional()
      }),
    }) 
  }),
  i18n: defineCollection({ 
    loader: i18nLoader(), 
    schema: i18nSchema(),
  }),
};
