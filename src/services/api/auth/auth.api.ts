import { AxiosResponse } from 'axios';

import { ISignInFormValues } from '../../../typings/forms-values.interfaces';
import { apiCaller } from '../../../utils/api-caller';

export const signIn = async (
  data: ISignInFormValues
): Promise<AxiosResponse<any>> =>
  apiCaller({
    method: 'POST',
    data,
    url: '/auth/sign-in',
  });
