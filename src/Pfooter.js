import "./style.css";
import { Link } from "react-router-dom";
function Pfooter() {
  return (
    <footer className="pages-footer">
      <Link to="/contact">
        <div className="contact-us">
          <p>Get a Quote Now!</p>
        </div>
      </Link>
    </footer>
  );
}
export default Pfooter;
