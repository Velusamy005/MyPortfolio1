import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Velusamy A </span>
            from <span className="purple"> Thiruchirappalli.</span>
            I am a versatile professional with expertise in Frontend Web Development, responsive design, and interactive dashboards. My journey includes crafting user-friendly 
            web experiences, analyzing data insights using Power BI.
            <br />
            <br/>
            CONTACT INFO
            <ul>
            <li className="about-activity">
            Email:velu15092003samy@gmail.com
            </li>
            <li className="about-activity">
             Phone:9025137636
            </li>
            <li className="about-activity">
             LinkedIn:<Link to="/velu-samy-a-159c "> /velu-samy-a-159c</Link>
            </li>
            <li className="about-activity">
                Github:
             <Link to="https://github.com/Velusamy005 "> https://github.com/Velusamy005</Link>
            </li>
          </ul>
            <br />
            OTHER ACTIVITIES
          </p>
          <ul>
            <li className="about-activity">
            *Farming the Lands
            </li>
            <li className="about-activity">
            *Playing Cricket
            </li>
            <li className="about-activity">
             *Listening Musics
            </li>
            <li className="about-activity">
             *Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
