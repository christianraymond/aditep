import React, { Component } from "react";
import logo from '../../assets/images/aditep-logo.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './NavigationMenu.css'


class NavigationMenu extends React.Component {
  render() {
    return (
      <div>
        <header>
        <FaPhoneAlt /><span>+27 78 460 1958</span>&nbsp;
         <FaEnvelope /><span> info@aditep.com</span> &nbsp;
         <FaFacebook/>&nbsp;
          <FaTwitter/>&nbsp;
          <FaLinkedin/>
        </header>
        <nav role="navigation">
          <ul class="top-nav menu clearfix">
            <li>
              <img src={logo} style={{ width: '50px' }} />
            </li>
            <li class="menu-item">
              <a href="/#">Home</a>
            </li>
            <li class="menu-item">
              <a href="/">About us</a>
              <ul class="sub-menu">
                <li class="menu-item">
                  <a href="/our-vision">Our vision</a>
                </li>
                <li class="menu-item">
                  <a href="/who-we-are">Who we are</a>
                </li>
                <li class="menu-item">
                  <a href="/oru-mission">Our mission</a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="/#">Services</a>
              <ul class="sub-menu">
                <li class="menu-item">
                  <a href="/#">Plant Hire</a>
                </li>
                <li class="menu-item">
                  <a href="/#">Construction</a>
                </li>
                <li class="menu-item">
                  <a href="/#">Herb Services</a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="/#">Projects</a>
              <ul class="sub-menu">
                <li class="menu-item">
                  <a href="/#">Consulting Projects</a>
                </li>
                <li class="menu-item">
                  <a href="/#">Construction Projects</a>
                </li>
                <li class="menu-item">
                  <a href="/#">Project Management</a>
                </li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="/#">Training</a>
            </li>
            <li class="menu-item">
              <a href="/#">Contact us</a>
            </li>
          </ul>
          <div className="handle">Menu</div>
        </nav>
        {/* <nav>
          <ul>
            <li>
              <img src={logo} style={{ width: '110px' }} />
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
              <ul>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
              </ul>
            </li>
            <li>
              <a href='/services'>Services</a>
              <ul>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
              </ul>
            </li>
            <li>
              <a href='/projects'>Projects</a>
              <ul>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
                <li><a href="#">Submenu</a></li>
              </ul>
            </li>
            <li>
              <a href='/training'>Training</a>
            </li>
            <li className="nav__menu-item">
              <a href='/contact'>Contact-us</a>
            </li>
          </ul>
          <div className="handle">Menu</div>
        </nav> */}
      </div>
    )
  }
}
class Submenu extends React.Component {
  render() {
    return (
      <ul className="submenu">
        <li className="submenu">
          <a>Who we are</a>
        </li>
        <li className="submenu-">
          <a>Our mission</a>
        </li>
        <li className="submenu">
          <a>Our vision</a>
        </li>
      </ul>
    )
  }
}

class Submenu1 extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Construction</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Plant hire</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Herb service</a>
        </li>
      </ul>
    )
  }
}
class Submenu2 extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Consulting</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Projects&Management</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Construction</a>
        </li>
      </ul>
    )
  }
}

export default NavigationMenu



