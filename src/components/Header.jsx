import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(open => !open)

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.title}>
        <p>KatiaSantana</p>
        <p className={styles.rosa}>Beauty</p>
      </div>

      {/* Navegação desktop */}
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>

      {/* Botão Agende agora (desktop) */}
      <a
        href="https://katiasantanabeauty.gendo.app/#/"
        className={styles.agendamentoDesktop}
      >
        Agende agora
      </a>

      {/* Hamburger (mobile) */}
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre nós</Link>
          <Link to="/cursos" onClick={() => setMenuOpen(false)}>Cursos</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <a
            href="https://katiasantanabeauty.gendo.app/#/"
            className={styles.agendamento}
            onClick={() => setMenuOpen(false)}
          >
            Agende agora
          </a>
        </div>
      )}
    </header>
  )
}