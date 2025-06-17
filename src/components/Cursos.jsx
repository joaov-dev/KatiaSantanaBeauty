// Cursos.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cursos.module.css'

import automaquiagem   from '../assets/cursosImg/automaquiagem.png'
import maquiagemProfissional   from '../assets/cursosImg/maquiagemProfissional.png'
import alongamentoCilios   from '../assets/cursosImg/alongamentoCilios.png'
import alongamentoCilios2   from '../assets/cursosImg/alogamentoCilios2.png'
import micropigmentacao   from '../assets/cursosImg/micropigmentacao.png'
import micropigmentacao2   from '../assets/cursosImg/micropigmentacao2.png'
import manicure   from '../assets/cursosImg/manicure.png'
import alongamento  from '../assets/cursosImg/alongamento.png'


export function Cursos() {
  const cursos = [
    {
      id: 'automaquiagem',
      src: automaquiagem,
      title: 'Automaquiagem',
      desc: 'Descubra como realçar sua beleza com técnicas profissionais aplicadas por você mesma!'
    },
    {
      id: 'maquiagemProfissional',
      src: maquiagemProfissional,
      title: 'Maquiagem Profissional',
      desc: 'Transforme sua paixão por maquiagem em uma carreira! Este curso é voltado para quem deseja atuar como maquiador(a) profissional ou se especializar ainda mais.'
    },
    {
      id: 'alongamentoCiliosIniciante',
      src: alongamentoCilios,
      title: 'Alongamento de Cílios Iniciante',
      desc: 'Ideal para quem está entrando no universo do embelezamento do olhar.'
    },
    {
      id: 'alongamentoCiliosAvancado',
      src: alongamentoCilios2,
      title: 'Alongamento de Cílios Avançado',
      desc: 'Aperfeiçoe suas habilidades e domine técnicas mais sofisticadas! Indicado para profissionais que já trabalham com extensão de cílios.'
    },
    {
      id: 'micropigmentacaoIniciante',
      src: micropigmentacao,
      title: 'Micropigmentação Iniciante',
      desc: 'Entre para o mundo da beleza com uma das técnicas mais requisitadas do mercado. Este curso é perfeito para iniciantes que desejam começar uma nova profissão.'
    },
    {
      id: 'micropigmentacaoAvancado',
      src: micropigmentacao2,
      title: 'Micropigmentação Avançado',
      desc: 'Indicado para profissionais que desejam evoluir nas técnicas e oferecer serviços ainda mais personalizados.'
    },
    {
      id: 'manicureTradicional',
      src: manicure,
      title: 'Manicure Tradicional',
      desc: 'Comece sua carreira com uma formação completa em manicure tradicional. Indicado para iniciantes ou quem deseja profissionalizar seu atendimento.'
    },
    {
      id: 'alongamentoUnhas',
      src: alongamento,
      title: 'Alongamento de Unhas',
      desc: 'Comece sua carreira com uma formação completa em manicure tradicional. Indicado para iniciantes ou quem deseja profissionalizar seu atendimento.'
    },
    
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