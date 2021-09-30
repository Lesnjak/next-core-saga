import { AxiosResponse } from 'axios';

import { apiCaller } from '../../../utils/api-caller';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

export const getForecast = async (
  appid: string,
  lat: string,
  lon: string
): Promise<AxiosResponse<any>> =>
  apiCaller({
    addBaseUrl: false,
    params: { appid, lat, lon },
    method: 'get',
    url: `${proxyUrl}https://api.openweathermap.org/data/2.5/forecast`,
  });
