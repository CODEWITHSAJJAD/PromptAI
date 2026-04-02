import { groq } from 'next-sanity'

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  sections[]{
    ...,
    image {
      asset->{
        _id,
        url
      }
    }
  }
}`

export const ALL_PAGES_QUERY = groq`*[_type == "page"]{
  _id,
  title,
  slug
}`

export const NAVBAR_QUERY = groq`*[_type == "navbar"][0]{
  title,
  items[]{
    label,
    href
  }
}`
