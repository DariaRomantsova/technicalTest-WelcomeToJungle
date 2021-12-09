import { FormInputs, Job } from "./types";
import { sortBy } from "lodash";

export function filterJobs(jobs: Array<Job>, params: FormInputs): Array<Job> {
    return sortBy(jobs.filter((job: Job) => job.name.toLocaleLowerCase().includes(params.name.toLocaleLowerCase())), [params.groupBy])
}