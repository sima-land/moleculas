export type MediaType = 'image' | 'video' | '360';

export interface MediaShape<T extends string, D extends Record<string, any>> {
  type: T;
  data: D;
}

export type MediaData =
  | MediaShape<'image', { src: string; thumbnailSrc?: string; alt?: string }>
  | MediaShape<'video', { src: string; alt?: string }>
  | MediaShape<'360', { photos: string[] }>;
