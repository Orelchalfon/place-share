import { Avatar, Card } from "@mui/material";
import { Link } from "react-router-dom";


import "./UserItem.css";

const UserItem = (user) => {
  console.log("animateTime",user.animateTime);

  return (
    //the error message appears to be the animatedTime props 
    <li style={{"--d":`${user.animateTime}ms`}} className="user-item">
      <Card className="user-item__content">
        <Link to={`/${user.id}/places`}>
          <div className="user-item__img">
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={user.imgUrl}
              alt={user.name}
            />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3>
              {user.count} {user.count > 1 ? "places" : "place"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default UserItem;
