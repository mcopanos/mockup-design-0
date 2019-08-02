import React from 'react';
import blogData from '../data/blogPosts.json'

const BlogLinks = () => (
    <section className="blog-set">
        <div className="centered-content">
            <h2>What We've Been Writing</h2>
        </div>
        <div className="blog-set__container">
            <div className="blog-set__blog-posts">
                {
                    blogData.map(blogPost => (
                        <div key={blogPost.id} className="article-card">
                            <div className="article-card__wrapper">
                                <div className="article-card__image-wrapper">
                                    <img className="article-card__image" src={blogPost.image} alt="blog post"/>
                                </div>
                                <div className="article-card__content-wrapper">
                                    <div>
                                        <h5 className="article-card__header">{blogPost.title}</h5>
                                        <div className="article-card__statement" dangerouslySetInnerHTML={{__html: blogPost.body}}/>
                                    </div>
                                    <div className="article-card__author-wrapper">
                                        <img className="article-card__author-image" src={blogPost.author.image} alt="Author"/>
                                        <p className="cite-author">{blogPost.author.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
);

export default BlogLinks;
