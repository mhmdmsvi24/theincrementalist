export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  slug?: string;
  date?: string;
  height: number;
}