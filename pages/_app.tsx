import { FC } from 'react';
import 'styles/globals.css';
import { CustomAppProps } from 'types';
import { useSession, SessionProvider, signIn } from 'next-auth/react';

const MyApp: FC<CustomAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.Layout ?? ((page: any) => page);
  return (
    <SessionProvider>{getLayout(<Component {...pageProps} />)}</SessionProvider>
  );
};

export default MyApp;
