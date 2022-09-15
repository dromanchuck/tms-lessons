import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        setUser(value);
      });
  }, []);

  return user ? (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.username}</h3>
    </div>
  ) : null;
};
