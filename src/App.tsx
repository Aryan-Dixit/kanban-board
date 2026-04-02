import Board from "./components/Board";
import { BoardProvider } from "./context/BoardContext";
import "./styles.css";

export default function App() {
  return (
    <BoardProvider>
      <Board />
    </BoardProvider>
  );
}
