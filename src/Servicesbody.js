import moonman from "./moonman.png";
const getRandomEmoji = () => {
  const emojis = [
    "🔋",
    "🪫",
    "🔌",
    "💻",
    "🖥",
    "🖨",
    "⌨",
    "🖱",
    "🖲",
    "💽",
    "💾",
    "💿",
    "📀",
    "🧮",
    "🚀",
    "🛸",
  ];

  return emojis[~~(Math.random() * emojis.length)];
};
let icon = getRandomEmoji();
let icon2 = getRandomEmoji();
let icon3 = getRandomEmoji();
let icon4 = getRandomEmoji();
let icon5 = getRandomEmoji();
let icon6 = getRandomEmoji();
let icon7 = getRandomEmoji();
let icon8 = getRandomEmoji();
function Servicebody() {
  return (
    <div id="servicebody">
      <div className="services-header">
        <p>
          Our tech solutions put you on{" "}
          <span className="green-text">The Map.</span>
        </p>
      </div>

      <div className="marquee">
        <p className="marquee-content">
          Website development {icon} Graphics Design and Branding {icon2}{" "}
          Business Process Automation {icon3} Application Security and
          Consultation {icon4}{" "}
        </p>
      </div>
      <div className="marquee">
        <p className="marquee-content-2">
          Mobile App Development {icon5} Web Application Development {icon6}{" "}
          Discovery Enhancement Services {icon7} Content Writing/Development{" "}
          {icon8}{" "}
        </p>
      </div>
      <button className="btn">Get a quote</button>
    </div>
  );
}

export default Servicebody;
