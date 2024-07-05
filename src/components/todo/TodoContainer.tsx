import { useGetTodosQuery } from "../../redux/api/api";
// import { useAppSelector } from "../../redux/hook";
import AddTodoModl from "./AddTodoModl";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  //* From Local state
  // const { todos } = useAppSelector((state) => state.todos);

  //* From server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);

  // console.log(todos);

  if (isLoading) {
    return <p>Loading....</p>;
  }

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
            todos?.data?.map((item: TTodoCardProps) => (
              <TodoCard key={item._id} {...item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
