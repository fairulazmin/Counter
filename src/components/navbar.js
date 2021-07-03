const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 ">
          Counter<span class="badge bg-primary mx-2">{totalCount}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
