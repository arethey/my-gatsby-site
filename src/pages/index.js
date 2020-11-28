import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <form
      name="contact-form"
      netlify
      // method="post"
      // data-netlify="true"
      // data-netlify-honeypot="bot-field"
    >
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          name="name"
          placeholder="Your name"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          name="email"
          placeholder="Your email"
          type="email"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <br />
        <textarea id="message" name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default IndexPage
