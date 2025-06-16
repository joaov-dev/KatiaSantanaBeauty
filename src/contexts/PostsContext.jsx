import React, { createContext, useState } from 'react'
import katia from '../assets/katia.png'

export const PostsContext = createContext()

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        avatarUrl: katia,
        name: 'Katia Santana',
        role: 'Esteticista & Empreendedora',
      },
      content: [
        { type: 'paragraph', content: 'Oii gente!' },
        { type: 'paragraph', content: 'Acabei de realizar mais um curso aqui na sede do Sesc Alagoinha. Disponibilizei o material e as fotos desse evento maravilhoso no link abaixo.' },
        { type: 'link',      content: 'https://www.instagram.com/p/DCbzJocuptl/' },
      ],
      publishedAt: new Date('2025-05-02 19:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: katia,
        name: 'Katia Santana',
        role: 'Esteticista & Empreendedora',
      },
      content: [
        { type: 'paragraph', content: 'Olá minhas queridas!' },
        { type: 'paragraph', content: 'Acabei de fazer um novo post no meu insta sobre os benefícios da minha técnica de Lash Lifting! Vão lá dar uma checada.' },
        { type: 'link',      content: 'https://www.instagram.com/p/DCbzJocuptl/' },
      ],
      publishedAt: new Date('2025-05-01 21:00:00'),
    }
  ])

  function addPost(newContent) {
    const newPost = {
      id: Date.now(),
      author: {
        avatarUrl: katia,
        name: 'Katia Santana',
        role: 'Esteticista & Empreendedora',
      },
      content: newContent,
      publishedAt: new Date(),
    }
    setPosts(prev => [newPost, ...prev])
  }

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  )
}