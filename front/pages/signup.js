import React from 'react';
import AppLayout from '../Components/AppLayout';
import Head from 'next/head'

const Signup = () => {
    return (
        <>
            <Head>
                <title> radi's home</title>
                <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.css"/>
            </Head>
        <AppLayout>
        <div>
            회원가입
        </div>
        </AppLayout>
        </>
    );
};
export default Signup;