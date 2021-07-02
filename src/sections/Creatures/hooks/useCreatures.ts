import { useQuery } from "react-query";

import { getCreatures } from '../../api/common';

function useCreatures(){
  return useQuery('creatures', getCreatures, {
    refetchOnWindowFocus: false,
    retry: false,
  })
}

export default useCreatures;
