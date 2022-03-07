
import { FETCH_DIR } from '../constants';

const initialState = { dir: [] };
export const directoryReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DIR:
      return { ...state, dir: payload.dir };
    default:
      return state;
  }
};
