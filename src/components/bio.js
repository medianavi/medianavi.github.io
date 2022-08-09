/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

const Bio = ({author}) => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const authorImage = "../images/" + author + ".png";
  return (
    <div className="bio">
      <img className="bio-avatar" src={authorImage} width="50" height="50" alt="" />
      <p>
        작성자 <strong>{author}</strong>
      </p>
    </div>
  )
}

export default Bio
