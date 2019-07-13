import React from 'react';
import styled from '@emotion/styled';

import { colors, gap } from 'src/variables';

const Wrapper = styled.footer`
  grid-area: footer;
  background-color: ${colors.opposite}12;
  padding: ${gap.g3};
`;

interface Props {
};

const Footer: React.FC<Props> = () => {
  return (
    <Wrapper>
      footer
    </Wrapper>
  );
};

export default Footer;
