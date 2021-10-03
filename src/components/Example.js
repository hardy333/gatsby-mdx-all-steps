import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/okaidia"

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = meta => {
  if (!RE.test(meta)) {
    return () => false
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(v => parseInt(v, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  }
}

function Example(props) {
  console.log(props.children)
  const shouldHighlightLine = calculateLinesToHighlight(
    props.children.props.metastring
  )

  const className = props.children.props.className
  const language = className.split("-")[1]
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      // theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          // Default

          // <pre className={className} style={style}>
          //   {tokens.map((line, i) => (
          //     <div {...getLineProps({ line, key: i })}>
          //       {line.map((token, key) => (
          //         <span {...getTokenProps({ token, key })} />
          //       ))}
          //     </div>
          //   ))}
          // </pre>

          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }

              return (
                <div {...lineProps}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>

          // Line numbering

          // <pre className={`pre ${className}`} style={style}>
          //   {tokens.map((line, i) => (
          //     <div className="line" key={i} {...getLineProps({ line, key: i })}>
          //       <span className="lineNo">{i + 1}</span>
          //       <span className="lineContent">
          //         {line.map((token, key) => (
          //           <span key={key} {...getTokenProps({ token, key })} />
          //         ))}
          //       </span>
          //     </div>
          //   ))}
          // </pre>
        )
      }}
    </Highlight>
  )
}

export default Example
