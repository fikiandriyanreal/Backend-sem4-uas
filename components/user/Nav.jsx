import Script from "next/script";
import UserById from "./UserById";
const Nav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark shadow-sm h-50"
        style={{ backgroundColor: "#3330E4" }}
      >
        <div className="container-fluid  ">
          <span className="navbar-brand mb-0 h1 ">ToDoList</span>
          <UserById />
        </div>
      </nav>
    </div>
  );
};
<Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
  crossOrigin="anonymous"
></Script>;

export default Nav;
