type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  errors: Error | null;
};

export default FetchState;
