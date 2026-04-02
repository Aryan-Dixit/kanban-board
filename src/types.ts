export type Status = "todo" | "in-progress" | "blocked" | "completed";

export type Ticket = {
  id: "string";
  title: "string";
  assignee: "string";
  deadline: "string";
  status: Status;
};
