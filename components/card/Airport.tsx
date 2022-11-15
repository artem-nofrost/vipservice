import { Typography } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
    date: string;
    time: string;
}
export const Airport: FC<Props> = ({ name, date, time }) => (
    <Container>
        <StyledTime>{time}</StyledTime>
        <StyledDate>
            {name}
            <br />
            {date &&
                new Intl.DateTimeFormat('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(
                    new Date(date),
                )}
        </StyledDate>
    </Container>
);

const Container = styled.div`
    margin-top: 41px;
`;

const StyledDate = styled(Typography.Text)`
    display: block;
    color: #5c5c5c;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
`;

const StyledTime = styled(Typography.Text)`
    display: block;
    margin-bottom: 8px;
    color: #232323;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
`;
