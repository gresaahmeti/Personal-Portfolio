import "./about.css";
import Me2 from "../../img/me2.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me2} 
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am currently a student (Bachelor in Computer Science and Engineering) at UBT,
         with a great interest in the field of programming.
        </p>
        <p className="a-desc">
        
For me, education has always been a priority because through education we achieve the key to success.
 During my studies I gained a lot of experience in programming,
  also the trainings I attended have made me realize that I am suitable for this direction.
I think I’m a person with great ambitions to work and achieve a lot in life.
 I am quite communicative, I can easily adapt to the working environments , 
 learn very quickly, I also like to be challenged and engaged in many projects, 
 especially those projects that are beyond my knowledge, and I am ready for any kind of activity.

        </p>
      </div>
    </div> 
  );
};

export default About;
