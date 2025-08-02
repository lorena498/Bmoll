
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

export interface Link {
  name:string;
  url: string;
  icon?: JSX.Element;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}
