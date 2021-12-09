import React, { cloneElement, ReactElement } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '../../helpers/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from '@welcome-ui/box';

interface FormInterface {
  children: ReactElement;
  defaultValues: FormInputs;
  onSubmit: SubmitHandler<FormInputs>;
}

export const Form = React.memo(({ children, defaultValues, onSubmit }: FormInterface) => {
  const formMethods = useForm<FormInputs>({
    defaultValues,
    mode: 'onChange',
  })
  const { handleSubmit, register, setValue } = formMethods

  return (
    <FormProvider {...formMethods}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Box display='flex' flexDirection='row'>
          {cloneElement(children, {
            register,
            setValue,
            handleSubmit,
            onSubmit,
            ...children.props
          })}
        </Box>
      </form>
    </FormProvider>
  )
})

Form.displayName = 'Form';