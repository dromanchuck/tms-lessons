import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = fetch("https://jsonplaceholder.typicode.com/users");
    promise
      .then((response) => {
        return response.json();
      })
      .then((values) => {
        setUsers(values);
      });
  }, []);

  const navigateToUser = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      {users.map((item: any) => {
        const clickUser = () => {
          navigateToUser(item.id);
        };

        return (
          <div style={{ border: "1px solid black" }} onClick={clickUser}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
};
