import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseContext } from 'src/pages/Base';

const Database = () => {
  const { t } = useTranslation();
  const {dispatch} = useContext(BaseContext);
  useEffect(() => {
    dispatch({type: 'PAGE_TITLE', payload: { title: t('titles.database') }});
    return () => dispatch({type: 'RESET'});
  }, []);
  return (
      <div>
        database
      </div>
  );
};
export default Database;
