import Link from "next/link";
import Script from "next/script";
const SideBars = ({ children }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div
            className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
            style={{ backgroundColor: "#3330E4" }}
          >
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white text-center min-vh-100">
              <a
                href="#"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className=" text-center fs-5 d-none d-sm-inline ">
                  ToDo APP
                </span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link href="/datatodo">
                    <a className="nav-link align-middle px-0 text-white ">
                      <i class="bi bi-archive "></i>
                      <span className="ms-2 d-none d-sm-inline text-white">
                        Semua List
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/createtodo">
                    <a className="nav-link align-middle px-0 text-white ">
                      <i class="bi bi-file-plus"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-white">
                        Tambah List
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};

export default SideBars;
