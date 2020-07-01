import React from 'react';
import './Home.css';
import CountUp from 'react-countup';
import image14 from '../../../assets/images/HomePage/image14.jpg';
import image2 from '../../../assets/images/HomePage/image2.jpg';
import stormwater from '../../../assets/images/HomePage/stormwater.jpg';
import image0 from '../../../assets/images/HomePage/image0.jpeg';
import image12 from '../../../assets/images/HomePage/image12.jpg';
import image13 from '../../../assets/images/HomePage/image13.jpg';
import image15 from '../../../assets/images/HomePage/construction.jpg';
import image19 from '../../../assets/images/HomePage/image19.jpg';
import waterTreatment from '../../../assets/images/HomePage/waterTreatment.jpg';
import digplanthire from '../../../assets/images/HomePage/digplanthire.jpg';
import bridgeImage from '../../../assets/images/HomePage/bridgeImage.jpg';
import housingImage from '../../../assets/images/HomePage/housingImage.jpg';
import infrastructure from '../../../assets/images/HomePage/infrastructure.jpg'


const Home = () => {
    return (
        <div className="content">
            <div id="wrapper" className="banner">
                <h1 className="landing-page">
                    We innovate advanced civils technologies that empower infrasctrure producers with an exceptional quality engineering solutions.<br></br>
                    <button className='btn btn-warning'>Get in touch today</button>
                </h1>
            </div>
            <div class="main">
                <div class="row">
                    <div class="col-sm-6">
                        <h3 className="about-section">About Us</h3>
                        <p>ADITEP CIVILS (PTY) Ltd is a multidisciplinary firm, leader in Civil Engineering offering consulting, construction and plant hire services in the public and private sector. The company is focusing and striving to provide job opportunities and contributing in creating better living conditions for SADC countries and Africa in general.
                        ADITEP CIVILS (PTY) Ltd has been in construction for the past 5 years and has completed projects that encompass the full spectrum of civil engineering services. These include road and stormwater, water and sewer reticulation, infrastructure development, water and waste water treatment works.
                        Our teams are dynamic, skilled with a very good experience in all facets of civil engineering construction. We take pride in delivering successful projects on time, within budget and to the highest quality standards.
                        We have a large plant holding that ensures capacity and continuity of all projects, from small to large. A rigorous company-wide training regime not only ensures quality at all levels, but effectively up-skills and uplifts our staff, local population and sub-contractors. Our clients include governments, local authorities, corporate groups and property developers.</p>
                        <button className='btn btn-warning'>Read more</button>
                    </div>
                    <div class="col-sm-6 other">
                    </div>
                </div>
            </div>
            <div class="main">
                <h2 className="service">Our Services</h2>
                <p>ADITEP CIVILS (PTY) Ltd growth has been a remarkable one. It was established as a firm offering "traditional" consulting services in the fields of civil, structural, Site investigation and feasibility study, Compilation of Business Plan, 
                Design and Tender Procurement Process, Site Monitoring and Project Management.
                The company is specialized in Design, Project Management and Construction of Civil and Structural works particularly in the following fields:
                </p>
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={stormwater} /></div>
                            <div class="card_content">
                                <h6 class="card_title">Road and Stormwater</h6>
                                <p class="card_text">ADITEP CIVILS (PTY) Ltd offers the full range of civil engineering services, from large-scale earthworks and infrastructure projects, to resident developments, including Road and stormwater, Water and Sewer Reticulation.</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={image13} /></div>
                            <div class="card_content">
                                <h6 class="card_title">Road surfacing/Asphalt paving</h6>
                                <p class="card_text">As a multifaceted company in the field of seals, asphalting and road rehabilitation. We regard ourselves as an efficient company striving to be the leader in our field.
                                 We deliver quality work on time and within specification.</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={image15} alt='image'/></div>
                            <div class="card_content">
                                <h6 class="card_title">Construction</h6>
                                <p class="card_text">The Company has been involved in the construction of several civil projects such as:
                                Road and Storm Water Construction Projects, Road Rehabilitation Projects, Water and Sewer Pump Stations, Low Cost Housing.</p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={image0} alt='image'/></div>
                            <div class="card_content">
                                <h6 class="card_title">Consulting projects & Management</h6>
                                <p class="card_text">ADITEP CIVILS (PTY) Ltd has been working collectively with Nakeni, one of the civil company in the country and best of all time, ensuring the best quality delivery of work while constantly focusing to perform well-detailed engineering services.
                                </p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={digplanthire} alt='image'/></div>
                            <div class="card_content">
                                <h6 class="card_title">Dig B Plant Hire</h6>
                                <p class="card_text">ADITEP CIVILS (PTY) Ltd is a multifaceted company in the field of seals, asphalting and road rehabilitation.
                                We regard ourselves as an efficient company striving to be the leader in our field. We deliver quality work on time and within specification.
                                </p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={waterTreatment} alt='image' style={{width: '200%'}}/></div>
                            <div class="card_content">
                                <h6 class="card_title">Water and Waste Water Treatment works</h6>
                                <p class="card_text">ADITEP CIVILS (PTY) Ltd is a multifaceted company in the field of seals, asphalting and road rehabilitation.
                                We regard ourselves as an efficient company striving to be the leader in our field. We deliver quality work on time and within specification.
                                </p>
                                <button class="btn card_btn">Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <h2 className="project-section">Projects</h2>
            <div className='countup-section'>
                <div class="row">
                    <div class="col-md-3">
                        <strong><CountUp end={2015} duration={5} /></strong>
                        <h6>Year Established</h6>
                    </div>
                    <div class="col-md-3 col-md-offset-2">
                        <strong><CountUp start={500} end={16} duration={5} /></strong>
                        <h6>Years Combined Experience</h6>
                    </div>
                    <div class="col-md-3 col-md-offset-2">
                        <strong><CountUp start={500} end={25} duration={5} /></strong>
                        <h6>Projects Completed</h6>
                    </div>
                    <div class="col-md-3 col-md-offset-2">
                        <strong><CountUp start={500} end={54} duration={5} /></strong>
                        <h6>Social Responsibility Projects</h6>
                    </div>
                </div>
            </div>
            <div className="slider">
                <figure>
                    <img src={image14} />
                    <img src={image13} />
                    <img src={image2} />
                    <img src={image0} />
                    <img src={image12} />
                </figure>
            </div>
            &nbsp;
            <div class="row">
                <div class="col-sm-4">
                    <figure>
                        <div class="thumbnail">
                            <div>Civil</div>
                            <img src={bridgeImage} />
                        </div>
                        <figcaption>The Civil Service Group falls under the Civil, Water, Bridges, Roads and Rail Business Unit and has a number of operational Design Centres in many of the ADITEP CIVILS (PTY) Ltd Civils offices.</figcaption>
                    </figure>
                </div>
                <div class="col-sm-4">
                    <figure>
                        <div class="thumbnail">
                            <div>Construction</div>
                            <img src={housingImage} />
                        </div>
                        <figcaption>Implementation of bucket eradication programme in the Free State Province South Afirca.
                           <br></br>
                            <button style={{margin: '20px 200px'}}>View all projects</button>
                        </figcaption>
                    </figure>
                </div>
                <div class="col-sm-4">
                    <figure>
                        <div class="thumbnail">
                            <div>Management</div>
                            <img src={infrastructure} />
                        </div>
                        <figcaption>Construction and Rehabilitation of Sealing and Fog Spray for road between Vrede and Kliprivier.</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Home;