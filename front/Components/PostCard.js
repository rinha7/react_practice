import React from 'react';
import {Avatar, Button, Card, Icon} from "antd";

const PostCard = ({post}) =>{
    return (
        <Card
    key={+post.createdAt}
    cover={post.User.img && <img alt="example" src={post.User.img} />}
    actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />,
        ]}
    extra ={<Button>Follow</Button>}
        >
        <Card.Meta
    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
    title={post.User.nickname}
    description={post.User.content}
    />
    </Card>

    );
}
export default PostCard;