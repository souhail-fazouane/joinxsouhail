export type Message = {
  type: "text";
  text: string;
  user: { username: string; color: string };
  date: number;
};
