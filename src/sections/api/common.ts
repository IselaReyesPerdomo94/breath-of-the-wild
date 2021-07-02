import { get } from './utils';
import { Categories, CreaturesResponse } from './types';

function getByCategory<T>(category: Categories): Promise<ListAPIResponse<T>>{
  return(get<ListAPIResponse<T>>(`https://botw-compendium.herokuapp.com/api/v2/category/${category}`))
}

function getCreatures(): Promise<CreaturesResponse>{
  return(get('https://botw-compendium.herokuapp.com/api/v2/category/creatures'))
}

export { getByCategory, getCreatures };