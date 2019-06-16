import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseContext } from 'src/pages/Base';

const HomePage= () => {
  const { t } = useTranslation();
  const {dispatch} = useContext(BaseContext);
  useEffect(() => {
    dispatch({type: 'PAGE_TITLE', payload: { title: t('titles.home') }});
    return () => dispatch({type: 'RESET'});
  }, []);
  return (
    <div>
      home
    </div>
  );
}

export default HomePage;