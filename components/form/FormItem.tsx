import { Typography } from 'antd';
import { cloneElement, FC, ReactElement } from 'react';
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface Props extends UseControllerProps {
    label: string;
    children: ReactElement;
}

export const FormItem: FC<Props> = ({ label, name, rules, children }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field, fieldState }) => (
                <Container>
                    <Typography.Text>{label}</Typography.Text>
                    {cloneElement(children, field)}
                    <ErrorArea>
                        {fieldState.isTouched && fieldState.error?.message && <Error>{fieldState.error.message}</Error>}
                    </ErrorArea>
                </Container>
            )}
        />
    );
};

const Container = styled.div`
    > span:first-child {
        color: #ffffff;
    }
`;

const ErrorArea = styled.div`
    height: 24px;
    margin-top: 6px;
`;

const Error = styled.span`
    padding: 3px 12px;
    border-radius: 8px;
    background: #fff;
    color: #d20;
    font-size: 14px;
    line-height: 16px;
`;
