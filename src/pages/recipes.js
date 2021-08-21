import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import TagsList from '../components/TagsList'

import SEO from "../components/SEO"


const recipes = () => {
    return (
        <Layout>
            <SEO title="Recipes" description="Recipe list"/>
            <main className="page">

                <h1>Recipes page</h1>
                <AllRecipes/>

            </main>

            
        </Layout>
    )
}

export default recipes
