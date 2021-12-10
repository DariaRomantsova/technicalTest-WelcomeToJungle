import React from 'react';
import { Button } from '@welcome-ui/button';

interface ApplyButtonProps {
    url: string;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ url }) => {
    return (
        <Button as="a" href={url} >
            Apply
        </Button>
    )
}
export default React.memo(ApplyButton);