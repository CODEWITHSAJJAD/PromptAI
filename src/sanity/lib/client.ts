import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = !!projectId

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-24',
  useCdn: false,
})
