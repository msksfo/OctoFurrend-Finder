import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../header/header.module.css"
import catDetective from "../../images/catDetective.png"

const Header = ({ siteTitle }) => (
  <header>
    <img
      className={headerStyles.inspectocat}
      src={catDetective}
      alt="Cat Detective"
    />
    <h1 className={headerStyles.title}>OctoFurrend Finder</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
