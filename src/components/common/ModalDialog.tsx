/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from "react";
// @ts-ignore
import { Box } from '@welcome-ui/box'
// @ts-ignore
import { Text } from '@welcome-ui/text';
// @ts-ignore
import { Modal } from '@welcome-ui/modal';
import { Job } from "../../helpers/types";
import { ApplyButton } from "./ApplyButton";

interface ModalProps {
    job: Job;
    modal: any;
}
export const ModalDialog = React.memo(({ job, modal }: ModalProps): ReactElement => {
    return (
        <>
            {job &&
                (<Modal size='lg' {...modal} aria-label='hello' >
                    <Modal.Title>{job.name}</Modal.Title>
                    <Modal.Content style={{ maxHeight: '80vh' }}>
                        <Box display='flex' justifyContent='end'>
                        <ApplyButton urls={job.websites_urls}/>
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
})
ModalDialog.displayName = 'ModalDialog';
