import { useEffect, useState } from "react";
import ListGroup from "./ListGroup";
import ListTodoNav from "./ListTodoNav";
import { Todo } from "../interfaces/Todo";

interface Props {
  count: number;
  changed: boolean;
  deletedItem: Todo;
  setDeletedItem: (item: Todo) => void;
  setChanged: (changed: boolean) => void;
  setCount: (count: number) => void;
  displayAlert: boolean;
  setDisplayAlert: (displayAlert: boolean) => void;
}

const ListTODO = ({
  count,
  changed,
  deletedItem,
  setDeletedItem,
  setCount,
  setChanged,
  displayAlert,
  setDisplayAlert,
}: Props) => {
  const [pending, setPending] = useState(true);

  const pendingItemsStorage = localStorage.getItem("pendingItems");
  const completedItemsStorage = localStorage.getItem("completedItems");

  const [pendingItems, setPendingItems] = useState(
    JSON.parse(pendingItemsStorage!) || ([] as Todo[])
  );

  const [completedItems, setCompletedItems] = useState(
    JSON.parse(completedItemsStorage!) || ([] as Todo[])
  );

  useEffect(() => {
    if (pending) {
      if (pendingItemsStorage && pendingItemsStorage.length > 0) {
        setPendingItems(JSON.parse(pendingItemsStorage));
      } else {
        setPendingItems([]);
      }
    } else {
      if (completedItemsStorage && completedItemsStorage.length > 0) {
        setCompletedItems(JSON.parse(completedItemsStorage));
      } else {
        setCompletedItems([]);
      }
    }
  }, [
    pending,
    count,
    changed,
    completedItemsStorage,
    pendingItemsStorage,
    deletedItem,
  ]);

  return (
    <div className="list-todo">
      <ListTodoNav pending={pending} setPending={setPending} />
      {pending &&
        (pendingItems.length > 0 ? (
          <div className="pending-todo">
            <ListGroup
              items={pendingItems}
              deletedItem={deletedItem}
              setDeletedItem={setDeletedItem}
              changed={changed}
              setChanged={setChanged}
              setCount={setCount}
              displayAlert={displayAlert}
              setDisplayAlert={setDisplayAlert}
            />
          </div>
        ) : (
          <div className="pending-todo">
            <h1> No Pending tasks </h1>
          </div>
        ))}

      {!pending &&
        (completedItems.length > 0 ? (
          <div className="completed-todo">
            <ListGroup
              items={completedItems}
              deletedItem={deletedItem}
              setDeletedItem={setDeletedItem}
              changed={changed}
              setChanged={setChanged}
              setCount={setCount}
              displayAlert={displayAlert}
              setDisplayAlert={setDisplayAlert}
            />
          </div>
        ) : (
          <div className="completed-todo">
            <h1> No Finished tasks </h1>
          </div>
        ))}
    </div>
  );
};

export default ListTODO;
