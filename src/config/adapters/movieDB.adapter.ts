import {API_KEY, API_URL} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const moviesDBFetcher = new AxiosAdapter({
  baseUrl: API_URL,

  params: {
    //api_key: 'f85efd3d01f423f54345a02da21658eb',
    api_key: API_KEY ?? 'no-key',
    language: 'es',
  },
});
