import { Todo } from "../interfaces/Todo";
import ListGroupItem from "./ListGroupItem";

interface Props {
  items: Todo[];
  changed: boolean;
  deletedItem: Todo;
  setDeletedItem: (item: Todo) => void;
  setChanged: (changed: boolean) => void;
  setCount: (count: number) => void;
  displayAlert: boolean;
  setDisplayAlert: (displayAlert: boolean) => void;
}

const ListGroup = ({
  items,
  changed,
  deletedItem,
  setDeletedItem,
  setCount,
  setChanged,
  displayAlert,
  setDisplayAlert,
}: Props) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <ListGroupItem
            deletedItem={deletedItem}
            keyValue={item.key}
            key={item.key}
            title={item.title}
            description={item.description}
            date={new Date(item.deadline)}
            finishedOn={
              item.finishedOn ? new Date(item.finishedOn).toDateString() : ""
            }
            isPending={item.isPending}
            changed={changed}
            setChanged={setChanged}
            setCount={setCount}
            setDeletedItem={setDeletedItem}
            displayAlert={displayAlert}
            setDisplayAlert={setDisplayAlert}
          />
        );
      })}
    </ul>
  );
};

export default ListGroup;
