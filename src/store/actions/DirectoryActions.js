import { FETCH_DIR } from '../constants';
import { DirDataProvider } from '../../providers/DirDataProvider';

export const fetchDir = (dir) => ({
  type: FETCH_DIR,
  payload: { dir },
});


export function fetchDirData() {
  return (dispatch) => {
    new DirDataProvider().fetchDirData().then(({ dir }) => {
      dispatch(fetchDir(dir));
    });
  }
}
