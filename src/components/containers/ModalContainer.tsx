import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { selectJobById } from "../../ducks/jobs";
import { RootState } from "../../ducks/root";
import { LooseObject } from "../../helpers/types";
import { ModalDialog } from "../common/ModalDialog";

interface ModalProps {
    modal: LooseObject;
}

export function ModalContainer({ modal }: ModalProps): ReactElement {
    const job = useSelector((state: RootState) => selectJobById(state));
    return (
        <ModalDialog job={job} modal={modal} />
    )
}