import React from "react"
import userCardStyles from "../userCard/userCard.module.css"

const UserCard = props => {
  return (
    <li
      className={userCardStyles.cardWrapper}
      data-details={props.hasAddedDetails}
    >
      <img
        src={props.imageUrl}
        alt={props.name}
        className={userCardStyles.profilePic}
      />
      <p className={userCardStyles.username}>@{props.username}</p>

      <details className={userCardStyles.detailsWrapper}>
        <summary data-url={props.url}>Details</summary>
        <div className={userCardStyles.details}>
          <p className={userCardStyles.name}>{props.name}</p>
          <p className={userCardStyles.bio}>{props.bio}</p>
          <p>Followers: {props.followers}</p>
          <p>Following: {props.following}</p>
          {props.company && <p>Company: {props.company}</p>}
          {props.location && <p>Location: {props.location}</p>}
          {props.email && <p>email: {props.email}</p>}
          <a href={props.blog} target="_blank noopener noreferrer">
            {props.blog}
          </a>
          <a href={props.linkToGithub} target="_blank noopener noreferrer">
            {`View @${props.username} on Github`}
          </a>
        </div>
      </details>
    </li>
  )
}

export default UserCard
