// components/Servicos.jsx
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Servicos.module.css'

import lashImg   from '../assets/LashLifting.png'
import hairImg   from '../assets/ExtensaoCilios.png'
import makeupImg from '../assets/makeup.png'

export function Servicos() {
  // agora incluindo o campo `id`, que deve bater com a rota
  const services = [
    {
      id: 'lash-lifting',
      src: lashImg,
      title: 'Lash Lifting & Design',
      desc: 'Realce natural com curvatura e definição dos fios, sem precisar de extensão.'
    },
    {
      id: 'hair-styling',
      src: hairImg,
      title: 'Hair Styling',
      desc: 'Alisamento, modelagem e finalização com técnicas que valorizam seu tipo de cabelo.'
    },
    {
      id: 'makeup-studio',
      src: makeupImg,
      title: 'Makeup Studio Look',
      desc: 'Realce sua beleza com uma maquiagem sob medida para cada ocasião.'
    },
    {
      id: 'lash-lifting2',
      src: lashImg,
      title: 'Lash Lifting & Design',
      desc: 'Realce natural com curvatura e definição dos fios, sem precisar de extensão.'
    },
    {
      id: 'hair-styling2',
      src: hairImg,
      title: 'Hair Styling',
      desc: 'Alisamento, modelagem e finalização com técnicas que valorizam seu tipo de cabelo.'
    },
    {
      id: 'makeup-studio2',
      src: makeupImg,
      title: 'Makeup Studio Look',
      desc: 'Realce sua beleza com uma maquiagem sob medida para cada ocasião.'
    },
  ]

  const containerRef = useRef(null)

  function scrollNext() {
    const c = containerRef.current
    const gap = parseInt(getComputedStyle(c).gap)
    const step = c.firstChild.offsetWidth + gap
    if (c.scrollLeft + c.clientWidth >= c.scrollWidth - 1) {
      c.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      c.scrollBy({ left: step, behavior: 'smooth' })
    }
  }

  function scrollPrev() {
    const c = containerRef.current
    const gap = parseInt(getComputedStyle(c).gap)
    const step = c.firstChild.offsetWidth + gap
    if (c.scrollLeft <= 1) {
      c.scrollTo({ left: c.scrollWidth, behavior: 'smooth' })
    } else {
      c.scrollBy({ left: -step, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>
        Como podemos te deixar ainda mais bonita:
      </h2>

      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowLeft}
          onClick={scrollPrev}
          aria-label="Anterior"
        >‹</button>

        <div className={styles.viewport}>
          <div className={styles.cardsContainer} ref={containerRef}>
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={`/servicos/${s.id}`}
                className={styles.cardService}
              >
                <img src={s.src} alt={s.title} />
                <div className={styles.info}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button
          className={styles.arrowRight}
          onClick={scrollNext}
          aria-label="Próximo"
        >›</button>
      </div>
    </section>
  )
}