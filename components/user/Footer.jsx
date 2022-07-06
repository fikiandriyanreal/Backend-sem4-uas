import Script from "next/script";
const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start text-white fixed-bottom">
        <div className="text-center p-3" style={{ backgroundColor: "#3330E4" }}>
          © Create By Fiki Andriyan
        </div>
      </footer>
    </div>
  );
};
<Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
  crossOrigin="anonymous"
></Script>;

export default Footer;
