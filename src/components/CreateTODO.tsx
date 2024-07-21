import { useState } from "react";

interface Props {
  count: number;
  setCount: (count: number) => void;
}

const CreateTODO = ({ setCount, count }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (title && description && date) {
      const pendingItemsStorage = localStorage.getItem("pendingItems");

      const pendingItems =
        pendingItemsStorage && pendingItemsStorage.length > 0
          ? JSON.parse(pendingItemsStorage)
          : [];

      const newItem = {
        key: count + 1,
        title: title,
        description,
        isPending: true,
        deadline: date,
      };

      localStorage.setItem(
        "pendingItems",
        JSON.stringify([...pendingItems, newItem])
      );

      setTitle("");
      setDescription("");
      setDate("");

      setCount(count + 1);
    } else {
      alert("Fill all the details");
    }
  };
  return (
    <div className="create-section">
      <div className="create-todo">
        <h1>Create a task</h1>
        <form action="/" method="post" onSubmit={(e) => handleOnSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              value={title}
              className="form-control"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={description}
              className="form-control"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputDate" className="form-label">
              Deadline
            </label>
            <input
              type="date"
              value={date}
              className="form-control"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTODO;
