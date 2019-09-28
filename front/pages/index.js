// index.js는 메인화면을 표시합니다.
// react-hook 문법을 차용

import React, {useEffect} from 'react';
import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {LOG_IN, LOG_OUT} from '../reducers/user'
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
    const dispatch = useDispatch();
    const {isLoggedIn, user} = useSelector(state => state.user);
    console.log(user);
    useEffect(() => {
        dispatch({
            type:LOG_IN,
            data:{
                nickname : 'radi',
            },
        });
        dispatch({
            type:LOG_OUT,
            data:{
                nickname : 'radi',
            },
        });
        dispatch({ // dispatch 안의 내용을 action으로 변경해도 됨.
            type:LOG_IN,
            data:{
                nickname : 'radi',
            },
        });
    }, []);
    return (
        <>
        {user ? <div> Logged IN : {user.nickname}</div> : <div> Logged Out </div>}
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