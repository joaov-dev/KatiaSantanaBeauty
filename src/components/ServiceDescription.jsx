// components/ServiceDescription.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './ServiceDescription.module.css'

// importe todas as imagens de serviço aqui:
import lashImg   from '../assets/LashLifting.png'
import hairImg   from '../assets/ExtensaoCilios.png'
import makeupImg from '../assets/makeup.png'

const SERVICES = [
  {
    id: 'lash-lifting',
    img: lashImg,
    title: 'Lash Lifting & Design',
    text: `
Realce a beleza natural do seu olhar com o Lash Lifting & Design, um procedimento moderno e não invasivo que promove curvatura, alongamento e definição aos cílios naturais — sem a necessidade de extensões ou manutenção frequente.

Durante a sessão, os fios são cuidadosamente posicionados e moldados com produtos específicos, respeitando a estrutura dos seus cílios. O resultado é um efeito de “rímel permanente”, com os cílios visivelmente mais levantados, separados e destacados, criando um olhar mais aberto, expressivo e elegante.

O design é finalizado com a tintura dos fios (opcional) e um alinhamento preciso, proporcionando harmonia ao formato dos olhos e um acabamento sofisticado. Tudo isso com total conforto, em um ambiente seguro e higienizado.

**Benefícios:**
- Destaque para os cílios naturais, sem uso diário de máscara ou curvex  
- Procedimento rápido, seguro e indolor  
- Resultado natural e duradouro (até 6 a 8 semanas)  
- Indicado para todos os tipos de cílios, inclusive curtos ou retos
    `
  },
  {
    id: 'hair-styling',
    img: hairImg,
    title: 'Hair Styling',
    text: `
Aprenda técnicas avançadas de modelagem, corte e finalização de penteados. Ideal para quem quer dominar o styling de festas, eventos e noivas.

Durante o curso, você receberá instruções passo a passo sobre:
1. Preparação dos fios (lavagem, hidratação e proteção térmica)  
2. Técnicas de escova modeladora e babyliss  
3. Penteados estruturados e semipresos  
4. Fixação suave e duradoura sem pesar o cabelo  
5. Dicas de produtos profissionais e cuidados pós-evento
    `
  },
  {
    id: 'makeup-studio',
    img: makeupImg,
    title: 'Makeup Studio Look',
    text: `
Desenvolva habilidades completas de maquiagem profissional, do básico ao avançado, com foco em produção para estúdio editorial e social.

Conteúdo programático:
- Preparação de pele e correção de imperfeições  
- Técnicas de contorno, iluminação e blush  
- Olhos esfumados, delineados clássicos e gráficos  
- Aplicação de cílios postiços e acabamento de sobrancelhas  
- Passo a passo de looks para fotos, vídeo e passarela  
- Higiene, organização e montagem de kit profissional
    `
  },
	{
    id: 'lash-lifting2',
    img: lashImg,
    title: 'Lash Lifting & Design',
    text: `
Realce a beleza natural do seu olhar com o Lash Lifting & Design, um procedimento moderno e não invasivo que promove curvatura, alongamento e definição aos cílios naturais — sem a necessidade de extensões ou manutenção frequente.

Durante a sessão, os fios são cuidadosamente posicionados e moldados com produtos específicos, respeitando a estrutura dos seus cílios. O resultado é um efeito de “rímel permanente”, com os cílios visivelmente mais levantados, separados e destacados, criando um olhar mais aberto, expressivo e elegante.

O design é finalizado com a tintura dos fios (opcional) e um alinhamento preciso, proporcionando harmonia ao formato dos olhos e um acabamento sofisticado. Tudo isso com total conforto, em um ambiente seguro e higienizado.

**Benefícios:**
- Destaque para os cílios naturais, sem uso diário de máscara ou curvex  
- Procedimento rápido, seguro e indolor  
- Resultado natural e duradouro (até 6 a 8 semanas)  
- Indicado para todos os tipos de cílios, inclusive curtos ou retos
    `
  },
  {
    id: 'hair-styling2',
    img: hairImg,
    title: 'Hair Styling',
    text: `
Aprenda técnicas avançadas de modelagem, corte e finalização de penteados. Ideal para quem quer dominar o styling de festas, eventos e noivas.

Durante o curso, você receberá instruções passo a passo sobre:
1. Preparação dos fios (lavagem, hidratação e proteção térmica)  
2. Técnicas de escova modeladora e babyliss  
3. Penteados estruturados e semipresos  
4. Fixação suave e duradoura sem pesar o cabelo  
5. Dicas de produtos profissionais e cuidados pós-evento
    `
  },
  {
    id: 'makeup-studio2',
    img: makeupImg,
    title: 'Makeup Studio Look',
    text: `
Desenvolva habilidades completas de maquiagem profissional, do básico ao avançado, com foco em produção para estúdio editorial e social.

Conteúdo programático:
- Preparação de pele e correção de imperfeições  
- Técnicas de contorno, iluminação e blush  
- Olhos esfumados, delineados clássicos e gráficos  
- Aplicação de cílios postiços e acabamento de sobrancelhas  
- Passo a passo de looks para fotos, vídeo e passarela  
- Higiene, organização e montagem de kit profissional
    `
  },
]

export function ServiceDescription() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Encontra o índice e o próprio objeto
  const index = SERVICES.findIndex(s => s.id === id)
  const service = SERVICES[index]

  // Se não encontrar, redireciona de volta
  if (!service) {
    navigate('/servicos', { replace: true })
    return null
  }

  // funções para navegar circularmente pelos serviços
  const prevIdx = (index + SERVICES.length - 1) % SERVICES.length
  const nextIdx = (index + 1) % SERVICES.length

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Como podemos te deixar ainda mais bonita:
      </h2>

      <div className={styles.carousel}>
        <button
          className={styles.arrow}
          onClick={() => navigate(`/servicos/${SERVICES[prevIdx].id}`)}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className={styles.content}>
          <div className={styles.imageBox}>
            <img src={service.img} alt={service.title} />
          </div>
          <div className={styles.textBox}>
            <h3>{service.title}</h3>
            <div className={styles.description}>
              {service.text.split('\n').map((line, i) => (
                line.startsWith('**') ? (
                  <strong key={i}>{line.replace(/\*\*/g,'')}</strong>
                ) : line.match(/^\d\./) ? (
                  <li key={i}>{line.replace(/^\d\.\s*/,'')}</li>
                ) : (
                  <p key={i}>{line}</p>
                )
              ))}
            </div>
            <div className={styles.buttons}>
              <a href="https://katiasantanabeauty.gendo.app/#/" className={styles.book}>Agende agora</a>
              <a href="https://wa.me/message/4VZHU4YYLZ35I1" className={styles.contact}>Entre em contato</a>
            </div>
          </div>
        </div>

        <button
          className={styles.arrow}
          onClick={() => navigate(`/servicos/${SERVICES[nextIdx].id}`)}
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
    </section>
  )
}