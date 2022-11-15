import { Space, Typography } from 'antd';
import { Moment } from 'moment';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';

import { Ticket } from '../../components/card/Ticket';

export default function Info() {
    const { query } = useRouter();
    return (
        <Container>
            <Tickets>
                <Ticket from={query.from as string} to={query.to as string} date={query.departDate as string} />
                {query.returnDate && (
                    <>
                        <Divider />
                        <Ticket from={query.to as string} to={query.from as string} date={query.returnDate as string} />
                    </>
                )}
            </Tickets>
            <Price>
                <Typography.Text>{4150 * (query.returnDate ? 2 : 1)} ₽</Typography.Text>
            </Price>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
`;

const Tickets = styled.div`
    flex: 1;
`;
const Divider = styled.div`
    height: 0px;
    width: 656px;
    margin-left: 132px;
    margin-bottom: -1px;
    border-bottom: 1px dashed #5c87db;
`;

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    border-left: 1px solid #dde3ee;

    > span {
        color: #232323;
        font-size: 32px;
        font-weight: 700;
        line-height: 38px;
        text-align: center;
    }
`;
