import React, {useState} from 'react';
import AppLayout from '../Components/AppLayout';
import Head from 'next/head'
import {Form,Input, Checkbox, Button} from "antd";

const Signup = () => {
    const [id,setId] = useState('');
    const [nick,setNick] = useState('');
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [termError, setTermError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (password != passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        else{
            return setTermError(false);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTerm (e.target.checked);
    };
    // custom Hook
    // const useInput = (initValue = null) =>{
    //     const [value, setter] = useState(initValue);
    //     const handler = (e) => {
    //         setter(e.target.value);
    //     };
    //     return [value, handler];
    // };
    // custom hook을 이용하면 코드를 좀 줄일 수 있다.
    //
    // const[id,onChangeId] = useInput(''); 를 통해 onchangeid와 const[id,setid]부분을 대체 가능.
    // 이 방식의 코드를 사용하면, const onchangeid 와 const [id,setid] 부분을 제거할 수 있음
    // 중복되는 코드 ~~(e.target.value) 를 좀 더 간편한 코드로 바꾸어 줄 수 있다.


    return (
        <>
            <Head>
                <title> radi's home</title>
                <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.5/antd.css"/>
            </Head>
        <AppLayout>
        {/*Library 쓰지 않고 만드는 Form*/}
        <Form onSubmit={onSubmit} style={{padding : 10}}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br/>
                <Input name="user-id" value={id} required onChange={onChangeId}/>
            </div>
            <div>
                <label htmlFor="user-nick">nickname</label>
                <br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
            </div>
            <div>
                <label htmlFor="user-pw" >Password</label>
                <br/>
                <Input name="user-pw"  type="password" value={password}required onChange={onChangePassword}/>
            </div>
            <div>
                <label htmlFor="user-pwcheck">Password-check</label>
                <br/>
                <Input name="user-pwcheck" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                {passwordError && <div style={{color : 'red'}}> password not equal </div> }
            </div>
            <div>
                <Checkbox name="user-term" value={term}  onChange={onChangeTerm}>약관 동의</Checkbox>
                {termError && <div style={{color:'red'}}> Plz check the term</div>}
            </div>
            <div>
                <Button type="primary"  htmlType="submit">Sign Up</Button>
            </div>
        </Form>
        </AppLayout>
        </>
    );
};
export default Signup;