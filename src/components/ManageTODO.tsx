import CreateTODO from "./CreateTODO";
import ListTODO from "./ListTODO";
import { Todo } from "../interfaces/Todo";

interface Props {
  deletedItem: Todo;
  changed: boolean;
  setChanged: (changed: boolean) => void;
  displayAlert: boolean;
  setDisplayAlert: (displayAlert: boolean) => void;
  setDeletedItem: (item: Todo) => void;
  count: number;
  setCount: (count: number) => void;
}

const ManageTODO = ({
  deletedItem,
  changed,
  setChanged,
  setDeletedItem,
  displayAlert,
  setDisplayAlert,
  count,
  setCount,
}: Props) => {
  return (
    <div className="todo-manage">
      <CreateTODO count={count} setCount={setCount} />

      <ListTODO
        count={count}
        changed={changed}
        deletedItem={deletedItem}
        setDeletedItem={setDeletedItem}
        setChanged={setChanged}
        setCount={setCount}
        displayAlert={displayAlert}
        setDisplayAlert={setDisplayAlert}
      />
    </div>
  );
};

export default ManageTODO;
