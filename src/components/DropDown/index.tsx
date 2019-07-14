import React, {SFC} from 'react';
import { Combobox } from 'react-widgets';

const DropDown: SFC = () => {
  const data = [
    'orange',
    'red',
    'blue',
    'purple'
  ];
  return (<Combobox
  data={data}
  textField='name'
  caseSensitive={false}
  minLength={1}
  filter='contains'
/>);
};

export default DropDown;