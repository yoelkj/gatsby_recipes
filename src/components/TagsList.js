import React from 'react'
import setupTags from '../utils/setupTags'
import { Link } from 'gatsby';

const TagsList = ({recipes}) => {
    
    const newTags = setupTags(recipes);
    
    return (
        <div class="tag-container">
            <h4>Recipes</h4>
            <div class="tags-list">
            {
            
                newTags.map((tag, index) => {
                    const [text, value] = tag;
                    
                    return (
                        <Link key={index} to={`/${text}`}>{text} ({value})</Link>
                    )

                })
            
            }
            </div>
        </div>
    )
}

export default TagsList
