import React, { SFC, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { get, isEmpty } from 'lodash';

import { BaseContext } from 'src/pages/Base';
import accountsQuery from './AccountsQuery';
import addAccountMutation from './AddAccountMutation';

import Account from './components/Account';
import AddNewAccount from './components/AddNewAccount';
import { Table, Row, Cell } from 'components/Table/basic';

const AccountWrapper: SFC = () => {
  const _id = "5d23d73ac298944fd78f8943";
  let { data, error, loading } = accountsQuery({ _id });
  
  const server = get(data, 'userById.servers[0]') || [];
  const accounts = get(server, 'accounts') || [];
  
  if (loading) {
    return <span>Loading...</span>;
  };

  return  !loading && !isEmpty(accounts) && (<Table>
    <h3>{server.name}</h3>
    {
      accounts.map( (account, index) => (
        <React.Fragment key={index}>
          <Account account={account} />
        </React.Fragment>
      ))
    }
    <AddNewAccount accounts={accounts} />
  </Table>);
}

const AccountPage: SFC = () => {
  console.log('AccountPage');
  const { t } = useTranslation();
  const { setTitle } = useContext(BaseContext);
  
  const [loading, setLoading] = useState<boolean>(true);
  
  
  useEffect(() => {
    setTitle( t('titles.account'));
    setLoading(false);
  }, []);

  if (loading) return null;

  return <AccountWrapper />;
}

export default AccountPage;