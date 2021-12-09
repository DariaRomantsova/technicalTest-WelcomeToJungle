/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
// @ts-ignore
import { Select } from '@welcome-ui/select'
// @ts-ignore
import { Field } from '@welcome-ui/field';
// @ts-ignore
import { InputText } from '@welcome-ui/input-text';
import { GROUP } from '../../constants/constants';
import { Controller } from "react-hook-form";

export const SearchForm = React.memo(({ register, setValue, handleSubmit, onSubmit }: any) => {
  const handleChange = (e: string) => {
    setValue('groupBy', e);
    handleSubmit(onSubmit)();
  }
  return (
    <>
      <Field
        component={InputText}
        isClearable
        name='name'
        placeholder='Your dream job?'
        maxWidth={300}
        {...register('name')}
        onChange={(e: any) => {
          setValue(e.target.name, e.target.value)
          handleSubmit(onSubmit)();
        }}
      />
      <Controller
        name='groupBy'
        render={({ field: { name, value } }) => {
          return (
            <Field
              component={Select}
              placeholder='Group by'
              name={name}
              {...register('groupBy')}
              options={GROUP}
              onChange={handleChange}
              value={value}
            />
          )
        }}
      />
    </>
  )
})
SearchForm.displayName = 'SearchForm';