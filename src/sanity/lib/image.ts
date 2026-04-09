import imageUrlBuilder from '@sanity/image-url'

let builder: ReturnType<typeof imageUrlBuilder> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initImageBuilder(client: any) {
  if (client && typeof client === 'object' && 'config' in client) {
    builder = imageUrlBuilder(client);
  }
}