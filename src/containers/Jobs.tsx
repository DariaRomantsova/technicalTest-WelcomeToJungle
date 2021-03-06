import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Box } from '@welcome-ui/box'
import { Loader } from '@welcome-ui/loader'
import { useModalState } from '@welcome-ui/modal';
import { useDispatch, useSelector } from "react-redux";

import { actions, selectIsLoading, selectJobsItems } from "../ducks/jobs";
import { SearchBar } from "../components/common/SearchBar";
import { FormInputs, Job } from "../helpers/types";
import { ModalContainer } from "./ModalContainer";
import { filterJobs } from "../helpers/jobsFilter";
import { JobCard } from "../components/common/JobCard";


export const Jobs: React.FC = () => {
    const jobs = useSelector(selectJobsItems);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const modal = useModalState();
    const [params, setParams] = useState<FormInputs>({
        name: '',
        groupBy: 'department.name',
    });

    const filterdJobs = useMemo(() => filterJobs(jobs, params), [params, jobs]);

    useEffect(() => {
        dispatch(actions.getJobsList());
    }, [dispatch])

    useEffect(() => {
        if (modal.visible) {
            dispatch(actions.setSelectedJob({ jobId: modal.unstable_disclosureRef.current.id }))
        }
    }, [modal, dispatch])



    const handleSubmit = useCallback((values: FormInputs) => {
        setParams(values);
    }, [jobs]);

    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <SearchBar onSubmit={handleSubmit} />
            {isLoading ?
                <Loader size="40px" /> :
                <>
                    {filterdJobs.map((job: Job) => (
                        <JobCard key={job.id} job={job} modal={modal} />
                    ))}
                </>}
            <ModalContainer modal={modal} />
        </Box>
    )
}
