import { useSelector as useBaseSelector } from 'react-redux';

import { Selector } from '../providers/StoreProvider';

export type Equality<Selected> = (left: Selected, right: Selected) => boolean;

export default function useSelector<Selected>(selector: Selector<Selected>, equality?: Equality<Selected>): Selected {
  return useBaseSelector(selector, equality);
}
