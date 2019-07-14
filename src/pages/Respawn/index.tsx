import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { get, isEmpty } from 'lodash';

import { BaseContext } from 'src/pages/Base';
import BossesList from './components/BossesList';
import respawnQuery from './RespawnQuery';

interface Props {
  
};

const ListWrapper = () => {
  let { data, error, loading } = respawnQuery({
    filter: { ids: [] }
  });
  const bossesList = get(data, 'bossesMany');
  
  if (loading) {
    return <span>Loading...</span>;
  };

  return  !loading && !isEmpty(bossesList) && <BossesList bossesList={bossesList} />;
}

const RespawnPage: React.StatelessComponent<Props> = () => {
  console.log('RespawnPage');
  const { t } = useTranslation();
  const { setTitle } = useContext(BaseContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTitle( t('titles.respawn'));
    setLoading(false);
  }, []);
  if (loading) return null;

  return (
    <ListWrapper />
  );
}

export default RespawnPage;