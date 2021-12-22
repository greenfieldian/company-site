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
                <h3 className="article-header leading-6 hover:underline">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>
                <div className="mt-3 text-xs text-dark-gray flex items-center">
                    <time className="mr-5">{article.postDate}</time>
                    <div className="relative flex items-center p-1 bg-background-gray rounded">
                        <span className="absolute w-1.5 h-1.5 block bg-blue rounded-full"></span>
                        <p className="ml-3">{article.category.name}</p>
                    </div>
                </div>
                <div className="mt-4 font-light">
                    <p>{article.subtitle.subtitle}</p>
                </div>
                <div className="flex items-center mt-5">
                    <div className="mr-3.5">
                        <img src={article.author.avatar.file.url} className="h-8 w-8"/>
                    </div>
                    <div className="text-xs">
                        <strong>{article.author.name}</strong>{', '}
                        <span>{article.author.jobDescription}</span>
                    </div>
                </div>
            </div>

        </div>
    </article>

)