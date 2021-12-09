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
import { InformationIcon } from '@welcome-ui/icons.information'
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
            <Card minWidth={800} mt={5} mb={5}>
                <Card.Body>
                    <Text as="h4" fontWeight="bold" mt={0} mb="lg" color="dark.900">
                        {job.name}
                    </Text>
                    <Box display='flex' flexDirection='row'  justifyContent='space-between' >
                        <Box display='flex' minWidth={300} alignItems='end'>
                    <InformationIcon />{job.department.name}
                    <ContractIcon /> {job.contract_type.en}
                    <OfficeIcon />{job.office.name}
                    </Box>
                    <Modal.Trigger id={job.id} ref={ref} aria-label={job.id} {...modal} as={Button}>
                        See more
                    </Modal.Trigger>
                    <Box align-self='end'>
                    <ApplyButton  urls={job.websites_urls} />
                    </Box>
                    </Box>
                    
                </Card.Body>
            </Card>
        </Box>

    )
})

JobCard.displayName = 'JobCard';