import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from "react-scrolling-nav";
import Carousel from './Carousel';
import Main from './Main';
import Connect from './Connect';


class Navbar extends Component {
  render() {

    const navbarItems = [
      {
        label: "Main",
        target: "item-1"
      },
      {
        label: "Projects",
        target: "item-2"
      },
      {
        label: "About",
        target: "item-3"
      },
      {
        label: "Contact",
        target: "item-4"
      }
    ];
    return (
      <div className="Navbar">
    <NavBar items={navbarItems} offset={-80} duration={700} navWidth={150} height={70} delay={0} />
        {/* <div className="container"> */}
          <ElementsWrapper items={navbarItems}>
            <div name="item-1" className="item">
            <div className="container">
             <h1 className="Title">Nick Zamiatin</h1>
             <h1>Software Developer</h1>
             <h2>Software Developer</h2>
             </div>
            </div>
            <div name="item-2" className="item" >
              <Carousel />
            </div>
            <div name="item-3" className="item">
             <Main />
            </div>
            <div name="item-4" className="item">
             <Connect />
            </div>

          </ElementsWrapper>
        {/* </div> */}

        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav> */}
      </div>
    );
  }
}

export default Navbar;