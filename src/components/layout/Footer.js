import React from "react"

const Footer = () => {
  return (
    <div
      id="footer"
      className="py-5 text-white"
      style={{ backgroundColor: "#37474f" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center mx-auto" data-aos="fade-up">
            <h2 className="title">
              Subscribe
              <br />
              <span>to Our NewsLetter</span>
            </h2>
            <form className="mt-3 mt-md-5">
              <div className="form-row">
                <div className="form-group col-md-8">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="inputEmail4"
                  />
                </div>
                <div className="form-group col-md-4">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block rounded-0"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
