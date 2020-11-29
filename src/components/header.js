import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

const Header = ({ siteTitle }) => {
  // const [scroll, setScroll] = useState(false)

  // const handleScroll = () => setScroll(window.pageYOffset > 0)

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [handleScroll])

  // let styles = {
  //   background: `rebeccapurple`,
  //   marginBottom: `1.45rem`,
  //   padding: `1.45rem 1.0875rem`,
  //   transition: "all 0.3s",
  // }
  // if (scroll) {
  //   styles = {
  //     ...styles,
  //     position: "fixed",
  //     top: 0,
  //     width: "100%",
  //     background: "#fff",
  //     padding: `.45rem 1.0875rem`,
  //     boxShadow: "0 8px 6px -6px #999",
  //     zIndex: 999,
  //   }
  // }

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      width: "100%",
      background: "#fff",
      padding: `1rem 1.5rem`,
      boxShadow: "0 8px 6px -6px #999",
      zIndex: 999,
    },
  }

  return (
    <header>
      <div style={styles.nav}>
        <Link to="/">{siteTitle}</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
