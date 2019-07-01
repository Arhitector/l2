import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';

import { BaseContext } from 'src/pages/Base';
import BossesList from './components/BossesList';
import respawnQuery from './RespawnQuery';

interface Props {};

const RespawnPage: React.StatelessComponent<Props> = () => {
  const { t } = useTranslation();
  let { data, error, loading } = respawnQuery({
    filter: { }
  });
  console.log(data, error, loading);
  const [loadingPage, setLoadingPage] = useState(true);
  const { dispatch } = useContext(BaseContext);
  const bossesList = get(data, 'bossesMany');
  useEffect(() => {
    setLoadingPage(false);
    dispatch({type: 'PAGE_TITLE', payload: { title: t('titles.respawn') }});
    return () => dispatch({type: 'RESET'});
  }, []);
  if (!bossesList) return null;
  return (
    <div>
      { !loadingPage && <BossesList bossesList={bossesList} /> }
    </div>
  );
}

export default RespawnPage;