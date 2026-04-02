import { client, isSanityConfigured } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import SectionRenderer from '@/components/SectionRenderer'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function DynamicPage({ params }: PageProps) {
  if (!isSanityConfigured) {
    notFound()
  }
  const page = await client.fetch(PAGE_QUERY, { slug: params.slug })

  if (!page) {
    notFound()
  }

  return <SectionRenderer sections={page.sections} />
}
