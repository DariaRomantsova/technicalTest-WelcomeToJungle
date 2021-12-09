import React, { ReactElement } from "react";

import { Form } from "./Form";

import { SearchForm } from "./SearchForm";
interface SearchBarProps {
  onSubmit: (data: any) => void;
}
export const SearchBar = React.memo(({ onSubmit }: SearchBarProps): ReactElement => {
  return (
    <>
      Welcome to the Jungle
      <Form defaultValues={{ groupBy: 'department.name', name: '' }} onSubmit={onSubmit}>
        <SearchForm />
      </Form>

    </>
  )
})
SearchBar.displayName = 'SearchBar';