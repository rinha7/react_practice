// _app.js는 next에서 지정한 Layout을 모아둔 파일의 이름입니다.
// 한 페이지를 Load할 때 자동으로 여러 Component가 렌더링되는 것을 막아줍니다.
// 중복되는 부분을 제거함으로써 효율을 높일 수 있습니다


import React from 'react';
import Head from 'next/head';
import AppLayout from "../Components/AppLayout";
import PropTypes from 'prop-types'

const NodeBird = ({Component}) =>{
    return (
        <>
        <Head>
            <title> radi's home</title>
            <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.css"/>
        </Head>
        <AppLayout>
        <Component />
        </AppLayout>
        </>
    );
};
NodeBird.propTypes = {
    Component : PropTypes.elementType,
};
export default NodeBird