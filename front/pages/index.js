// index.js는 메인화면을 표시합니다.
// react-hook 문법을 차용

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../Components/AppLayout';

const Home = ( ) => {
    return (
        <>
            <Head>
                <title> radi's home</title>
                <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.css"/>
            </Head>
            <AppLayout>
                <div>Hello! it's radi's home!</div>
            </AppLayout>
        </>
    );
};
export default Home;