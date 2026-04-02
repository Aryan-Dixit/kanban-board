import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";
import TicketCard from "./TicketCard";

export default function Column({ status }: any) {
  const { state, dispatch } = useContext(BoardContext);

  const tickets = (state?.tickets || []).filter(
    (t: any) => t?.status === status
  );

  const handleDrop = (e: any) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("ticketId");

    if (!id) return;

    dispatch({
      type: "MOVE",
      payload: {
        id,
        status,
      },
    });
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h3 style={{ textTransform: "capitalize" }}>{status}</h3>
      {tickets.map((t: any) => (
        <TicketCard key={t.id} ticket={t} />
      ))}
    </div>
  );
}
