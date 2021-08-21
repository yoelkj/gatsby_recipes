import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {

    const {allContentfulRecipe:{nodes:recipes}} = useStaticQuery(query);
    //const recipes = data.allContentfulRecipe.nodes

    return (
        <section className="recipes-container">
            <TagsList recipes={recipes}/>
            <RecipesList recipes={recipes}/>
        </section>
    )
}

export default AllRecipes
