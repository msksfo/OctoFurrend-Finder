import React, { useState } from "react"

import layoutStyles from "../layout/layout.module.css"

// components
import Header from "../header/header"
import Footer from "../footer/footer"
import UserCard from "../userCard/userCard"
import Button from "../button/button.js"

const Layout = ({ children }) => {
  const [users, setUsers] = useState([])
  const [userCount, setUserCount] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [paginationButtons, setPaginationButtons] = useState([])

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = e => {
    // TODO: account for rate limits
    // TODO: encodeURIComponent()

    e.preventDefault()

    // Validate user input by trimming away whitespace
    const user = searchQuery.trim()

    if (!user) return

    const GITHUBURL = "https://api.github.com/search/users?q="
    const LIMIT = "&per_page=20"

    fetchUsers(`${GITHUBURL}${user}${LIMIT}`)

    setSearchQuery("")
    setPaginationButtons([])
  }

  const handleClick = async e => {
    // TODO: can i refactor this to use fetchUsers function?

    // If this is truthy, it means user has already clicked the summary element once. So no need to fetch the same data again.
    let additionalDetails = e.nativeEvent.target.parentElement.parentElement.getAttribute(
      "data-details"
    )

    // Only do something if user is clicking the summary element
    if (!e.target.hasAttribute("data-url")) return

    // Only fetch the first time the summary element is clicked
    if (additionalDetails) return

    const url = e.target.getAttribute("data-url")

    try {
      const response = await fetch(url)
      const data = await response.json()

      let id = data.id

      let updatedUsers = users.map(value => {
        return value.id !== id ? value : { ...data, additionalDetails: true }
      })

      setUsers(updatedUsers)
    } catch (e) {}
  }

  const formatHeaderLinks = str => {
    let linksArray = str.split(",")

    // map over the links array to create a new array of obects, containing the url, and the text for the search result navigation buttons (next, previous, first, last)
    let urlsAndButtonText = linksArray.map(value => {
      let url = value.split(";")[0].trim().slice(1, -1)
      let buttonText = value.split(";")[1].trim().split("=")[1].slice(1, -1)

      return {
        url,
        buttonText,
      }
    })

    // TODO: get the buttons in the right order

    setPaginationButtons(urlsAndButtonText)
  }

  const fetchUsers = async url => {
    // TODO: implement better error handling for different types of errors

    try {
      const response = await fetch(url)

      const headerLinks = response.headers.get("link")

      // if headerLinks is null, there is only one page of results
      if (headerLinks !== null) {
        // otherwise headerLinks is a string, pass it off to be formatted
        formatHeaderLinks(headerLinks)
      }

      const data = await response.json()

      setUserCount(data.total_count)

      setUsers(data.items)
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }

  return (
    <div className={layoutStyles.layoutWrapper}>
      <Header />

      <main>
        {children}
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            Name:
            <input
              onChange={handleChange}
              type="text"
              placeholder="stalk octo-kittens"
              value={searchQuery}
              required
            />
          </label>

          <button>Pounce</button>
        </form>

        <div>
          <p className={layoutStyles.total}>
            {userCount !== null && `Total furrends found: `}
            <span
              style={{
                backgroundColor:
                  userCount == null || userCount === 0 ? "white" : "#d1f3e6",
                padding: "3px",
              }}
            >
              {userCount !== null && userCount}
            </span>
          </p>

          <ul className={layoutStyles.resultsList} onClick={handleClick}>
            {users.length !== 0 &&
              users.map(value => {
                return (
                  <UserCard
                    username={value.login}
                    imageUrl={value.avatar_url}
                    url={value.url}
                    linkToGithub={value.html_url}
                    key={value.id}
                    hasAddedDetails={value.additionalDetails}
                    name={value.name || ""}
                    bio={value.bio || ""}
                    followers={value.followers || ""}
                    following={value.following || ""}
                    company={value.company || ""}
                    email={value.email || ""}
                    location={value.location || ""}
                    blog={value.blog || ""}
                  />
                )
              })}
          </ul>
          <div className={layoutStyles.buttonsWrapper}>
            {paginationButtons.map(value => {
              return (
                <Button
                  key={value.buttonText}
                  text={value.buttonText}
                  getMoreUsers={() => fetchUsers(value.url)}
                ></Button>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
