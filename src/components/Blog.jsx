import React, { useEffect, useState } from 'react'
import { Post }          from './Post.jsx'
import { Sidebar }       from './Sidebar.jsx'
import styles            from './Blog.module.css'
import katiaAvatar       from '../assets/katia.png'

export function Blog() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  const defaultAuthor = {
    avatarUrl: katiaAvatar,
    name:      'Katia Santana',
    role:      'Esteticista & Empreendedora'
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/posts')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        const withAuthorAndContentArray = data.map(p => {
          // Converte a string p.content em um array de parágrafos
          const lines = typeof p.content === 'string'
            ? p.content
                .split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0)
                .map(line => ({ type: 'paragraph', content: line }))
            : p.content

          return {
            ...p,
            author: defaultAuthor,
            content: lines
          }
        })
        setPosts(withAuthorAndContentArray)
      })
      .catch(err => {
        console.error('Failed to fetch posts:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <Sidebar />
        <main>Carregando posts…</main>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.error}>
          Erro ao carregar posts: {error}
        </main>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={new Date(post.publishedAt)}
          />
        ))}
      </main>
    </div>
  )
}