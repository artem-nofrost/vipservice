import { DetailedHTMLProps, FC, FormEventHandler, FormHTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface Props {
    children: ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: FormEventHandler<HTMLFormElement> | VoidFunction;
    formOptions?: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
}

export const Form: FC<Props> = ({ children, onSubmit, methods, formOptions }) => (
    <FormProvider {...methods}>
        <form onSubmit={onSubmit} {...formOptions}>
            {children}
        </form>
    </FormProvider>
);
