/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactElement, useCallback, useEffect, useState } from "react";
// @ts-ignore
import { createTheme, WuiProvider } from '@welcome-ui/core';
// @ts-ignore
import { Box } from '@welcome-ui/box'
// @ts-ignore
import { useModalState } from '@welcome-ui/modal';
import { useDispatch, useSelector } from "react-redux";
import { jobsSlice, selectJobsItems } from "../../ducks/jobs";
import { SearchBar } from "../common/SearchBar";
import { FormInputs, Job } from "../../helpers/types";
import { ModalContainer } from "./ModalContainer";
import { filterJobs } from "../../helpers/jobsFilter";
import { JobCard } from "../common/JobCard";

const theme = createTheme()

export const Container = (): ReactElement => {
    const jobs = useSelector(selectJobsItems);
    const [filterdJobs, setJobs] = useState<Array<Job>>([]);
    const dispatch = useDispatch();
    const modal = useModalState();

    useEffect(() => {
        if (jobs.length) {
            setJobs(filterJobs(jobs, { name: '', groupBy: 'department.name' }));
        }
    }, [jobs])

    useEffect(() => {
        dispatch(jobsSlice.actions.getJobsList());
    }, [dispatch])

    useEffect(() => {
        if (modal.visible) {
            dispatch(jobsSlice.actions.setSelectedJob({ jobId: modal.unstable_disclosureRef.current.id }))
        }
    }, [modal, dispatch])

    const handleSubmit = useCallback((values: FormInputs) => {
        const list = filterJobs(jobs, values)
        setJobs(list);
    }, [jobs]);

    return (
        <WuiProvider theme={theme}>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <SearchBar onSubmit={handleSubmit} />
                {filterdJobs.map((job: Job) => (
                    <JobCard key={job.id} job={job} modal={modal} />
                ))}
                <ModalContainer modal={modal} />
            </Box>
        </WuiProvider>
    )
}
