export interface PostSection {
  id: string;
  title: string;
  content: string[];
  imgURL?: string;
  date?: string;
}

export interface Post {
  id: number;
  imgURL: string;
  title: string;
  date: string;
  description: string;
  link: string;
  sections: PostSection[];
}
