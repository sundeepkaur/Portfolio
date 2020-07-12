import React, { Component } from 'react'

export default class Timeline extends Component {
render() {
return (
        <div>
    <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">highlights</span>
                    <h2 className="colorlib-heading animate-box">Timeline</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="timeline-centered">
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-3">
                                    <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                    <h2>AWS re/Start Cloud, Intern, CANADA <span>June 2020 – Present </span></h2>
                                    <p> • Learning & practicing wide range of skills like Python, XML-JavaScript, Networking, Linux platform, Security and Relational Databases through assigned group projects.<br/>
                                        • Cohort is practicing diverse range of problem solving, critical & conceptual thinking, communications & information management, collaboration and teamwork skills to gain a competitive edge.</p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-4">
                                    <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">  
                                    <h2>Developer (Machine Learning), Intern,CANADA <span> Nov 2019 – Apr 2020 </span></h2>
                                    <p> • Created a self-trained predictive model via Machine Learning that recommends the best employees to a company based of employee’s skills, ratings etc., using content-based filtering. 
                                        <br/> • Implemented the predictive Machine Learning model using content-based filtering approach in Jupyter-Lab using Python programming language along with using MongoDB NoSQL database for data storage.
                                        <br/> • Predictive model generated 75% accurate results and got appreciation for work from sponsors</p>

                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-5">
                                    <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                    <h2>QA Analyst,Contract, CANADA <span> Jan 2018 – Aug 2018 </span></h2>
                                    <p>• Tested Web based Patient portal application thoroughly using different automation and manual testing techniques in an agile environment.<br/>
                                        • Designed automated test scripts from manual regression test cases in Eclipse IDE using Selenium WebDriver with JAVA, JIRA, SQL, Mavens and TestNG framework.<br/>
                                        • Designed and implemented Page Objects model which resulted in reducing duplication of code and amount of work by maximizing reusability and maintainability code of automation scripts</p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-1">
                                    <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                    <h2>QA Analyst,Contract,CANADA <span> Apr 2017 – Nov 2017 </span></h2>
                                    <p>• In an Agile environment performed end to end Android and Web application testing<br/>
                                        • Used Manual Testing Techniques on HTML forms submission/validation using different data sources such as MySQL database, external file such as configuration file/Excel file etc., page load detection and managing dynamically generated alerts within the website. 
                                    </p>
                                </div>
                            </div>
                        </article><article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-3">
                                    <i className="icon-pen2" />
                                </div>
                                <div className="timeline-label">
                                    <h2>QA Analyst, Intern, INDIA <span> Oct 2013 – May 2014 </span></h2>
                                    <p>•	In a group of four members carried out thorough quality check for a Social Networking website where other two team members performed software development and one Project management.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
        )
}
}
