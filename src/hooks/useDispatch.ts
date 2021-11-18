import { useDispatch as useBaseDispatch } from 'react-redux';

import { Dispatch } from '@/store';

export default function useDispatch() {
  return useBaseDispatch<Dispatch>();
}
