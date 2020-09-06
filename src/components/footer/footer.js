import React from "react"
import footerStyles from "../footer/footer.module.css"

const footer = () => {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://tangoechodesign.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TangoEcho Design
        </a>
      </small>
    </footer>
  )
}

export default footer
