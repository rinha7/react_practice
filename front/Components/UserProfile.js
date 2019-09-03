import { Avatar, Card } from 'antd';
import React from 'react';

const dummy = {
    nickname: 'radi',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
};

const UserProfile = () => {
    return (
        <Card
    actions={[
        <div key="twit">twit<br />{dummy.Post.length}</div>,
        <div key="following">following<br />{dummy.Followings.length}</div>,
        <div key="follower">followers<br />{dummy.Followers.length}</div>,
]}
>
<Card.Meta
    avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
    title={dummy.nickname}
    />
    </Card>
);
};

export default UserProfile;