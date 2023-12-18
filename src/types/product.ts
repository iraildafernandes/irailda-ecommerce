export interface IProductInfo {
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[]; 
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }

export type propsProduct = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };