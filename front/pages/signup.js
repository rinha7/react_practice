import React, { useState, useCallback } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
const TextInput = ({value}) => {
    return (

    );
};
TextInput.propTypes = {
    value : PropTypes.string,

};

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        },[]);
        return [value, handler];
    };

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    },[password, passwordCheck, term]); // dependency들이 바뀔때 eventListener 동작함.
    // usecallback을 사용? 함수 또한 객체이기 때문에, 새로 실행하면 새로운 객체가 생성되어버림
    // 그러다 보면 의도치 않은 re-rendering이 발생함.

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
<div>
    <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
    </div>
    <div>
    <label htmlFor="user-nick">닉네임</label>
        <br />
        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
    </div>
    <div>
    <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
    </div>
    <div>
    <label htmlFor="user-password-check">비밀번호체크</label>
        <br />
        <Input name="user-password-check" type="password" value={passwordCheck} required
    onChange={onChangePasswordCheck} />
    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
    </div>
    <div>
    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>회원가입 약관에 동의합니다.</Checkbox>
        {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
            </Form>
            </>
        );
};

export default Signup;