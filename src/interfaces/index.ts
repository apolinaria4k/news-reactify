export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;
export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'column' | 'row';

export type CategoriesType =
  | 'general'
  | 'society'
  | 'science_technology'
  | 'politics_government'
  | 'economy_business_finance'
  | 'arts_culture_entertainment'
  | 'lifestyle_leisure'
  | 'human_interest'
  | 'sport'
  | 'crime_law_justice'
  | 'education'
  | 'environment'
  | 'labour'
  | 'health'
  | 'automotive'
  | 'real_estate';
