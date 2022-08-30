import "./App.css";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { PostList } from "./components/PostsList";
import { TodoList } from "./components/TodoList/List";
import { Username } from "./components/User";
import { posts } from "./mocks";

function App() {
  const onClickLogin = () => {
    alert("Login");
  };

  const onClickSignUp = () => {
    alert("SignUp");
  };

  const onClickLogout = () => {
    alert("Logout");
  };

  return (
    <div className="App">
      {/* <Button
        text="Login"
        onClick={onClickLogin}
        disabled={true}
        type="primary"
      />
      <Button text="Sign up" onClick={onClickSignUp} type="secondary" />
      <Button text="Logout" onClick={onClickLogout} type="secondary2" /> */}
      {/* <input value={value}></input>
      <Input value="Logo"/> */}
      {/* <Username username="John" isDark={true} /> */}
      {/* <Clicker /> */}
      <TodoList />
      {/* <PostList posts={posts} /> */}
    </div>
  );
}

export default App;
