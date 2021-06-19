function UserMenu({ avatar, email, onLogout }) {
  return (
    <div>
      <span>{email}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
