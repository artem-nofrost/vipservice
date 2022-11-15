import { DatePicker as AntDatePicker, Input as AntInput } from 'antd';
import styled from 'styled-components';

const containerStyles = `
    padding: 12px;
    border: 1px solid #b7bac1;
    border-radius: 10px;
    background: #ffffff;

    &:hover {
        border: 1px solid #5c87db;
        box-shadow: 0px 0px 2px rgba(92, 135, 219, 0.5);
    }
`;
const inputStyles = `
    color: #5C5C5C;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;

    ::placeholder {
        color: #b7bac1;
    }
`;

export const Input = styled(AntInput)`
    ${containerStyles}
    ${inputStyles}
`;

export const DatePicker = styled(AntDatePicker)`
    width: 100%;
    ${containerStyles}

    input {
        ${inputStyles}
    }
`;
