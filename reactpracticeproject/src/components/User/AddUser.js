import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invaild input',
        message: 'Please enter a vaild name and age (non-empty values).',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invaild age',
        message: 'Please enter a vaild age ( > 0 ).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    console.log(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
    // setError를 거짓이나 null로 만들어줌으로 ErrorModal이 나올 수 있는 조건을 불충족시김 -> 되돌아가기가 가능해짐
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
