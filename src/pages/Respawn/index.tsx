import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseContext } from 'src/pages/Base';
import BossesList from './components/BossesList';

const RespawnPage= () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const {dispatch} = useContext(BaseContext);
  useEffect(() => {
    setLoading(false);
    dispatch({type: 'PAGE_TITLE', payload: { title: t('titles.respawn') }});
    return () => dispatch({type: 'RESET'});
  }, []);
  return (
    <div>
      { !loading && <BossesList /> }
    </div>
  );
}

export default RespawnPage;