import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';

import { BaseContext } from 'src/pages/Base';
import accountsQuery from './AccountsQuery';
import addAccountMutation from './AddAccountMutation';

import Account from './components/Account';
import AddNewAccount from './components/AddNewAccount';
import { Table, Row, Cell } from 'components/Table/basic';

const AccountPage = () => {
  console.log('AccountPage');
  const { t } = useTranslation();
  const { setTitle } = useContext(BaseContext);
  const _id = "5d23d73ac298944fd78f8943";
  let { data, error, loading } = accountsQuery({ _id });
  const accounts = get(data, 'userById.accounts') || [];
  
  
  useEffect(() => {
    setTitle( t('titles.account'));
  }, []);

  return (
    <div>
      <Table>
        {
          accounts.map( (account, index) => (
            <React.Fragment key={index}>
              <Account account={account} />
            </React.Fragment>
          ))
        }
        <AddNewAccount accounts={accounts} />
      </Table>
    </div>
  );
}

export default AccountPage;