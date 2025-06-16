// components/Servicos.jsx
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Servicos.module.css'

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

export function Servicos() {
  // agora incluindo o campo `id`, que deve bater com a rota
  const services = [
    {
      id: 'AlongamentodeUnhas',
      src: alongamentoUnhas,
      title: 'Alongamento de Unhas',
      desc: 'Diga adeus às unhas quebradiças e frágeis! É a escolha perfeita para quem quer estar sempre pronta para qualquer ocasião, com unhas belas e resistentes.'
    },
    {
      id: 'BanhodeGel',
      src: BanhoGel,
      title: 'Banho de Gel',
      desc: 'O banho de gel é um tratamento ideal para fortalecer as unhas naturais, promovendo brilho e resistência sem a necessidade de alongamento.'
    },
    {
      id: 'ManicurePedicure',
      src: manicurePedicure,
      title: 'Manicure e Pedicure',
      desc: 'Nossos serviços tradicionais de manicure e pedicure oferecem remoção de cutículas, lixamento, hidratação e esmaltação, com atenção a cada detalhe para garantir conforto, higiene e beleza.'
    }, 
    {
      id: 'SpadosPes',
      src: spadospes,
      title: 'Spa dos Pés',
      desc: 'O Spa dos Pés é um momento de relaxamento completo. O tratamento inclui esfoliação, hidratação profunda, massagem e remoção de calosidades, proporcionando alívio imediato para o cansaço dos pés.'
    },
    {
      id: 'ExtensaodeCilios',
      src: ExtensaoCilios,
      title: 'Extensão de Cílios',
      desc: 'Destaque seu olhar com elegância e praticidade. A extensão de cílios proporciona volume, curvatura e definição, eliminando a necessidade diária de máscara.'
    },
    {
      id: 'BrowLamination',
      src: browLamination,
      title: 'Brow Lamination',
      desc: 'Aposte em sobrancelhas perfeitamente alinhadas com o efeito lifting natural. A Brow Lamination modela os fios para criar volume, definição e simetria, sem a necessidade de maquiagem diária.'
    },
    {
      id: 'MicrobladingMicropigmentação',
      src: microblading,
      title: 'Microblading e Micropigmentação',
      desc: 'Sobrancelhas feitas com arte, técnica e propósito. Através do microblading ou da micropigmentação, desenhamos fios ultrarrealistas e personalizados, corrigindo falhas, preenchendo espaços e definindo o contorno ideal para o seu rosto.'
    },
    {
      id: 'Maquiagem',
      src: maquiagem,
      title: 'Maquiagem',
      desc: 'Beleza sob medida para você. Nossa maquiagem social é feita com produtos de alta performance, respeitando seu estilo e realçando seus traços únicos.'
    },
    {
      id: 'DepilacaoFacial',
      src: depilacaoFacial,
      title: 'Depilação Facial',
      desc: 'Livre-se dos pelos com suavidade e precisão. A depilação facial proporciona pele lisa, macia e com toque sedoso, com técnicas que respeitam a sensibilidade da sua pele.'
    },
    {
      id: 'LimpezadePele',
      src: limpezaPele,
      title: 'Limpeza de Pele',
      desc: 'Para uma pele saudável, fresca e luminosa. A limpeza de pele remove impurezas, cravos e células mortas, desobstruindo os poros e revitalizando o tecido cutâneo.'
    },
    {
      id: 'DesigndeSobrancelhas',
      src: browLamination,
      title: 'Design de Sobrancelhas',
      desc: 'O design de sobrancelhas é feito com atenção ao formato do seu rosto, corrigindo falhas, valorizando seu olhar e realçando sua beleza natural.'
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