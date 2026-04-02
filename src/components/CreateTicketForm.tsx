import { useContext, useState } from "react";
import { BoardContext } from "../context/BoardContext";

export default function CreateTicketForm() {
  const { dispatch } = useContext(BoardContext);

  const [form, setForm] = useState({
    title: "",
    assignee: "",
    deadline: "",
  });

  const handleSubmit = () => {
    if (!form.title) return;

    dispatch({
      type: "ADD",
      payload: {
        ...form,
        id: Date.now().toString(),
        status: "todo",
      },
    });

    setForm({
      title: "",
      assignee: "",
      deadline: "",
    });
  };

  return (
    <div className="form">
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => {
          setForm({
            ...form,
            title: e.target.value,
          });
        }}
      />
      <input
        placeholder="Assignee"
        value={form.assignee}
        onChange={(e) => {
          setForm({
            ...form,
            assignee: e.target.value,
          });
        }}
      />
      <input
        type="date"
        value={form.deadline}
        onChange={(e) => {
          setForm({
            ...form,
            deadline: e.target.value,
          });
        }}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
