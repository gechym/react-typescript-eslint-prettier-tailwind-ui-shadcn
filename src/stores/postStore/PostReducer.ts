type PostType = {
  userID : number,
  id : number,
  title: string,
  body : string
};

export type StateType = {
  data : PostType[],
  isLoading : boolean,
  error? : string
};

export type AcctionType = {
  type : 'GETING_POST' | 'GET_POST' | 'GET_POST_ERROR',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload : any
};

const reducerPost = (state : StateType, acction : AcctionType) => {
  switch (acction.type) {
    case 'GETING_POST':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_POST':
      return {
        ...state,
        isLoading: false,
        data: acction.payload as PostType[],
      };
    case 'GET_POST_ERROR':
      return {
        ...state,
        isLoading: false,
        error: acction.payload as string,
      };
    default:
      return state;
  }
};

export default reducerPost;
