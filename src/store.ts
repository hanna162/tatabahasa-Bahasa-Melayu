import { AppState } from './types';

const STORAGE_KEY = 'hebat_tatabahasa_state';

const defaultState: AppState = {
  stars: 0,
  scores: {},
  textSize: 'text-base',
};

export const loadState = (): AppState => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return defaultState;
    }
    return { ...defaultState, ...JSON.parse(serializedState) };
  } catch (err) {
    return defaultState;
  }
};

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch {
    // ignore write errors
  }
};
