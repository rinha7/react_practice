import React,{useCallback} from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import {useInput} from '../pages/signup';

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id, password,
        });
    }, [id, password]);

    return (
        <Form onSubmit={onSubmitForm} style={{padding:'10px'}}>
            <div>
                <label htmlFor="user-id"> ID </label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password"> Password </label>
                <br/>
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <div>
                <Button type="primary" htmlType="submit" loading={false}> Login </Button>
                <Link href="/signup"><a><Button>SignUp</Button></a></Link>
            </div>
        </Form>
    );
};


export default LoginForm;