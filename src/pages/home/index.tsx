import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { BaseContext } from 'src/pages/Base';

const HomePage= () => {
  const { t } = useTranslation();
  const { setTitle } = useContext(BaseContext);
  useEffect(() => {
    setTitle( t('titles.home'));
  }, []);
  return (
    <div>
      home
    </div>
  );
}

export default HomePage;