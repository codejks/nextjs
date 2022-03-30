import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
            <meta charSet='UTF-8' />
        </Head>
        {/* Script 타사 스크립트 사용 */}
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
        />

        <h1>First Post</h1>
        <h2>
            {/* Link (라우터와 동일 기능) */}
            <Link href='/'>
                <a>back to home!</a>
            </Link>
        </h2>
    </Layout>
    );
}