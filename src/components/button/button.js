import React from "react"
import buttonStyles from "../button/button.module.css"

const Button = props => {
  return (
    <button className={buttonStyles.moreUsers} onClick={props.getMoreUsers}>
      {props.text}
    </button>
  )
}

export default Button
