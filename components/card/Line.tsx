import { Typography } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

export const Line: FC = () => (
    <Container>
        <Dot left="0">
            <div />
            <Typography.Text>SVO</Typography.Text>
        </Dot>
        <Dot left="100%">
            <div />
            <Typography.Text>ROV</Typography.Text>
        </Dot>
        <Typography.Text>В пути 1 ч 55 мин</Typography.Text>
    </Container>
);

const Container = styled.div`
    flex: 1;
    position: relative;
    margin-top: 60px;
    border-top: 1px solid #b7bac1;

    > span {
        position: absolute;
        top: 8px;
        left: 50%;
        color: #b7bac1;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        transform: translateX(-50%);
    }
`;

const Dot = styled.div<{ left: string }>`
    position: absolute;
    top: 0;
    left: ${({ left }) => left};

    > div {
        position: absolute;
        top: -0.5px;
        left: 0;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background: #c4c4c4;
        transform: translate(-50%, -50%);
    }

    > span {
        position: absolute;
        bottom: 12px;
        left: 0;
        width: max-content;
        color: #b7bac1;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
        transform: translateX(-50%);
    }
`;
