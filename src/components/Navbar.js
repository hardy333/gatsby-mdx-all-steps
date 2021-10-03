import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Navbar = () => {
  const data = useStaticQuery(query)
  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", gap: 5 }}>
        <li key="home">
          <Link to="/">Home</Link>
        </li>
        {data.allMdx.nodes.map(node => {
          return (
            <li key={node.slug}>
              <Link to={`/${node.slug}`}>{node.slug}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar

const query = graphql`
  {
    allMdx {
      nodes {
        slug
      }
    }
  }
`
