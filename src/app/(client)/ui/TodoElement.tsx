import "../../../styles/TodoElement.css";

export default function TodoElement({
  todo,
  handleRemove,
  data,
  handleDone,
  setTodo,
}: {
  todo: { id: number; data: string; done: boolean }[];
  handleRemove: (index: number) => void;
  data: string;
  handleDone: (index: number) => void;
  setTodo: React.Dispatch<
    React.SetStateAction<{ id: number; data: string; done: boolean }[]>
  >;
}) {
  return (
    <div>
      {todo
        .filter(
          (item) =>
            item.data.includes(data) || item.data.toLowerCase().includes(data)
        )
        .map((item) => {
          return (
            <div key={`todo-${item.id}`}>
              <p className={item.done === true ? "task-done" : ""}>
                {item.data}
              </p>
              <button onClick={() => handleRemove(item.id)}>
                Suprimer la Tâche
              </button>
              <button onClick={() => handleDone(item.id)}>
                {item.done ? "Annuler" : "Terminer"}{" "}
              </button>
            </div>
          );
        })}

      <button onClick={() => setTodo([])}>TOUT SUPPRIMER</button>
    </div>
  );
}
