// src/components/CursosDescription.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './CursosDescription.module.css'

import automaquiagem   from '../assets/cursosImg/automaquiagem.png'
import maquiagemProfissional   from '../assets/cursosImg/maquiagemProfissional.png'
import alongamentoCilios   from '../assets/cursosImg/alongamentoCilios.png'
import alongamentoCilios2   from '../assets/cursosImg/alogamentoCilios2.png'
import micropigmentacao   from '../assets/cursosImg/micropigmentacao.png'
import micropigmentacao2  from '../assets/cursosImg/micropigmentacao2.png'
import manicure  from '../assets/cursosImg/manicure.png'
import alongamento  from '../assets/cursosImg/alongamento.png'


const COURSES = [
  {
    id: 'automaquiagem',
    img: automaquiagem,
    title: 'Automaquiagem',
    text: `Descubra como realçar sua beleza com técnicas profissionais aplicadas por você mesma! O curso de automaquiagem da Katia Santana Beauty é ideal para quem deseja aprender a se maquiar no dia a dia e em ocasiões especiais, com praticidade e sofisticação.

Você vai aprender sobre:
• Preparação correta da pele
• Escolha e aplicação de base, corretivo, contorno e iluminador
• Técnicas de olhos esfumados
• Delineado, aplicação de cílios postiços e finalização
• Dicas de produtos ideais para seu tipo de pele

Indicado para todas as idades e níveis de experiência. Saia do curso com mais autoconfiança, sabendo valorizar sua beleza natural com maquiagem feita por você!
`
  },
  {
    id: 'maquiagemProfissional',
    img: maquiagemProfissional,
    title: 'Maquiagem Profissional',
    text: `Transforme sua paixão por maquiagem em uma carreira! Este curso é voltado para quem deseja atuar como maquiador(a) profissional ou se especializar ainda mais. Com uma abordagem completa, do básico ao avançado, você vai dominar técnicas utilizadas por profissionais do mercado de beleza.

Conteúdo programático:
• Visagismo e análise de rosto
• Correção de pele para diferentes tonalidades e tipos
• Esfumados clássicos e modernos
• Noivas, debutantes e maquiagem para eventos
• Técnicas HD, fotografia e maquiagem resistente à luz
• Prática com modelos reais
`
  },
  {
    id: 'alongamentoCiliosIniciante',
    img: alongamentoCilios,
    title: 'Alongamento de Cílios Iniciante',
    text: `Ideal para quem está entrando no universo do embelezamento do olhar. No curso iniciante de alongamento de cílios, você vai aprender passo a passo as técnicas básicas e essenciais para começar a trabalhar na área, com segurança e resultados encantadores.
Você vai aprender:
• Higienização e biossegurança
• Mapeamento dos olhos
• Técnica Fio a Fio
• Isolamento correto dos fios
• Cuidados pós-aplicação
• Remoção e manutenção

Curso 100% prático, com acompanhamento personalizado. Perfeito para dar seus primeiros passos com confiança!`
  },
  {
    id: 'alongamentoCiliosAvancado',
    img: alongamentoCilios2,
    title: 'Alongamento de Cílios Avançado',
    text: `Aperfeiçoe suas habilidades e domine técnicas mais sofisticadas! Indicado para profissionais que já trabalham com extensão de cílios, este curso aborda estilos avançados que proporcionam volume, formato e efeito diferenciados.

O que você vai aprender:
• Técnicas: Volume Russo, Egípcio, Fox e Híbrido
• Mapeamento avançado e personalização para cada formato de olho
• Fixação duradoura e fios leves
• Fotografia de cílios para divulgação profissional
• Correções e manutenção em cílios mal aplicados

Eleve a qualidade do seu atendimento e valorize ainda mais o seu serviço!
`
  },
  {
    id: 'micropigmentacaoIniciante',
    img: micropigmentacao,
    title: 'Micropigmentação Iniciante',
    text: `Entre para o mundo da beleza com uma das técnicas mais requisitadas do mercado. Este curso é perfeito para iniciantes que desejam começar uma nova profissão.

Você aprenderá:
• Anatomia da pele e pigmentologia básica
• Design de sobrancelhas com simetria facial
• Técnica fio a fio com dermógrafo e tebori
• Biossegurança e assepsia no procedimento
• Cuidados pré e pós-procedimento
• Prática em pele sintética e modelo real
`
  },
  {
    id: 'micropigmentacaoAvancado',
    img: micropigmentacao2,
    title: 'Micropigmentação Avançado',
    text: `Indicado para profissionais que desejam evoluir nas técnicas e oferecer serviços ainda mais personalizados.

Neste curso você aprofundará:
• Técnicas Shadow, Ombré, Powder e Híbrida
• Pigmentologia avançada e neutralização de cores
• Correção de micropigmentações antigas
• Aplicação em diferentes fototipos de pele
• Desenho artístico e simetria avançada
• Marketing e fotografia para divulgação profissional

Com foco em diferenciação no mercado, o curso proporciona domínio técnico e artístico para encantar cada cliente.`
  },
  {
    id: 'manicureTradicional',
    img: manicure,
    title: 'Manicure Tradicional',
    text: `Comece sua carreira com uma formação completa em manicure tradicional. Indicado para iniciantes ou quem deseja profissionalizar seu atendimento.

Conteúdo do curso:
• Anatomia das unhas e cuidados com a saúde
• Remoção de cutículas de forma segura
• Lixamento, esmaltação clássica e decorativa
• Técnicas de esterilização e biossegurança
• Atendimento ao cliente e postura profissional
• Tendências em cores e finalizações

Curso com muita prática e apoio individualizado. Comece a atender com segurança e estilo!
`
  },
  {
    id: 'alongamentoUnhas',
    img: alongamento,
    title: 'Alongamento de Unhas',
    text: `Seja uma especialista em unhas longas, resistentes e com acabamento impecável. O curso de alongamento é ideal para quem deseja oferecer um serviço valorizado e lucrativo.

Você aprenderá:
• Tipos de alongamento: gel, tips, molde F1
• Preparação correta da unha natural
• Estrutura, curvatura e acabamento perfeito
• Esmaltação em gel e nail art básica
• Manutenção, remoção e reparos
• Dicas para atendimento e fidelização de clientes

Domine as técnicas mais pedidas e aumente seus ganhos no setor da beleza.`
  },
]

export function CursosDescription() {
  const { id } = useParams()
  const navigate = useNavigate()
  const course = COURSES.find(c => c.id === id)

  if (!course) {
    navigate('/cursos', { replace: true })
    return null
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Entenda mais sobre o curso:
      </h2>

      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img src={course.img} alt={course.title} />
        </div>

        <div className={styles.textBox}>
          <h3 className={styles.title}>{course.title}</h3>
          <div className={styles.description}>
            {course.text
              .trim()
              .split('\n')                            // divide em cada newline split
              .map(line => line.trim())               // remove espaços extras map
              .filter(line => line.length > 0)        // ignora linhas em branco filter
              .map((line, i) => <p key={i}>{line}</p>)// renderiza cada parte num <p> citehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
            }
          </div>
          <a
            href="https://wa.me/message/4VZHU4YYLZ35I1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.interest}
          >
            Tenho interesse
          </a>
        </div>
      </div>
    </section>
  )
}