import React from "react"
import { Spring } from "react-spring/renderprops"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="banner">
        <div className="container">
          <div className="row justify-content-center align-items-center">
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
                          <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              class="form-control"
                              id="name"
                              name="name"
                              type="text"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                              class="form-control"
                              id="email"
                              name="email"
                              type="email"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label htmlFor="number">Phone number</label>
                            <input
                              class="form-control"
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
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
