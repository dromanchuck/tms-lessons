import "./App.css";
import { AllPosts } from "./components/AllPosts";
import { Button } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { EmojiList } from "./components/Emoji/EmojiList";
import { PostList } from "./components/PostsList";
import { TodoList } from "./components/TodoList/List";
import { Username } from "./components/User";
import { emojies, posts } from "./mocks";

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
    <>
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
      {/* <TodoList /> */}
      {/* <PostList posts={posts} /> */}

      {/* <EmojiList emojies={emojies} /> */}
      <AllPosts />
    </>
  );
}

export default App;
