export interface IPost {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  liked?: boolean;
  marked?: boolean;
}
