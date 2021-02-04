export const SET_SPINNER = 'SET_SPINNER';
export const SET_ERROR = 'SET_ERROR';
export const SET_DATA = 'SET_DATA';

export const setSpinner = flag => ({
  type: SET_SPINNER,
  isLoading: flag,
});

export const setError = flag => ({
  type: SET_ERROR,
  hasError: flag,
});

export const setData = data => ({
  type: SET_DATA,
  data,
});
