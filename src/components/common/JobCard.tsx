import React from "react";
import { Card } from '@welcome-ui/card';
import { Text } from '@welcome-ui/text';
import { ContractIcon } from '@welcome-ui/icons.contract';
import { OfficeIcon } from '@welcome-ui/icons.office';
import { InformationIcon } from '@welcome-ui/icons.information';
import { Box } from '@welcome-ui/box';
import { Modal } from '@welcome-ui/modal';
import { Button } from '@welcome-ui/button';

import { Job, LooseObject } from "../../helpers/types";
import ApplyButton from "./ApplyButton";
import { getUrl } from "../../helpers/getUrl";


interface CardProps {
    job: Job;
    modal: LooseObject;
}

export const JobCard: React.FC<CardProps> = ({ job, modal }) => {
    const ref = React.useRef();
    const url = getUrl(job.websites_urls)
    return (
        <Box key={job.id}>
            <Card minWidth={800} mt={5} mb={5}>
                <Card.Body>
                    <Text as="h4" fontWeight="bold" mt={0} mb="lg" color="dark.900">
                        {job.name}
                    </Text>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' >
                        <Box display='flex' minWidth={300} alignItems='end'>
                            <InformationIcon />{job.department.name}
                            <ContractIcon /> {job.contract_type.en}
                            <OfficeIcon />{job.office.name}
                        </Box>
                        <Modal.Trigger id={job.id} ref={ref} aria-label={job.id} {...modal} as={Button}>
                            See more
                        </Modal.Trigger>
                        <Box align-self='end'>
                            <ApplyButton url={url} />
                        </Box>
                    </Box>

                </Card.Body>
            </Card>
        </Box>

    )
}

export default React.memo(JobCard)