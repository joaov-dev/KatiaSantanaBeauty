  // Carrosel.jsx
  import React, { useRef } from 'react'
  import { Card } from './Card'
  import styles from './Carrosel.module.css'

import alongamentoUnhas   from '../assets/alongamentoUnhas.png'
import BanhoGel   from '../assets/BanhoGel.png'
import manicurePedicure from '../assets/manicurePedicure.png'
import spadospes from '../assets/spadospes.png'
import ExtensaoCilios from '../assets/ExtensaoCilios.png'
import browLamination from '../assets/browLamination.png'
import microblading from '../assets/microblading.png'
import maquiagem from '../assets/maquiagem.png'
import depilacaoFacial from '../assets/depilacaoFacial.png'
import limpezaPele from '../assets/limpezaPele.png'
  // importe as outras 3 imagens aqui…

  export function Carrosel() {
    const services = [
      { src: alongamentoUnhas,    title: 'Alongamento de Unhas' },
      { src: BanhoGel,  title: 'Banho de Gel' },
      { src: manicurePedicure,  title: 'Manicure e Pedicure' },
      { src: spadospes,  title: 'Spa dos Pés' },
      { src: ExtensaoCilios,  title: 'Extensão de Cílios' },
      { src: browLamination,    title: 'Brow Lamination' },
      { src: microblading,  title: 'Microblading e Micropigmentação' },
      { src: maquiagem,  title: 'Maquiagem' },
      { src: depilacaoFacial,  title: 'Depilação Facial' },
      { src: limpezaPele,  title: 'Limpeza de Pele' },
      { src: microblading,  title: 'Design de Sobrancelhas' },
    ]
    const containerRef = useRef(null)

    function scrollNext() {
      const container = containerRef.current
      const { scrollLeft, clientWidth, scrollWidth } = container
      // tamanho total de um “passo”: width do primeiro filho + gap
      const gap = parseInt(getComputedStyle(container).gap)
      const cardW = container.firstChild.offsetWidth + gap

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        // wrap to start
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: cardW, behavior: 'smooth' })
      }
    }

    function scrollPrev() {
      const container = containerRef.current
      const gap = parseInt(getComputedStyle(container).gap)
      const cardW = container.firstChild.offsetWidth + gap

      if (container.scrollLeft <= 1) {
        // wrap to end
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: -cardW, behavior: 'smooth' })
      }
    }

    return (
    <div className={styles.carouselWrapper}>
      {/* seta esquerda */}
      <div className={styles.arrowContainer}>
        <button className={styles.arrow} onClick={scrollPrev} aria-label="Anterior">‹</button>
      </div>

      {/* área central com título + carousel */}
      <div className={styles.viewportWrapper}>
        {/* novo título acima do carrossel */}
        <h2 className={styles.heading}>
          Alguns dos nossos serviços oferecidos:
        </h2>

        <div className={styles.viewport}>
          <div className={styles.cardsContainer} ref={containerRef}>
            {services.map((s, i) => (
              <Card key={i} imageSrc={s.src} title={s.title} />
            ))}
          </div>
        </div>
      </div>

      {/* seta direita */}
      <div className={styles.arrowContainer}>
        <button className={styles.arrow} onClick={scrollNext} aria-label="Próximo">›</button>
      </div>
    </div>
  )
  }