import { Ticket } from "../types";

export type State = {
  tickets: Ticket[];
};

export type Action =
  | {
      type: "ADD";
      payload: Ticket;
    }
  | {
      type: "MOVE";
      payload: {
        id: string;
        status: Ticket["status"];
      };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return { ...state, tickets: [...state.tickets, action.payload] };

    case "MOVE":
      if (!action.payload || action.payload.id == null) return state;
      return {
        ...state,
        tickets: (state.tickets || []).map((t) => {
          if (!t) return t;
          return String(t.id) === String(action.payload.id)
            ? { ...t, status: action.payload.status }
            : t;
        }),
      };

    default:
      return state;
  }
};
