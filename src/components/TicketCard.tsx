export default function TicketCard({ ticket }: any) {
  const handleDragStart = (e: any) => {
    if (!ticket?.id) return;

    e.dataTransfer.setData("ticketId", String(ticket.id));
  };

  return (
    <div className="ticket" draggable onDragStart={handleDragStart}>
      <h4>{ticket.title}</h4>
      <p>{ticket.assignee}</p>
      <p>{ticket.deadline}</p>
      <p>{ticket.status}</p>
    </div>
  );
}
