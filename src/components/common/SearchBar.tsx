/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from "react";
// @ts-ignore
import { Box } from '@welcome-ui/box'
// @ts-ignore
import { Text } from '@welcome-ui/text';
import { Form } from "./Form";
import { SearchForm } from "./SearchForm";

interface SearchBarProps {
  onSubmit: (data: any) => void;
}

export const SearchBar = React.memo(({ onSubmit }: SearchBarProps): ReactElement => {
  return (
    <Box display='flex' flexDirection='row' alignItems='center'>
      <img width="50px" alt="Welcome to the Jungle" src="https://cdn-images.welcometothejungle.com/E_mxtYEUBzAnMAt6h6CllWPRi27B0uCF-O__ad6G_oU/rs:auto:200::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9vcmdhbml6YXRpb24vbG9nby8yNjM2LzE0NDQ5Mi8xZjgxNzA3OC05MDNlLTQ3MGQtOGVmYi1hYzk0OGNlMGE5MzkuanBn"/>
     <Text variant="h3" mr={10}> Welcome to the Jungle</Text>
      <Form defaultValues={{ groupBy: 'department.name', name: '' }} onSubmit={onSubmit}>
        <SearchForm />
      </Form>

    </Box>
  )
})
SearchBar.displayName = 'SearchBar';