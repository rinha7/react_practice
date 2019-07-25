// 디자인을 하기 어려울때 사용가능한 ant 디자인
// antd를 이용한 상단바 제작
import React from 'react';
import {Menu, Input, Button} from "antd";
import Link from "next/link";


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
            {/*children은 props*/}
            {children}
        </div>
    );
}
export default AppLayout;