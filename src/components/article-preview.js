import React from 'react'
import { Link } from 'gatsby'


export default ({ article }) => (

    <article >
        <div>
            <div className="mb-5">
                <Link to={`/blog/${article.slug}`}>
                    <img src={article.featuredImage.file.url} className="max-h-48 h-48 w-full rounded"/>
                </Link>
            </div>
            <div>
                <h3 className="article-header">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <div>
                    <time>{article.postDate}</time>
                </div>
                <div>
                    <p>{article.subtitle.subtitle}</p>
                </div>
            </div>

        </div>
    </article>

)