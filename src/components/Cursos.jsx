// Cursos.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cursos.module.css'

// imagens de exemplo
import dermaplaningImg   from '../assets/esmaltacao.png'
import browDesignImg     from '../assets/salao.png'
import massageImg        from '../assets/makeup.png'
import makeupMasterImg   from '../assets/makeupGlam.png'

export function Cursos() {
  const cursos = [
    {
      id: 'dermaplaning',
      src: dermaplaningImg,
      title: 'Dermaplaning',
      desc: 'Descubra a técnica que remove células mortas e pelos finos, revelando uma pele lisa e radiante.'
    },
    {
      id: 'design-sobrancelhas',
      src: browDesignImg,
      title: 'Design de Sobrancelhas',
      desc: 'Aprenda modelagem e micropigmentação para sobrancelhas perfeitas e harmônicas ao rosto.'
    },
    {
      id: 'massoterapia',
      src: massageImg,
      title: 'Massoterapia',
      desc: 'Técnicas de massagem relaxante e terapêutica para bem-estar físico e mental.'
    },
    {
      id: 'makeup-masterclass',
      src: makeupMasterImg,
      title: 'Makeup Masterclass',
      desc: 'Domine desde a preparação da pele até maquiagens sofisticadas para todas as ocasiões.'
    },
    // ...adicione mais cursos conforme necessário
  ]

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Venha aprender com a Katia!
      </h1>

      <div className={styles.grid}>
        {cursos.map(c => (
          <div key={c.id} className={styles.card}>
            <img
              src={c.src}
              alt={c.title}
              className={styles.cardImage}
            />
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>{c.title}</h2>
              <p className={styles.cardDesc}>{c.desc}</p>
              <Link
                to={`/cursos/${c.id}`}
                className={styles.cardButton}
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}