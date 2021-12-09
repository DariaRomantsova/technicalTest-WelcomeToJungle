
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Button } from '@welcome-ui/button';
import { WebsiteReference } from '../../helpers/types';

interface ApplyButtonProps {
    urls: Array<WebsiteReference>
}

export const ApplyButton = React.memo(({ urls }: ApplyButtonProps) => {
    const url = urls.find((item: WebsiteReference) => item.website_reference === "wttj_fr");
    return (
        <Button as="a" href={url?.url} >
            Apply
        </Button>
    )
})
ApplyButton.displayName = 'ApplyButton';