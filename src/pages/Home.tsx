import { useState } from "react";
import users from "../users.json";
import posts from "../posts.json";

export default function Home() {
  const [allUsers, setAllUsers] = useState(users);
  const [usersPosts, setUsersPosts] = useState(posts);

  return (
    <div>{
      allUsers.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.title}</h4>
            <h2>{user.firstName}</h2>
            <h3>{user.lastName}</h3>
            <img src={ user.picture } alt={ `${user.firstName} photo` }  />
          </div>
        );
      })
    }</div>
  );
}
