import axios from 'axios';
import ErrorServerType from 'types/errorServer.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleFetchError = (error : any) => {
  let messageError = '';
  // Error Response axios
  if (axios.isAxiosError<ErrorServerType>(error)) {
    if (error.response?.data.messErr) {
      messageError = error.response?.data.messErr;
      return messageError;
    }
    return error.message;
  }

  if (error instanceof Error) {
    messageError = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    messageError = error.message;
  } else {
    messageError = 'Something went wrong';
  }
  return messageError;
};

export default handleFetchError;
