import type { AppProps } from 'next/app';

export type CustomNextPage<P = {}> = NextPage<P> & {
  Layout?: (page: ReactElement) => ReactNode;
};

export type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};
