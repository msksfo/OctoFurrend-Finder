# OctoFurrend Finder

## Project Description

OctoFurrend Finder uses the Github Search API to help you find users on Github. Functionality includes the following:

- You can search for users and see a paginated list of results.
- You can navigate through the next and previous pages of the paginated results.
- You can see the total count of search results.
- You can see notable information for each search result, such as the description, profile picture, count of followers/following, and more.
- You can select a search result and be taken to the applicable page on Github.

I am using Gatsby as the static site generator, and Netlify for deployment. You can see the live site [here](https://octofurrend-finder.netlify.app).

## Getting Started

- clone or download the repo
- cd into your project directory and install all project dependencies with `npm install`
- run `npm start` to start the development server
- the site is now live at http://localhost:8000

## Usage

- Enter a name or username into the name input field. Click 'pounce' (submit) to get the list of results.
- A maximum of 20 results will be displayed. If the total number results is more than 20, you can navigate through the pages via the buttons underneath the list of results.
- For each returned result, you can click 'Details' to get further information about that user.

## Credits

- User information obtained from the [Github Search API](https://developer.github.com/v3/search)
- Patterned gradient background by [Gradient Magic](https://www.gradientmagic.com/collection/lightbg/gradient/1584621486136)

## About Gatsby

The full documentation for Gatsby can be found on their website [here](https://www.gatsbyjs.org)
