import { Link } from "gatsby"
import React from "react"
import { Spring } from "react-spring/renderprops"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

import room1 from "../images/room1.jpg"
import room2 from "../images/room2.jpg"
import room3 from "../images/room3.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <section id="home" className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto text-center text-white">
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                {props => (
                  <div style={props}>
                    <h1 className="text-uppercase">La Playa Estrella</h1>
                    <p>An escape to your own oasis</p>
                  </div>
                )}
              </Spring>
            </div>
          </div>

          {/* <div className="row justify-content-center align-items-center">
            <div className="col-md-8 text-white">
              <Spring
                from={{ opacity: 0, marginTop: -100 }}
                to={{ opacity: 1, marginTop: 0 }}
              >
                {props => (
                  <div style={props}>
                    <h1>Find the perfect house for you & change your life!</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                )}
              </Spring>
            </div>
            <div className="col-md-4">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 500, duration: 500 }}
              >
                {props => (
                  <div style={props}>
                    <div className="bg-white pt-3">
                      <h4 className="text-center">
                        Don't miss the opportunity
                      </h4>
                      <form
                        name="contact-form"
                        method="post"
                        data-netlify="true"
                      >
                        <div className="p-3">
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact-form"
                          />
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              className="form-control"
                              id="name"
                              name="name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              className="form-control"
                              id="email"
                              name="email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="number">Phone number</label>
                            <input
                              className="form-control"
                              id="number"
                              name="number"
                              type="number"
                              required
                            />
                          </div>
                        </div>
                        <div className="contact-action py-2">
                          <button className="btn border-0 btn-block text-uppercase">
                            submit now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Spring>
            </div>
          </div> */}
        </div>
      </section>
      <section id="room">
        <div className="container py-5">
          <div className="row" data-aos="fade-right">
            <div className="col-md-6">
              <h3 className="title">Room & Suites</h3>
              <p>
                Our rooms offer the traditional and serene atmosphere where
                guests will experience a peaceful vacation, a perfect
                destination for families and romantic holidays.{" "}
              </p>
            </div>
          </div>
          <div className="row mt-3" data-aos="zoom-in">
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room2} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Deluxe Garden View
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room2} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Superior Garden View
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room3} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Superior Beach View
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room3} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Deluxe Garden View
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room2} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Superior Garden View
                </div>
              </Link>
            </div>
            <div className="col-md-4 mb-3 room-card">
              <Link to="/">
                <img src={room3} alt="Snow" className="img-fluid shadow" />
                <div className="title room-card__bottom-left">
                  Superior Beach View
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-3 mb-md-0" data-aos="fade-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4906589149373!2d123.79549451472396!3d11.151260955212337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a862a77a22a381%3A0xa4e85f7289b86971!2sLa%20Playa%20Estrella%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1607005890658!5m2!1sen!2sph"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="col-md-4" data-aos="fade-left">
              <div className="mb-3">
                <h3 className="title">Contact Us</h3>
                <small className="text-muted">MOBILE: (+63) 977 837 7128</small>
                <br />
                <small className="text-muted">LANDLINE: (032) 316 - 7614</small>
                <br />
                <small className="text-muted">
                  EMAIL: laplayabeachresort@gmail.com
                </small>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control rounded-0"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-block text-white rounded-0"
                  style={{ backgroundColor: "#37474f" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container py-5">
          <h3 className="title" data-aos="fade-right">
            traveller's experience
          </h3>
          <div
            data-aos="zoom-out"
            className="bg-white shadow my-5"
            style={{ minHeight: 400 }}
          ></div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
