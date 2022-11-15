import '../styles/globals.css';

import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={{}}>
            <ConfigProvider locale={ruRU}>
                <Head>
                    <title>Vipservice</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ConfigProvider>
        </ThemeProvider>
    );
}
