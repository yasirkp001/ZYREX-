import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">ZYREX</div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Offers</a>
        <a href="#">Contact</a>
      </nav>

      <div className="nav-actions">
        <button className="login-btn">Login</button>
        <button className="cart-btn">Cart</button>
      </div>
    </header>
  );
};

export default Navbar;
