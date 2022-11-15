import { Typography } from 'antd';
import NextImage from 'next/image';
import { FC, useState } from 'react';
import styled from 'styled-components';

import { Airport } from './Airport';
import { Line } from './Line';
import { Time } from './Time';

const timeVariants = ['09:20 — 11:05', '10:20 — 12:05', '11:20 — 13:05'];

interface Props {
    from: string;
    to: string;
    date: string;
}

export const Ticket: FC<Props> = ({ from, to, date }) => {
    const [active, setActive] = useState(0);

    return (
        <Container>
            <TicketSort>Невозвратный</TicketSort>
            <Left>
                <NextImage src="/s7.png" alt="s7" height={39} width={39} />
                <Typography.Text>S7 Airlines</Typography.Text>
            </Left>
            <div style={{ width: '100%' }}>
                <Main>
                    <Airport name={from} date={date} time={timeVariants[active].slice(0, 5)} />
                    <Line />
                    <Airport name={to} date={date} time={timeVariants[active].slice(7)} />
                    <NextImage src="/bagage.svg" alt="" height={110} width={50} />
                </Main>
                <Time list={timeVariants} active={active} setActive={setActive} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: relative;
    height: 200px;
    padding-top: 1px;
`;

const TicketSort = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 132px;
    padding: 6px 23px;
    border-radius: 15px 0px;
    background: #8ba5d8;
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 157px;
    padding: 54px 23px;
    > span {
        color: #5c5c5c;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    margin-right: 20px;
`;
