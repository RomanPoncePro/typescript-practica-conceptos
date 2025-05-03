

type FetchState<T> = {
  data: T | null ;
  isLoading: boolean;
  errors: unknown | null;
}

export default FetchState
