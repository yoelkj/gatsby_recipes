import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'

const tags = ({data}) => {

    const newTags = setupTags(data.allContentfulRecipe.nodes);
    return (
        <Layout>
            <main className="page">
                
                <section className="tags-page">

                    {

                    newTags.map((tag, index)=>{
                        const [text, value] = tag
                        return <Link className="tag" to={`/${text}`} key={index}>
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
