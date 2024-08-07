import "../styles/navbar.css";
function Navbar() {
  return (
    <>
      <div className="container-fluid my_nav">
        <nav className="navbar mx-5">
          <div className="container-fluid">
            <a className="navbar-brand title">SHOP EASY</a>
            <button className="btn btn-outline-dark">Login</button>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
