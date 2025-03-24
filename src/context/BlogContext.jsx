import React, { createContext, useState, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('blogPosts');
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    // Guardar publicaciones en localStorage cuando cambia el estado
    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    }, [posts]);

    // Agregar una nueva publicación
    const addPost = (post) => {
        const newPost = {
            ...post,
            id: `post-${Date.now()}`,
            date: new Date().toISOString(),
        };
        setPosts([newPost, ...posts]);
        return newPost.id;
    };

    // Obtener una publicación por ID
    const getPostById = (id) => {
        return posts.find(post => post.id === id);
    };

    return (
        <BlogContext.Provider value={{ posts, addPost, getPostById }}>
            {children}
        </BlogContext.Provider>
    );
};