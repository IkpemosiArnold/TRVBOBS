import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  autoplay: true,
  autoPlaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 4000,
  arrows: false,
  pauseOnHover: true,
  swipeToSlide: true,
  Draggable: true,
};

const Teamslider = () => {
  return (
    <Slider {...settings} className="slide-area">
      <div className="slides">
        <div className="body-text">
          <p className="call-out text-center green-text">
            The Justice league is no match for this well-oiled machine!
          </p>
          <p>
            With their super-human intelligence, they can solve any problem that
            comes their way. Our team is always one step ahead of the
            competition, able to anticipate and thwart any obstacle in our path.
            We work tirelessly to create innovative solutions that will make a
            lasting impact on the world. If there's a problem that needs
            solving, you can bet this team will be on it.
          </p>
        </div>
      </div>
      <div>
        <div className="body-text">
          <p className="call-out">
            Farouq Usman
            <span className="green-text"> (TheSovereign Executor)</span>
          </p>
          <p>
            Overseeing all business processes, he is responsible for sourcing
            projects and prospective clients for the team, and he handles
            customer relationships to ensure that our clients are always
            satisfied. A background in real estate sales and a degree in
            Information Technology equips Farouq with a unique perspective and
            valuable skills for client satisfaction.
          </p>
        </div>
      </div>
      <div>
        <div className="body-text">
          <p className="call-out">
            Oyinbobola Owojori
            <span className="green-text"> (TheElder Cyberpath)</span>
          </p>
          <p>
            “Just Bobola” like he always says is regarded as the mastermind
            behind the technical workflow at TheRadar. He manages the technical
            aspects of our projects, discusses with clients to understand their
            needs, develops client requests/projects with extra ideas and
            suggestions, and optimizes our processes. With a diverse background
            in Cybersecurity consulting and a passion for automation, AI,
            computers, and bio-optimization, Bobola relentlessly pursues his
            passion of securely automating and making things easier for
            humankind. "There's always a way to make it better".
          </p>
        </div>
      </div>
      <div>
        <div className="body-text">
          <p className="call-out">
            Arnold Adeyemi
            <span className="green-text"> (Warlock)</span>
          </p>
          <p>
            A self-starter with 4+ years of experience in project management,
            managing projects and programmes in IT, Sustainable Development, and
            Climate Finance. He has on-site and remote experience managing
            projects in Africa, Europe, and the United Kingdom. Currently, He
            exists at the intersection of technology and business, helping
            individuals and businesses creatively solve problems with
            forward-thinking solutions. He enjoys cultivating curiosity about
            different interests in his spare time, and he's been doing that with
            financial modeling, contemporary fantasy, and mimetics in recent
            times.
          </p>
        </div>
      </div>
      <div>
        <div className="body-text">
          <p className="call-out">
            Solomon Ndifereke
            <span className="green-text"> (Tank)</span>
          </p>
          <p>
            Software Engineer with about 4 years experience building amazing
            product (mostly fintech products). Weaves the spells in Backend
            development, Dev-ops, Mobile and Frontend development.
          </p>
        </div>
      </div>
      <div>
        <div className="body-text">
          <p className="call-out">
            Eilya Amin
            <span className="green-text"> (Paladin)</span>
          </p>
          <p>
            A Master of Software Engineering and pursuer of data applications.
            His journey as a programmer started when he decided to change his
            career from a pro athlete to something that would allow him to do
            even greater things. With experience working with numerous
            programming languages he loves to figure out software solutions for
            real life problems and constantly looks forward to developing
            software products that include AI & Data Science. He's also an
            automation addict. Seeing a trend here? Eilya, loves to develop his
            critical thinking and ability to solve algorithmic problems while
            taking on side missions such as content creation, photo shooting &
            photo editing, video editing and hitting the gym. Fortunately, he
            still carries his athlete spirit and loves to hit the gym on regular
            basis.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Teamslider;
