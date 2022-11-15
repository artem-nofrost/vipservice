import { Button as AntButton } from 'antd';
import styled from 'styled-components';

export const Button = styled(AntButton)`
    height: 40px;
    padding: 0 30px;
    border: 0;
    border-radius: 10px;
    background: #5c87db;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    &:hover {
        background: #3e67b7;
        color: #ffffff;
    }
    &:disabled {
        background: #b7bac1;
        color: #ffffff;
    }
`;
