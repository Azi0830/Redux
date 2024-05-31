import { Button, Card, Checkbox, Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./redux/slices/todosSlices";
import { useRef } from "react";

function App() {
  const ref = useRef();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.todo);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[30px] mt-4">
        <div className="flex">
          <input ref={ref} />
          <Button
            onClick={() => {
              dispatch(
                addTodo({
                  text: ref.current.value,
                })
              );
            }}
          >
            Add
          </Button>
        </div>
        {data.map(({ id, text, completed }) => (
          <Card key={id} className="w-[200px]">
            <Paragraph className={`${completed ? "bg-green-400" : ""}`}>
              {text}
            </Paragraph>
            <Checkbox
              onClick={() => dispatch(toggleTodo({ id }))}
              checked={completed}
            />
            <Button onClick={() => dispatch(removeTodo({ id }))} danger>
              delete
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
