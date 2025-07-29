
export interface Product {
  id: number;
  name: string;
  price?: number;
  imageUrl: string;
  videoUrl?: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Track {
    id: number;
    title: string;
    artist: string;
    albumArtUrl: string;
    streamUrl: string;
}

export interface Link {
  name: string;
  url: string;
  icon?: JSX.Element;
}
