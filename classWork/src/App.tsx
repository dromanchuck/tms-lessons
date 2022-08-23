import "./App.css";
import { Button } from "./components/Button";

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
      <Button text="Login" onClick={onClickLogin} />
      <Button text="Sign up" onClick={onClickSignUp} />
      <Button text="Logout" onClick={onClickLogout} />
      {/* <input value={value}></input>
      <Input value="Logo"/> */}
    </div>
  );
}

export default App;
