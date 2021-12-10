import React from "react";
import { Box } from '@welcome-ui/box';
import { Text } from '@welcome-ui/text';
import { Modal } from '@welcome-ui/modal';

import { Job, LooseObject } from "../../helpers/types";
import { getUrl } from "../../helpers/getUrl";
import ApplyButton from "./ApplyButton";

interface ModalProps {
    job: Job;
    modal: LooseObject;
}
const ModalDialog: React.FC<ModalProps> = ({ job, modal }) => {
    const url = getUrl(job?.websites_urls)
    return (
        <>
            {job &&
                (<Modal size='lg' {...modal} aria-label='hello' >
                    <Modal.Title>{job.name}</Modal.Title>
                    <Modal.Content style={{ maxHeight: '80vh' }}>
                        <Box display='flex' justifyContent='end'>
                            <ApplyButton url={url} />
                        </Box>
                        <Text variant="h3">Job Description</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.description }}></div>
                        <Text variant="h3">Recruitment process</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.recruitment_process }}></div>
                        <Text variant="h3">Profile</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.profile }}></div>
                    </Modal.Content>
                </Modal>)}
        </>
    )
}

export default React.memo(ModalDialog)
