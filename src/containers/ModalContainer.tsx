import React from "react";
import { useSelector } from "react-redux";

import { selectJobById } from "../ducks/jobs";
import { RootState } from "../ducks/root";
import { LooseObject } from "../helpers/types";
import ModalDialog from "../components/common/ModalDialog";

interface ModalProps {
    modal: LooseObject;
}

export const ModalContainer: React.FC<ModalProps> = ({ modal }) => {
    const job = useSelector((state: RootState) => selectJobById(state));
    return (
        <ModalDialog job={job} modal={modal} />
    )
}