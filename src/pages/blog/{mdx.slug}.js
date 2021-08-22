import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx' //hightlight-line

const BlogPost = ({ data }) => { //hightlight-line
  return (
    // {highlight-start}
    <Layout pageTitle={data.mdx.frontmatter.title}>       
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
    // {highlight-end}
  )
}

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
// hightlight-end


export default BlogPost
