import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const Error = () => {
    return (
        <Layout>
            <SEO title="404 not found" title="404 not found page"/>

            <main className="error-page">
                <section>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                </section>
            </main>        
        </Layout>
    )    
}

export default Error