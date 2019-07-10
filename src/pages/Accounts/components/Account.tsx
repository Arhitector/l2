import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

import { Row, Cell } from 'components/Table/basic';
import Tooltip from 'components/Tooltip';

import { colors } from 'src/variables';

const PasswordButton = styled('button')`
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const Copied = styled(Tooltip)`
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  white-space: nowrap;
`;

const Account = ({ account }) => {
  console.log('Account');

  const [showCharacters, setShowCharacters] = useState(false);
  const [copySuccess, setCopySuccess] = useState('click to copy');
  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(account.password)
    setCopySuccess('Copied!');
  };

  return (
    <React.Fragment>
      <Row>
        <Cell>{account.login}</Cell>
        <Cell>
          <PasswordButton
            onClick={copyToClipboard}
            onMouseLeave={() => setCopySuccess('click to copy')}
            ref={passwordRef}
          >
            *********
            <Copied>{copySuccess}</Copied>
          </PasswordButton>
        </Cell>
        <Cell>{account.description}</Cell>
        <Cell toRight ><button onClick={() => setShowCharacters(!showCharacters)} >toogle</button></Cell>
        <Cell>edit</Cell>
      </Row>
      {
        showCharacters && account.characters.map((character, i) => (
          <Row key={i} >
            <Cell>{character.name}</Cell>
          </Row>
        ))
      }
    </React.Fragment>
  );
}

export default Account;