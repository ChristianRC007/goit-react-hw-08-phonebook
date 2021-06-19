function UserMenu({ avatar, email }) {
  console.log(avatar);
  return (
    <div>
      <span>{email}</span>
      <button type="button">Logout</button>
    </div>
  );
}

export default UserMenu;
