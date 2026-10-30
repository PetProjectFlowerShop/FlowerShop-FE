export interface PostSection {
  id: string;
  title: string;
  content: string[];
  imgURL?: string;
  publishedDate?: string;
}

export interface Post {
  id: number;
  imgURL: string;
  title: string;
  publishedDate: string;
  description: string;
  link: string;
  sections: PostSection[];
}
