// index.js는 메인화면을 표시합니다.
// react-hook 문법을 차용

import React from 'react';
import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";
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


const Home = ( ) => {
    return (
        <>
        <div> {dummy.isLoggedIn && <PostForm />
        }
    {dummy.mainPosts.map((c) =>{
        return (
            <PostCard key={c} post = {c}/>
        );
    })}
        </div>
        </>
    );
};
export default Home;