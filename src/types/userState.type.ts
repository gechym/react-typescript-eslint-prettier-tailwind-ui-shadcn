export type UserStateType = {
  isLoading : boolean,
  user : User | null,
  error : string
};

export type User = {
  name : string,
  rule : string,
};
