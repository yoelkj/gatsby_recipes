import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import slugify from 'slugify'

import SEO from "../components/SEO"

const RecipeTemplate = ({data}) => {
    
    const { title, image, cookTime, content, prepTime, servings, description: {description}} = data.contentfulRecipe;
    
    const pathToImage = getImage(image);
    const {tags, instructions, ingredients, tools} = content;
    
    return (

      
      <Layout>
          <SEO title={title} description={description}/>
          <main className="page">
              <div className="recipe-page">
                  
                  <section className="recipe-hero">
                      <GatsbyImage image={pathToImage}
                                  alt={title}
                                  className="about-img"/>
                      <article className="recipe-info">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        {/* Icons */}
                        <div className="recipe-icons">

                          <article>
                            <BsClock/>
                            <h5>Prep time</h5>
                            <p>{prepTime} min.</p>
                          </article>
                          <article>
                            <BsClockHistory/>
                            <h5>Cook time</h5>
                            <p>{cookTime} min.</p>
                          </article>

                          <article>
                            <BsPeople/>
                            <h5>Servings</h5>
                            <p>{servings}</p>
                          </article>

                        </div>
                        {/* Tags */}
                        <div className="recipe-tags">
                          Tags : {tags.map((tag, index)=>{
                              const tagSlug = slugify(tag, {lower:true})
                              return <Link key={index} to={`/tags/${tagSlug}`}>{tag}</Link>
                          })}
                        </div>
                      </article>
                  </section>

                  <section className="recipe-content">
                        <article>
                            <h4>Instructions</h4>
                            {
                            instructions.map((item, index)=>{
                                return <div className="single-instruction" key={index}>
                                  <header>

                                    <p>Step: {index + 1}</p>
                                    <div></div>
                                    
                                  </header>

                                  <p>{item}</p>
                                </div>
                            })
                            }
                        </article>
                        <article className="second-column">
                          <div>
                            <h4>Ingredients</h4>
                              {
                              ingredients.map((item, index)=>{
                                  return <p className="single-ingredient" key={index}>
                                    
                                      {item}

                                  </p>
                              })
                              }
                          </div>

                          <div>
                            <h4>Tools</h4>
                              {
                              tools.map((item, index)=>{
                                  return <p className="single-tool" key={index}>
                                    
                                      {item}

                                  </p>
                              })
                              }
                          </div>

                        </article>
                  </section> 


              </div>
              
          </main>
      </Layout>
        
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
