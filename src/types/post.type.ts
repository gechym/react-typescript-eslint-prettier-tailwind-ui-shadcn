type PostType = {
  userID : number,
  id : number,
  title: string,
  body : string
};

export type PostStateType = {
  isLoading: boolean;
  data: PostType[];
  error: string;
};

export default PostType;
