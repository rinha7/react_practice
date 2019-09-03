import React from 'react';
import {Button, Form, Input} from "antd";

const dummy = {
    isLoggedIn : true,
    imagePaths : [],
    mainPosts : [{
        User:{
            id:1,
            nickname : "radi",
            content : "first post!",
            img : "https://i1.ruliweb.com/img/19/08/06/16c6615de4b4c329e.jpg",
        }
    }],
};

const PostForm = () =>{
    return (
<Form style={{marginBottom:20}} encType="multipart/form-data">
        <Input.TextArea maxLength={140} placeholder="what do you want to say?" />
        <div>
        <Input type="file" multiple hidden />
    <Button> Image </Button>
    <Button type="primary" style={{float:'right'}} htmlType="submit">Twit</Button>
        </div>
        <div>
        {dummy.imagePaths.map((v,i)=>{
            <div key={v} style ={{display:'inline-block'}} >
            <img src={'http://localhost:3000/'+v} style={{width:'200px'}} alt={v} />
                <div>
                <Button>Remove</Button>
                </div>
                </div>
            })}
        </div>
        </Form>
);
}

export default PostForm;