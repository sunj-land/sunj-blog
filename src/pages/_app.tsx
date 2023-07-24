import type { AppProps } from 'next/app';
import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';

import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component?.getLayout || ((page) => page);
  return (
    <ConfigProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  );
}
