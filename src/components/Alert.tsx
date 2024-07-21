import { Todo } from "../interfaces/Todo";

interface Props {
  deletedItem: Todo;
  changed: boolean;
  setChanged: (changed: boolean) => void;
  displayAlert: boolean;
  setDisplayAlert: (displayAlert: boolean) => void;
  setDeletedItem: (deletedItem: Todo) => void;
}

const Alert = ({
  deletedItem,
  changed,
  setChanged,
  displayAlert,
  setDisplayAlert,
  setDeletedItem,
}: Props) => {
  const onUndoClick = () => {
    const pendingItemsStorage = localStorage.getItem("pendingItems");
    const completedItemsStorage = localStorage.getItem("completedItems");

    let pendingItems: Todo[] =
      pendingItemsStorage && pendingItemsStorage.length > 0
        ? JSON.parse(pendingItemsStorage)
        : [];

    let completedItems: Todo[] =
      completedItemsStorage && completedItemsStorage.length > 0
        ? JSON.parse(completedItemsStorage)
        : [];

    const newCompletedItems: Todo[] = [];

    // eslint-disable-next-line
    completedItems.map((item) => {
      if (item.key === deletedItem.key) {
        pendingItems = [
          ...pendingItems,
          {
            ...item,
            isPending: true,
            finishedOn: undefined,
          },
        ];
      } else {
        newCompletedItems.push(item);
      }
    });

    localStorage.setItem("pendingItems", JSON.stringify(pendingItems));
    localStorage.setItem("completedItems", JSON.stringify(newCompletedItems));

    setChanged(!changed);
    setDisplayAlert(false);
    setDeletedItem({} as Todo);
  };

  return displayAlert ? (
    <div className="alert alert-warning text-center alert-msg" role="alert">
      Deleting the task. You cannot revert it back. Undo if you want to.{" "}
      <button className="btn btn-danger" onClick={() => onUndoClick()}>
        {" "}
        Undo
      </button>
    </div>
  ) : (
    <div></div>
  );
};

export default Alert;
