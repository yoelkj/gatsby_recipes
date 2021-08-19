import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const about = () => {
    return (
        <Layout>

            <main className="page">
                
                <section className="about-page">
                    
                    <article>
                        <h2>About page</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/contact" className="btn">Contact now</Link>
                    </article>


                    <StaticImage 
                        src="../assets/images/about.jpeg"
                        alt="About main image"
                        className="about-img"
                        palceholder="blurred"
                    />
                </section>
            </main>


        </Layout>
    )
}

export default about
