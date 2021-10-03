import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./src/style/main.css"
import Example from "./src/components/Example"

const MyH1 = props => {
  return <h1 style={{ color: "red" }} {...props} />
}
const MyH2 = props => <h1 style={{ color: "green" }} {...props} />

const MyParagraph = props => <p {...props} />

const MyBlockqoute = props => <blockquote className="blockqoute" {...props} />

const components = {
  h1: MyH1,
  p: MyParagraph,
  blockquote: MyBlockqoute,
  h2: MyH2,
  pre: Example,
}

export const wrapRootElement = ({ element }) => {
  return (
    <div className="helo-heloo-lheloooo">
      <MDXProvider components={components}>{element}</MDXProvider>
    </div>
  )
}
