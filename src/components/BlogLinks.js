import React from 'react';
import blogData from '../data/blogPosts.json'

const BlogLinks = () => (
    <section className="blog-set">
        <div className="centered-content">
            <h2>What We've Been Writing</h2>
        </div>
        <div className="container">
            <div className="blog-set__blog-posts">
                {
                    blogData.map(blogPost => (
                        <div key={blogPost.id} className="article-card">
                            <div className="article-card__image-wrapper">
                                <img className="article-card__image" src={blogPost.image} alt=""/>
                            </div>
                            <h5>{blogPost.title}</h5>
                            <div dangerouslySetInnerHTML={{__html: blogPost.body}}/>
                            <div>
                                <div className="article-card__image">
                                    <img src={blogPost.author.image} alt=""/>
                                </div>
                                <div className="cite-author">
                                    <p>{blogPost.author.name}</p>
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
