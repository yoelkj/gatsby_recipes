import React from 'react'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'

import SEO from "../components/SEO"


const TagTemplate = ({data, pageContext:{tag}}) => {

    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
            <SEO title={tag} description={`Tag page ${tag}`}/>
            <main className="page">
                <h2>{tag}</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes}/>
                </div>
            </main>
            
        </Layout>
    )
}

export const query = graphql`
    query getRecipeByTag($tag:String) {
        allContentfulRecipe(
        filter: {content: {tags: {eq: $tag } } }
        sort: {fields: title}
        ) {
        nodes {
            id
            title
            cookTime
            featured
            prepTime
            image {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
        }
        }
    }
`

export default TagTemplate
