/* eslint-disable react/prop-types */
import UserItem from "./UserItem";
import "./UsersItemList.css";

const UsersItemList = ({ users }) => {
  if (users.length === 0) return <div>UsersNotFound</div>;
  const usersList = users.map((user, index) => {
    return (
      <UserItem
        key={user.id}
        id={user.id}
        name={user.name}
        email={user.email}
        imgUrl={user.imgUrl}
        count={user.count}
        animateTime={index * 150}
      />
    );
  });
  return <ul className="users-list">{usersList}</ul>;
};
export default UsersItemList;
