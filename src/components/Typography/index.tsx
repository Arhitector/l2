import React from 'react';
import styled from '@emotion/styled';

import { fz } from 'src/variables';

const H1 = styled.h1`
    text-transform: uppercase;
    font-size: ${fz.h1};
    font-weight: 600;
`;

const Typography = ({children}) => {
    return (
        <H1>{children}</H1>
    );
}

export default Typography;
