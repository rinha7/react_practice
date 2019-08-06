// 디자인을 하기 어려울때 사용가능한 ant 디자인
// antd를 이용한 상단바 제작
import React, {useCallback, useState} from 'react';
import {Menu, Input, Button, Row, Col, Card, Avatar, Form} from "antd";
import Link from "next/link";
import PropTypes from 'prop-types';
import LoginForm from "./LoginForm";

const dummy ={
    nickname: 'radi',
    Post : [],
    Followings:[],
    Followers:[],
    isLoggedIn:false,
}


const AppLayout = ({children}) => {

    return (
        <div>
            {/*Antd에서는 컴포넌트를 골라 쓰는게 가능.*/}
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Main Page</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{verticalAlign : 'middle'}} />
                </Menu.Item>
            </Menu>
            <Link href="/signup"><Button>회원가입</Button></Link>
        <Row gutter={8}>
    {/*xs는 모바일, sm은 작은화면 md는 중간화면 lg는 큰화면에 대한 설정을 의밓마.*/}
    {/*xs 안의 숫자는 화면을 얼마나 차지할지를 의미함. 전체 길이는 24로, 8은 3등분 12는 2등분*/}
            <Col xs={24} md={6}>
        {dummy.isLoggedIn ?
                <Card actions={[
                    <div key="twit"> NumOfTwit <br/> {dummy.Post.length}</div>,
                    <div key="following"> Following <br/> {dummy.Followings.length}</div>,
                    <div key="follower"> Followers <br/> {dummy.Followers.length}</div>,
]}>
                    <Card.Meta
                        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                        title={dummy.nickname}
                        />
                </Card>
                            :
                <LoginForm/>
        }
            </Col>
            <Col xs={24} md={12}>
                {children}</Col>
            <Col xs={24} md={6} >세번째</Col>
        </Row>
        </div>
    );
}
AppLayout.propTypes = {
    children : PropTypes.node,
};
export default AppLayout;