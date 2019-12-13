import * as React from "react";
import kawaiiPanda from "../../assets/images/kawaii-panda.jpg";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Anime from "animejs";
import "../sass/style.scss";

class LandingPageBody extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <div className="banner-wrapper">
            <img
              src={kawaiiPanda}
              alt="kawaii panda"
              className="main-image"
            ></img>
            <h1 className="title">
              <b>NQD Community</b>
            </h1>
          </div>
          <div className="button-zone-wrapper">
            <a>
              <Button variant="contained" color="secondary" className="button">
                <MailOutlineIcon className="button-icon" />
                <b className="button-text">Send Confession</b>
              </Button>
            </a>
            <a>
              <Button variant="contained" color="default" className="button">
                <AccountCircleIcon className="button-icon" />
                <b className="button-text">Login</b>
              </Button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default LandingPageBody;
