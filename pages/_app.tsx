import { FC } from 'react';
import 'styles/globals.css';
import { CustomAppProps } from 'types';

const MyApp: FC<CustomAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.Layout ?? ((page: any) => page);
  return <div>{getLayout(<Component {...pageProps} />)}</div>;
};

export default MyApp;
