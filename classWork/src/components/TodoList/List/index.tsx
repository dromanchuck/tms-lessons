import { Item } from "../Item";

const generateUniqId = () => {
  return "_" + Math.random().toString(16).slice(2);
};

const todos = [
  { text: "Test", id: generateUniqId() },
  { text: "Test1", id: generateUniqId() },
  { text: "Test2", id: generateUniqId() },
  { text: "Test3", id: generateUniqId() },
  { text: "Test3", id: generateUniqId() },
  { text: "Test3", id: generateUniqId() },
];

export const TodoList = () => {
  return (
    <div>
      {todos.map((item) => {
        return <Item key={item.id} text={item.text} onClickRemove={() => {}} />;
      })}
    </div>
  );
};
