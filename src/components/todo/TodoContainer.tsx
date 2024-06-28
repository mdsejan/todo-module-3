import { useAppSelector } from "../../redux/hook";
import AddTodoModl from "./AddTodoModl";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModl />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {!todos ? (
            <p>There is no task pending</p>
          ) : (
            todos.map((item) => <TodoCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
