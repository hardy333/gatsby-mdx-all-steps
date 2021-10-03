const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  const postTemplate = path.resolve(`src/templates/post-template.js`)

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
