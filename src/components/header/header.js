import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../header/header.module.css"
import octocatDetective from "../../images/octocatDetective.png"

const Header = ({ siteTitle }) => (
  <header>
    <img className={headerStyles.inspectocat} src={octocatDetective} />
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
