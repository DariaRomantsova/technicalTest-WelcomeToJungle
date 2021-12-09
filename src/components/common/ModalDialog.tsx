/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement } from "react";

// @ts-ignore
import { Text } from '@welcome-ui/text';
// @ts-ignore
import { Modal } from '@welcome-ui/modal';
import { Job } from "../../helpers/types";

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
                        <Text>Job Description</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.description }}></div>
                        <Text>Recruitment process</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.recruitment_process }}></div>
                        <Text>Profile</Text>
                        <div className="content" dangerouslySetInnerHTML={{ __html: job.profile }}></div>
                    </Modal.Content>
                </Modal>)}
        </>
    )
})
ModalDialog.displayName = 'ModalDialog';
