import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Layout from "../components/Layout"

const postTemplate = ({ pageContext, data }) => {
  const image = getImage(
    data.mdx.frontmatter.image.childImageSharp.gatsbyImageData
  )
  return (
    <Layout>
      <div>
        <p>
          This is <strong>{pageContext.slug}</strong> page
        </p>
        {/* <GatsbyImage
          className="img-container"
          image={image}
          alt="sample image"
        /> */}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default postTemplate

export const query = graphql`
  query postTemplateQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      slug
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
