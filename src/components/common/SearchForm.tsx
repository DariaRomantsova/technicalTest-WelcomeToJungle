import React, { useCallback } from "react";
import { Select } from '@welcome-ui/select';
import { Field } from '@welcome-ui/field';
import { InputText } from '@welcome-ui/input-text';
import { Controller, SubmitHandler } from "react-hook-form";

import { GROUP } from '../../constants/constants';
import { FormInputs, GroupTypes, LooseObject } from "../../helpers/types";

interface Event<T> {
  target: EventTarget & T;
}

interface TargetParams {
  name: string;
  value: string;
}

interface SearchFormProps {
  register?: (name: string) => LooseObject;
  setValue?: (name: string, value: unknown) => void;
  handleSubmit?: any;
  onSubmit: SubmitHandler<FormInputs>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ register, setValue, handleSubmit, onSubmit }) => {

  const handleChange = useCallback((e: GroupTypes) => {
    setValue?.('groupBy', e);
    handleSubmit?.(onSubmit)();
  }, [])

  return (
    <>
      <Field
        component={InputText}
        isClearable
        name='name'
        placeholder='Your dream job?'
        maxWidth={300}
        {...register?.('name')}
        onChange={useCallback((e: Event<TargetParams>) => {
          console.log(e)
          setValue?.(e.target.name, e.target.value)
          handleSubmit?.(onSubmit)();
        }, [])}
      />
      <Controller
        name='groupBy'
        render={({ field: { name, value } }) => {
          return (
            <Field
              component={Select}
              placeholder='Group by'
              name={name}
              {...register?.('groupBy')}
              options={GROUP}
              onChange={handleChange}
              value={value}
            />
          )
        }}
      />
    </>
  )
}
export default React.memo(SearchForm)