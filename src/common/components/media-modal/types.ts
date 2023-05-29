export type MediaType = 'image' | 'video' | '360';

export interface MediaShape<T extends string, D extends Record<string, any>> {
  type: T;
  data: D;
}

export type MediaImage = MediaShape<'image', { src: string; alt?: string }>;

export type MediaVideo = MediaShape<'video', { src: string; thumbnail?: string }>;

export type Media360 = MediaShape<'360', { photos: string[] }>;

export type MediaData = MediaImage | MediaVideo | Media360;
