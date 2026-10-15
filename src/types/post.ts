export interface PostSection {
  id: string;
  title: string;
  content: string[];
  imgURL?: string;
}

export interface Post {
  id: number;
  imgURL: string;
  title: string;
  description: string;
  link: string;
  sections: PostSection[];
}
