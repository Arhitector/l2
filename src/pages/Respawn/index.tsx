import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseContext } from 'src/pages/Base';
import Card from 'src/components/Card';

const RespawnPage= () => {
  const { t } = useTranslation();
  const {dispatch} = useContext(BaseContext);
  useEffect(() => {
    dispatch({type: 'PAGE_TITLE', payload: { title: t('titles.respawn') }});
    return () => dispatch({type: 'RESET'});
  }, []);
  return (
    <div>

      <Card>respawn</Card>
    </div>
  );
}

export default RespawnPage;