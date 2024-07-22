import "../../../styles/Searchbar.css";

export default function Searchbar({
  data,
  handleTodo,
  handleInput,
}: {
  data: string;
  handleTodo: () => void;
  handleInput: (e: { target: { value: string } }) => void;
}) {
  return (
    <section className="search-container">
      <input
        type="search"
        value={data}
        placeholder=" Ajouter ou Rechercher &#x1F50E; "
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <button type="submit" onClick={handleTodo}>
        {" "}
        Ajouter une tâche
      </button>
    </section>
  );
}
