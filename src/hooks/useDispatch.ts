import { useDispatch as useBaseDispatch } from 'react-redux';

import { Dispatch } from '../providers/StoreProvider';

export default function useDispatch() {
  return useBaseDispatch<Dispatch>();
}
