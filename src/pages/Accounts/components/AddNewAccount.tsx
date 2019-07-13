import React, { SFC, useState , useCallback } from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';


import addAccountMutation from '../AddAccountMutation';
import Input from 'components/Form/Input';
import Add from 'components/Icons/Add';
import Button from 'components/Button';

import { Accounts, Account, Character } from '../interfaces';

interface Characters {
  item: number,
  key: number,
};

interface Professions {
  item: number,
  character: number,
};

type HandleSubmit = (values: Account) => void;

const WrapBox = styled('div')`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Box = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const BoxCharacter = styled(Box)`
`;

const BoxCharacters = styled(Box)`
`;

const BoxProfessions = styled(Box)`
  align-items: flex-end;
`;

const StyledAdd = styled(Add)`
  margin-left: auto;
`;

const Professions: SFC<Professions> = ({ item, character }) => (
    <BoxProfessions key={item} >
      <Field name={`characters[${character}].professions[${item}]class`} placeholder="class" component={Input} />
      <ErrorMessage name={`characters[${character}].professions[${item}]class`} component="div" />
      <Field type="checkbox" name={`characters[${character}].professions[${item}]isMain`} placeholder="isMain" component={Input} />
      <ErrorMessage name={`characters[${character}].professions[${item}]isMain`} component="div" />
      <Field name={`characters[${character}].professions[${item}]level`} placeholder="level" component={Input} />
      <ErrorMessage name={`characters[${character}].professions[${item}]level`} component="div" />
      <Field
        name={`characters[${character}].professions[${item}]professionsDescription`}
        placeholder="professionsDescription"
        rows="2"
        component={Input}
      />
    </BoxProfessions>
  );

const Characters: SFC<Characters> = ({ item }) => {
  const [professionsAmount, setProfessionsAmount] = useState<number>(0);
  const setProfessionsAmountCallback = useCallback(() => setProfessionsAmount(c => c + 1), [setProfessionsAmount]);

  return (
    <BoxCharacters key={item} >
      <Field name={`characters[${item}]name`} placeholder="name" component={Input} />
      <ErrorMessage name={`characters[${item}]name`} component="div" />
      <Field name={`characters[${item}]characterDescription`} placeholder="characterDescription" component={Input} />
      <ErrorMessage name={`characters[${item}]characterDescription`} component="div" />
      <StyledAdd onClick={setProfessionsAmountCallback} color="#0ff" label="add proffesion:" />
      <WrapBox>{ Array(professionsAmount).fill(1).map((b, i) => (<Professions key={i} item={i} character={item} />)) }</WrapBox>
    </BoxCharacters>
  );
};

const AddNewAccount: SFC<Accounts> = ({ accounts }) => {
  console.log('AddNewAccount');
  const _id = "5d23d73ac298944fd78f8943";
  let addAccount = addAccountMutation();
  const [charactersAmount, setCharactersAmount] = useState<number>(0);

  const handleSubmit: HandleSubmit = (values) => {
    addAccount({
      variables: {
        _id,
        accounts: [...accounts, values],
      }
    });
  };

  const setCharactersAmountCallback = useCallback(() => setCharactersAmount(c => c + 1), [setCharactersAmount]);

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        description: '',
        characters: [
          {
            name: '',
            characterDescription: '',
            professions: [
              {
                class: '',
                isMain: false,
                level: 0,
                professionsDescription: '',
              }
            ]
          }
        ],
      }}
      onSubmit={(values: Account, { setSubmitting }) => {
        setSubmitting(false);
        handleSubmit(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <BoxCharacter>
            <Field name="login" placeholder="login" component={Input} />
            <ErrorMessage name="login" component="div" />
            <Field name="password" placeholder="password" component={Input} />
            <ErrorMessage name="password" component="div" />
            <Field name="description" placeholder="description" component={Input} />
            <ErrorMessage name="description" component="div" />
            <StyledAdd onClick={setCharactersAmountCallback} color="#0f0" label="add character:" />
          </BoxCharacter>
          <WrapBox>{ Array(charactersAmount).fill(1).map((item: Character, i: number) => (<Characters key={i} item={i} />)) }</WrapBox>
          <br />
          <Button success type="submit" disabled={isSubmitting} >submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddNewAccount;