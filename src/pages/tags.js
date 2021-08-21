import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

import SEO from "../components/SEO"


const tags = ({data}) => {

    const newTags = setupTags(data.allContentfulRecipe.nodes);
    return (
        <Layout>
          <SEO title="Tags" descrition="Tag list"/>
            <main className="page">
                
                <section className="tags-page">

                    {

                    newTags.map((tag, index)=>{
                        const [text, value] = tag
                        const tagSlug = slugify(text, {lower: true});
                        return <Link className="tag" to={`/tags/${tagSlug}`} key={index}>
                            <h5>{text}</h5>
                            <p>{value} recipes</p>
                        </Link> 

                    })

                    }

                </section>
            </main>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default tags
