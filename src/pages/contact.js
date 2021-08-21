import React, { Component } from 'react'
import Layout from '../components/Layout'

import {graphql } from 'gatsby'

import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"

const contact = ({data:{allContentfulRecipe:{nodes:recipes}}}) => {
    return (
        <Layout>
            <SEO title="Contact" description="Contact page"/>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        
                        <h3>Contact page</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        
                    </article>

                    <article>

                        <form className="form contact-form " action="https://formspree.io/f/mdoypyzd" method="POST">

                            <div className="form-row">
                                <label htmlFor="name">Your name</label>
                                <input type="text" name="name" id="name"/>
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">Your email</label>
                                <input type="text" name="emai" id="email"/>
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">Your message</label>
                                <textarea name="message" id="message"></textarea>

                            </div>

                            <button type="submit" className="btn block">Send</button>

                        </form> 

                    </article>
                </section>
            
                <section className="featured-recipes">
                    <h5>Look the recipes</h5>

                    <RecipesList recipes={recipes}/>
                </section>
            
            </main>

        </Layout>
    )
}

export const query = graphql`
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

export default contact

