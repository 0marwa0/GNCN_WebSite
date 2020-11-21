import React from "react";
import user1 from "./user1.jpg";
import user2 from "./images/user6.jpg";
import user3 from "./images/user8.jpg";
import Navbar from "./Navbar";
const data = [
  {
    img: user1,
    name: "Remma",
    info:
      "I primarily responsible for diagnosing  illnesses and diseases. the Doctor will provide care to each patient. The ideal candidate will have some prior experience as a primary care provider performing routine examinations, offering medical advice to patients and working with other specialized professionals to make sure their patients are receiving the most comprehensive and attentive care",
  },
  {
    img: user2,
    name: "Marwa",
    info:
      "I primarily responsible for diagnosing  illnesses and diseases. the Doctor will provide care to each patient. The ideal candidate will have some prior experience as a primary care provider performing routine examinations, offering medical advice to patients and working with other specialized professionals to make sure their patients are receiving the most comprehensive and attentive care",
  },
  {
    img: user3,
    name: "Asam",
    info:
      "I primarily responsible for diagnosing  illnesses and diseases. the Doctor will provide care to each patient. The ideal candidate will have some prior experience as a primary care provider performing routine examinations, offering medical advice to patients and working with other specialized professionals to make sure their patients are receiving the most comprehensive and attentive care",
  },
];
class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.img} height="250px" />
        <div className="card-body">
          <h2>{this.props.name}</h2>
          <hr />
          <h2>{this.props.title}</h2>
          <p>{this.props.info}</p>
          <h5>{this.props.author}</h5>
        </div>
      </div>
    );
  }
}

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <h1 style={{ textAlign: "center" }}>Our Doctors </h1>
        <hr style={{ width: "60px", backgroundColor: "blue" }} />
        <div className="cards">
          {data.map((item, i) => {
            return (
              <Card
                info={item.info}
                img={item.img}
                name={item.name}
                author=""
                title="Doctor"
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default index;
