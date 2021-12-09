/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from "react";
// @ts-ignore
import { Card } from '@welcome-ui/card';
// @ts-ignore
import { Text } from '@welcome-ui/text';
// @ts-ignore
import { ContractIcon } from '@welcome-ui/icons.contract'
// @ts-ignore
import { OfficeIcon } from '@welcome-ui/icons.office'
// @ts-ignore
import { Box } from '@welcome-ui/box'
// @ts-ignore
import { Modal } from '@welcome-ui/modal';
// @ts-ignore
import { Button } from '@welcome-ui/button';
import { Job } from "../../helpers/types";
import { ApplyButton } from "./ApplyButton";


interface CardProps {
    job: Job;
    modal: any;
}

export const JobCard = React.memo(({ job, modal }: CardProps): ReactElement => {
    const ref = React.useRef<any>();
    return (
        <Box key={job.id}>
            <Card minWidth={800}>
                <Card.Body>
                    <Text as="h4" fontWeight="bold" mt={0} mb="lg" color="dark.900">
                        {job.name}
                    </Text>
                    {job.office.name}
                    {job.department.name}
                    <ContractIcon /> {job.contract_type.en}
                    <OfficeIcon />{job.office.name}
                    <Modal.Trigger id={job.id} ref={ref} aria-label={job.id} {...modal} as={Button}>
                        See more
                    </Modal.Trigger>
                    <ApplyButton urls={job.websites_urls} />
                </Card.Body>
            </Card>
        </Box>

    )
})

JobCard.displayName = 'JobCard';