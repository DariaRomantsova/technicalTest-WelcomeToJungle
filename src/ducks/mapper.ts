import { LooseObject } from "../helpers/types";

export const normalize = (data:Array<LooseObject>) =>
  data.reduce(
    (acc, current) => {
      acc.byId[current.id] = current;
      acc.allIds.push(current.id);
      return acc;
    },
    { byId: {}, allIds: [] },
  );
