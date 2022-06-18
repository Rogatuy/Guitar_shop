import { Comment } from './comments';

export type Guitar = {
    id: number,
    name: string,
    vendorCode: string,
    type: string,
    description: string,
    previewImg: string,
    stringCount: number,
    rating: number,
    price: number,
    comments: Comment[]
  };

export type Guitars = Guitar[];

