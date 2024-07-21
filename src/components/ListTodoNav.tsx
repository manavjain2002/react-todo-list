interface Props {
  pending: boolean;
  setPending: (pending: boolean) => void;
}

const ListTodoNav = ({ pending, setPending }: Props) => {
  const handleClick = (pending: boolean) => {
    setPending(pending);
  };

  return (
    <div className="todo-nav">
      <div className="pending-tab">
        <button
          onClick={() => handleClick(true)}
          className={pending ? "xyz" : ""}
        >
          Pending
        </button>
      </div>
      <div className="finished-tab">
        <button
          onClick={() => handleClick(false)}
          className={!pending ? "xyz" : ""}
        >
          Finished
        </button>
      </div>
    </div>
  );
};

export default ListTodoNav;
