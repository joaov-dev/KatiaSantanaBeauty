// src/components/Admin.jsx
import React, { useState, useEffect } from 'react'
import styles      from './Admin.module.css'
import katiaAvatar from '../assets/katia.png'

export function Admin() {
  const [contentText, setContentText] = useState('')
  const [posts, setPosts]             = useState([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)
  const [submitting, setSubmitting]   = useState(false)

  const defaultAuthor = {
    avatarUrl: katiaAvatar,
    name:      'Katia Santana',
    role:      'Esteticista & Empreendedora'
  }

  // Base URL da API (em .env ou fallback para localhost)
  const apiBase = 'https://katiasantanbeautyapi-production.up.railway.app/api/'

  // carrega lista de posts ao montar
  useEffect(() => {
    fetchPosts()
  }, [])

  function fetchPosts() {
    setLoading(true)
    setError(null)
    fetch(`${apiBase}posts`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        const formatted = data.map(p => ({
          ...p,
          author: defaultAuthor,
          content: typeof p.content === 'string'
            ? p.content
                .split('\n')
                .map(l => l.trim())
                .filter(l => l)
                .map(l => ({ type: 'paragraph', content: l }))
            : p.content
        }))
        setPosts(formatted)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!contentText.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      const resp = await fetch(`${apiBase}posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: contentText.trim() })
      })
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      setContentText('')
      await fetchPosts()
    } catch (err) {
      setError('Falha ao publicar: ' + err.message)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Confirmar exclusão deste post?')) return
    setError(null)
    try {
      const resp = await fetch(`${apiBase}/posts/${id}`, {
        method: 'DELETE'
      })
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      setPosts(prev => prev.filter(p => p.id !== id))
    } catch (err) {
      setError('Falha ao excluir: ' + err.message)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>Novo Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nome:
          <input type="text" value="Katia Santana" disabled />
        </label>

        <label>
          Função:
          <input type="text" value="Esteticista & Empreendedora" disabled />
        </label>

        <label>
          Conteúdo (uma linha = um parágrafo):
          <textarea
            rows={6}
            value={contentText}
            onChange={e => setContentText(e.target.value)}
            required
          />
        </label>

        {error && <div className={styles.error}>{error}</div>}

        <button type="submit" disabled={submitting}>
          {submitting ? 'Publicando…' : 'Publicar'}
        </button>
      </form>

      <hr />

      <h2>Posts existentes</h2>

      {loading ? (
        <p>Carregando posts…</p>
      ) : (
        <ul className={styles.postList}>
          {posts.map(post => (
            <li key={post.id} className={styles.postItem}>
              <div>
                <small>{new Date(post.publishedAt).toLocaleString()}</small>
                <p>{post.content[0]?.content.slice(0, 50)}…</p>
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(post.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}