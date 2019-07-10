import React, { useContext, useEffect, useRef } from 'react';
import { get } from 'lodash';

import addAccountMutation from '../AddAccountMutation';
import Input from 'components/Form/Input';

type AddNewAccountProps = {
  accounts: [
    {
      login: string,
      password: string,
      description: string,
    }
  ]
};

const AddNewAccount = ({ accounts }: AddNewAccountProps) => {
  console.log('AddNewAccount');
  const _id = "5d23d73ac298944fd78f8943";
  const loginRef = useRef();
  const passwordRef = useRef();
  const descriptionRef = useRef();
  let addAccount = addAccountMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount({
      variables: {
        _id,
        accounts: [...accounts, {
          login: get(loginRef, 'current.value'),
          password: get(passwordRef, 'current.value'),
          description: get(descriptionRef, 'current.value'),
        }],
      }
    });
  };
  return (
    <form onSubmit={handleSubmit} >
      <input ref={loginRef} name="login" placeholder="login" />
      <input ref={passwordRef} name="password" placeholder="password" />
      <input ref={descriptionRef} name="description" placeholder="description" />
      character:
      <Input name="name" placeholder="name" />
      <input name="characterDescription" placeholder="characterDescription" />
      proffesions:
        <input name="class" placeholder="class" />
        <input type="checkbox" name="isMain" placeholder="isMain" />
        <input name="level" placeholder="level" />
        <textarea name="proffesionDescription" />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddNewAccount;