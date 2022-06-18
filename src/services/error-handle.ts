import request from 'axios';
import {ErrorType} from '../types/error';
import {HttpCode} from '../const';
import { toast } from 'react-toastify';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.error(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        toast.error(response.data.error);
        break;
    }
  }
};
