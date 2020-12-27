import './App.scss';
import thumb from './assets/thumb.png';

import React, { useState, useEffect } from 'react';


function Header() {
  return (
      <div className="top-bar grid-x grid-padding-x">
        <div className="cell small-12 medium-3"><span>My Company</span></div>
        <div className="cell small-12 medium-9">
          <ul className="dropdown menu float-right vertical medium-horizontal" id="my-menu" data-dropdown-menu>
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">About</a>
              {/* <ul class="menu">
                <li>Other Page</li>
                <li>Other Page</li>
                <li>Other Page</li>
              </ul> */}
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

  )
}

function ImageContent() {
  return (
    <div className="grid-x grid-margin-x grid-margin-y small-up-2 medium-up-4 large-up-6">
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
      <div className="cell">
        <img src={thumb} alt=""></img>
      </div>
    </div>
  )
}

function Form() {
  return (
          <form>
            <div className="grid-x">
              <div className="cell">
                <h4>Fill out our form</h4>
              </div>
            </div>
              <div className="grid-x grid-margin-x">
                <div className="cell small-12 medium-6">
                    <label> First Name
                      <input type="text"></input>
                    </label>
                </div>
                <div className="cell small-12 medium-6">
                    <label> Last Name
                      <input type="text"></input>
                    </label>
                </div>
              </div>
              <div className="grid-x">
                <div className="cell small-12">
                  <label> Your Message
                      <textarea></textarea>
                  </label>
                </div>
              </div>

              <div className="grid-x">
                <div className="small-12 columns">
                  <fieldset className="fieldset">
                    <legend> When should we contact you?</legend>
                    <input id="contact1" type="radio" value="morning"/><label htmlFor="contact1">Morning</label>
                    <input id="contact2" type="radio" value="evening"/><label htmlFor="contact2">Evening</label>
                  </fieldset>

                {/* <p>My switch question?</p>
                <div className="switch" data-toggle="myToggleAnim myToggleAnim2">
                  <input type="checkbox" className="switch-input" id="mySwitch"></input>
                  <label className="switch-paddle" htmlFor="mySwitch">
                    <span className="show-for-sr">My Switch Option</span>
                    <span className="switch-active" aria-hidden="true">Yes</span>
                    <span className="switch-inactive" aria-hidden="true">No</span>
                  </label>
                </div>

                <div data-toggler data-animate="fade-in fade-out" id="myToggleAnim">
                  <p><small>If your switch is off, you can't...</small></p>
                </div>

                <div data-toggler data-animate="fade-in fade-out" id="myToggleAnim2">
                  <p><small>If your switch is off, you can't...</small></p>
                </div>
                   */}
                <input type="submit" className="button expanded" value="Contact us"></input>
                </div>
              </div>
          </form>
  )
}

function App() {

  return (
    <div className="small-collapse medium-uncollapse">
      <Header></Header>
      <div className="grid-x grid-padding-x grid-container">
        <div className="cell small-12 medium-6 large-9 is-animating">
          <div id="animateMain">
            <h1>My title</h1>
            <h3 className="subheader">My slightly less important heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis. Vestibulum fringilla varius est, et vehicula nisl ornare eu. Quisque vitae viverra dui. Sed odio dui, congue nec sagittis eget, eleifend at magna. Integer volutpat consequat turpis, vitae lacinia risus efficitur at. Sed et tortor tristique, pharetra magna ac, pulvinar leo. Donec dictum sollicitudin arcu, sit amet luctus leo blandit ut. Fusce vulputate, risus sed ultricies volutpat, magna dolor hendrerit diam, at gravida sem turpis in ipsum. Donec sed porta justo. Mauris vel mi interdum, accumsan felis ut, sagittis orci. Quisque eget quam ut lacus tincidunt bibendum quis imperdiet metus. Phasellus rutrum molestie augue, at molestie ex. Nam eget euismod justo, in pharetra lorem. Quisque rhoncus enim at efficitur pulvinar. Nunc id diam efficitur, interdum turpis quis, lobortis risus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis. Vestibulum fringilla varius est, et vehicula nisl ornare eu. Quisque vitae viverra dui. Sed odio dui, congue nec sagittis eget, eleifend at magna. Integer volutpat consequat turpis, vitae lacinia risus efficitur at. Sed et tortor tristique, pharetra magna ac, pulvinar leo. Donec dictum sollicitudin arcu, sit amet luctus leo blandit ut. Fusce vulputate, risus sed ultricies volutpat, magna dolor hendrerit diam, at gravida sem turpis in ipsum. Donec sed porta justo. Mauris vel mi interdum, accumsan felis ut, sagittis orci. Quisque eget quam ut lacus tincidunt bibendum quis imperdiet metus. Phasellus rutrum molestie augue, at molestie ex. Nam eget euismod justo, in pharetra lorem. Quisque rhoncus enim at efficitur pulvinar. Nunc id diam efficitur, interdum turpis quis, lobortis risus.
            </p>
          </div>

          <div className="grid-x">
            <div className="cell small-12 medium-6 large-3">
              <a href="www.google.com" className="button expanded">Order Now</a>
            </div>
            <div className="cell small-12 medium-6 large-3  large-offset-6">
              <a href="www.google.com" className="button hollow expanded">Learn More</a>
            </div>
          </div>
        {/* <ImageContent></ImageContent> */}
        <hr></hr>
        <Form></Form>
        </div>
        <div className="cell small-12 medium-6 large-3" style={{backgroundColor: '#efefef'}}>
          <h3><a data-toggle="sidebar=menu">Important Topic</a></h3>
          <ul data-toggler="custom-class" data-animate="hinge-in-from-top fade-out">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li><a href="#">One more</a> Item</li>
          </ul>

          <div className="callout" data-closable="hinge-out-from-top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus orci sit amet diam rutrum, ut finibus nunc iaculis.</p>
            <button type="button" className="button alert" data-close>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
