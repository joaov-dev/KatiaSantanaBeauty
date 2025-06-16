import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './CursosDescription.module.css'

// importe suas imagens de curso aqui:
import dermaplaningImg   from '../assets/esmaltacao.png'
import browDesignImg     from '../assets/salao.png'
import massageImg        from '../assets/makeup.png'
import makeupMasterImg   from '../assets/makeupGlam.png'

const COURSES = [
  {
    id: 'dermaplaning',
    img: dermaplaningImg,
    title: 'Dermaplaning',
    text: `
Descubra a técnica que remove células mortas e pelos finos, revelando uma pele lisa e radiante.

Durante a sessão, posicionamos cuidadosamente cada fio e aplicamos produtos que garantem 
um acabamento suave, uniforme e altamente iluminado — ideal para todos os tipos de pele.`,
  },
  {
    id: 'design-sobrancelhas',
    img: browDesignImg,
    title: 'Design de Sobrancelhas',
    text: `
Aprenda modelagem, tintura e micropigmentação para sobrancelhas perfeitas e harmônicas ao rosto. 

Inclui técnicas de medição, escolha de cor, desenho e fixação, para um resultado natural 
e de longa duração.`,
  },
  {
    id: 'massoterapia',
    img: massageImg,
    title: 'Massoterapia',
    text: `
Técnicas de massagem relaxante e terapêutica para aliviar tensões e promover bem-estar físico 
e mental.

Você vai dominar manobras de deslizamento, amassamento e liberação miofascial, usando óleos 
e cremes específicos para cada necessidade.`,
  },
  {
    id: 'makeup-masterclass',
    img: makeupMasterImg,
    title: 'Makeup Masterclass',
    text: `
Domine desde a preparação de pele até maquiagens sofisticadas para todas as ocasiões.

O curso inclui contorno, iluminação, aplicação de cílios postiços, olhos esfumados e 
acabamentos com aerógrafo e texturas artísticas.`,
  },
]

export function CursosDescription() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = COURSES.find(c => c.id === id)

  if (!course) {
    // se não encontrar, volta para lista
    navigate('/cursos', { replace: true })
    return null
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Detalhes do Curso
      </h2>

      <div className={styles.content}>
        <div className={styles.imageBox}>
          <img src={course.img} alt={course.title} />
        </div>

        <div className={styles.textBox}>
          <h3 className={styles.title}>{course.title}</h3>
          <div className={styles.description}>
            {course.text.trim().split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className={styles.buttons}>
            <a href="https://wa.me/message/4VZHU4YYLZ35I1" className={styles.interest}>
              Tenho interesse
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}