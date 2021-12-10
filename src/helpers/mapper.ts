import { LooseObject } from "./types";

export const normalize = (data: LooseObject[]): LooseObject =>
  data.reduce(
    (acc, current) => {
      acc.byId[current.id] = current;
      acc.allIds.push(current.id);
      return acc;
    },
    { byId: {}, allIds: [] },
  );
