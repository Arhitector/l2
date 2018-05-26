import React from 'react';
import styled from 'styled-components';
import { vars } from 'app/variables';

const CardWrap = styled.section`
  position: relative;
  display: flex;
  border-radius: 2px;
  margin-bottom: 2.3rem;
  padding: 2.2rem;
  box-shadow: 0 1px 5px rgba(0,0,0,.1);
  background-color: ${vars.colors.main}20;
`;

class Card extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <CardWrap>
        {children}
      </CardWrap>
    );
  }
}

export default Card;
