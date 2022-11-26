import "./style.css";
import Fulllogo from "./Full with text_animated.svg";
function Overlay() {
  return (
    <div className="overlay">
      <div id="-overlay-img-canvas">
        <img id="overlay-img" src={Fulllogo} />
      </div>
      <h2 id="enter-button">Enter</h2>
    </div>
  );
}
export default Overlay;
