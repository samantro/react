const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src="https://as1.ftcdn.net/jpg/08/29/90/88/1000_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg" alt="Logo" />
      </div>
      <div className="link-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;