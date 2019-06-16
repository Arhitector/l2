import React from 'react';
import styled from 'styled-components';

import { fz, ff } from 'src/variables';

const H1 = styled.h1`
    text-transform: uppercase;
    font-size: ${fz.h1};
    font-family: ${ff.main};
    font-weight: 600;
`;

const Typography = ({children}) => {
    return (
        <H1>{children}</H1>
    );
}

export default Typography;
