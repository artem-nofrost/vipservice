import { zodResolver } from '@hookform/resolvers/zod';
import { Space } from 'antd';
import { Moment } from 'moment';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as z from 'zod';

import { Button } from '../../components/form/Button';
import { Form } from '../../components/form/Form';
import { FormItem } from '../../components/form/FormItem';
import { DatePicker, Input } from '../../components/form/Input';

type FormType = {
    from: string;
    to: string;
    departDate?: Moment;
    returnDate?: Moment;
};
type TicketType = {
    from: string;
    to: string;
    departDate: string;
    returnDate?: string;
};
const defaultValues: FormType = {
    from: '',
    to: '',
    departDate: undefined,
    returnDate: undefined,
};
const schema = z.object({
    from: z.string().min(1, 'Введите город'),
    to: z.string().min(1, 'Введите город'),
    departDate: z.any(),
    returnDate: z.any(),
});

export default function Avia() {
    const router = useRouter();
    const methods = useForm<FormType>({ mode: 'onChange', defaultValues, resolver: zodResolver(schema) });

    const onFormSubmit = useCallback(
        (values: FormType) => {
            const obj: TicketType = {
                from: values.from,
                to: values.to,
                departDate: values.departDate?.format('YYYY-MM-DD') ?? '',
            };
            if (values.returnDate) {
                obj.returnDate = values.returnDate?.format('YYYY-MM-DD');
            }
            router.push(`/avia/info?${new URLSearchParams(obj)}`);
        },
        [router],
    );

    const ready = methods.formState.isValid;

    return (
        <Container>
            <Form methods={methods} onSubmit={methods.handleSubmit(onFormSubmit)}>
                <Top>
                    <Space direction="horizontal" size={24}>
                        <FormItem label="Откуда" name="from">
                            <Input placeholder="Город вылета" />
                        </FormItem>
                        <FormItem label="Куда" name="to">
                            <Input placeholder="Город прилёта" />
                        </FormItem>
                        <FormItem label="Туда" name="departDate" rules={{ required: true }}>
                            <DatePicker />
                        </FormItem>
                        <FormItem label="Обратно" name="returnDate">
                            <DatePicker />
                        </FormItem>
                    </Space>
                </Top>
                <Bottom>
                    <Button htmlType="submit" disabled={!ready}>
                        Найти билеты
                    </Button>
                </Bottom>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0px 0px 14px rgba(112, 121, 153, 0.3);
    overflow: hidden;
`;

const Top = styled.div`
    padding: 17px 30px 6px;
    border: 1px dashed #7b61ff;
    background: #5c87db;
`;

const Bottom = styled.div`
    padding: 23px 29px;
    text-align: right;
`;
