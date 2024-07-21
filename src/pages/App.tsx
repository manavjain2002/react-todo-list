import ManageTODO from "../components/ManageTODO";
import Title from "../components/Title";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";
import { useState } from "react";
import { Todo } from "../interfaces/Todo";
import Alert from "../components/Alert";

function App() {
  const message = "TODO-List";

  const [deletedItem, setDeletedItem] = useState({} as Todo);
  const [changed, setChanged] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

  const pendingItemsStorage = localStorage.getItem("pendingItems");
  const completedItemsStorage = localStorage.getItem("completedItems");

  const pendingItems = pendingItemsStorage
    ? JSON.parse(pendingItemsStorage)
    : [];

  const completedItems = completedItemsStorage
    ? JSON.parse(completedItemsStorage)
    : [];

  const [count, setCount] = useState(
    pendingItems.length + completedItems.length
  );

  return (
    <div className="main-content">
      <Title message={message} />
      <ManageTODO
        count={count}
        setCount={setCount}
        deletedItem={deletedItem}
        changed={changed}
        setChanged={setChanged}
        setDeletedItem={setDeletedItem}
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
      />
      <Alert
        deletedItem={deletedItem}
        setDeletedItem={setDeletedItem}
        changed={changed}
        setChanged={setChanged}
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
      />
    </div>
  );
}

export default App;
