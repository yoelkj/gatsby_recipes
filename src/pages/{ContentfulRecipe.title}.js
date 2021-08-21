import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {BsClockHistory, BsClock, BsPeople} from 'react-icons'

const RecipeTemplate = ({data}) => {
    
    const { title, image, cookTime, content, prepTime, servings, description: {description}} = data.contentfulRecipe;
    
    const pathToImage = getImage(image);
    const {tags, instructions, ingredients, tools} = content;
    
    return (
            <main className="page">
                <div className="recipePage">
                    <h2>{title}</h2>
                </div>
                
            </main>
        
    )
}

export const query = graphql`
  query getSingleRecipe($title:String){
    contentfulRecipe(title: {eq: $title}) {
        id
        title
        prepTime
        content {
          ingredients
          instructions
          tags
          tools
        }
        cookTime
        featured
        description {
          description
        }
        servings
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
  }
}
`

export default RecipeTemplate
