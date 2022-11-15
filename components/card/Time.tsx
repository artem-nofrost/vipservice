import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import styled, { css } from 'styled-components';

interface Props {
    list: string[];
    active: number;
    setActive: Dispatch<SetStateAction<number>>;
}

export const Time: FC<Props> = ({ list, active, setActive }) => {
    const onClick = useCallback((i: number) => () => setActive(i), [setActive]);

    return (
        <Container>
            {list.map((time, i) => (
                <Button key={i} active={i == active} onClick={onClick(i)}>
                    {time}
                </Button>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 24px;
`;
const Button = styled.div<{ active: boolean }>`
    appearance: button;
    padding: 10px 15px;
    border-radius: 10px;
    color: #5c5c5c;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;

    ${({ active }) =>
        active &&
        css`
            background: #dde3ee;
        `}

    &:hover {
        background: #dde3ee;
        cursor: pointer;
    }
`;
