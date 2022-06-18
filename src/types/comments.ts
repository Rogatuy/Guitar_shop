export type Comment = {
    id: string,
    userName: string,
    advantage: string,
    disadvantage: string,
    comment: string,
    rating: number,
    createAt: string,
    guitarId: number,
  };

export type Comments = Comment[];

export type CommentPostServer = {
  userName: string,
  advantage: string,
  disadvantage: string,
  comment: string,
  rating: number,
  guitarId: number,
};
