import Column from "./Column";
import CreateTicketForm from "./CreateTicketForm";

const statuses = ["todo", "in-progress", "blocked", "completed"];

export default function Board() {
  return (
    <div>
      <CreateTicketForm />
      <div className="board">
        {statuses.map((status) => (
          <Column key={status} status={status} />
        ))}
      </div>
    </div>
  );
}
