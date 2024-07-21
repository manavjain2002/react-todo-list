import { Todo } from "../interfaces/Todo";

interface Props {
  keyValue: number;
  title: string;
  description: string;
  date: Date;
  isPending: boolean;
  changed: boolean;
  deletedItem: Todo;
  setDeletedItem: (item: Todo) => void;
  setCount: (count: number) => void;
  setChanged: (changed: boolean) => void;
  displayAlert: boolean;
  setDisplayAlert: (displayAlert: boolean) => void;
}

const ListGroupItem = ({
  title,
  description,
  date,
  isPending,
  keyValue,
  changed,
  setDeletedItem,
  setChanged,
  setDisplayAlert,
}: Props) => {
  const handleDelete = (keyValue: number) => {
    const pendingItemsStorage = localStorage.getItem("pendingItems");
    const completedItemsStorage = localStorage.getItem("completedItems");

    const pendingItems: Todo[] =
      pendingItemsStorage && pendingItemsStorage.length > 0
        ? JSON.parse(pendingItemsStorage)
        : [];

    let completedItems: Todo[] =
      completedItemsStorage && completedItemsStorage.length > 0
        ? JSON.parse(completedItemsStorage)
        : [];

    const newPendingItems: Todo[] = [];

    // eslint-disable-next-line
    pendingItems.map((item) => {
      if (item.key === keyValue) {
        setDeletedItem(item);
        completedItems = [
          ...completedItems,
          {
            ...item,
            isPending: false,
          },
        ];
      } else {
        newPendingItems.push(item);
      }
    });

    localStorage.setItem("pendingItems", JSON.stringify(newPendingItems));
    localStorage.setItem("completedItems", JSON.stringify(completedItems));

    setChanged(!changed);

    setDisplayAlert(true);

    setTimeout(() => {
      setDisplayAlert(false);
      setDeletedItem({} as Todo);
    }, 5000);
  };

  return (
    <li className="list-group-item">
      <div className="list-item">
        <div className="list-item-description">
          <div className="list-title">
            <b>{title}</b>
          </div>
          <div className="list-description">{description}</div>
          <div className="list-date">Finish By: {date.toDateString()}</div>
        </div>
        {isPending && (
          <div className="list-item-btn">
            <button
              className="list-item-btn-delete"
              onClick={() => handleDelete(keyValue)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default ListGroupItem;
