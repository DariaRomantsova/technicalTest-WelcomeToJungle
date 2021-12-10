import React, { cloneElement, ReactElement } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { Box } from '@welcome-ui/box';

import { FormInputs } from '../../helpers/types';

interface FormInterface {
  children: ReactElement;
  defaultValues: FormInputs;
  onSubmit: SubmitHandler<FormInputs>;
}

export const Form: React.FC<FormInterface> = ({ children, defaultValues, onSubmit }) => {
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
            ...children.props
          })}
        </Box>
      </form>
    </FormProvider>
  )
}

export default React.memo(Form)