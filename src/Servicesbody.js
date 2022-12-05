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
          Website development <span className="emoji">{icon}</span> Graphics
          Design and Branding <span className="emoji">{icon2}</span> Business
          Process Automation <span className="emoji">{icon3}</span> Application
          Security and Consultation <span className="emoji">{icon4}</span>{" "}
        </p>
      </div>
      <div className="marquee">
        <p className="marquee-content-2">
          Mobile App Development <span className="emoji">{icon5}</span>Web
          Application Development <span className="emoji">{icon6}</span>{" "}
          Discovery Enhancement Services <span className="emoji">{icon7}</span>{" "}
          Content Writing/Development <span className="emoji">{icon8}</span>{" "}
        </p>
      </div>
      <button className="btn">Get a quote</button>
    </div>
  );
}

export default Servicebody;
