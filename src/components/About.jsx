// components/About.jsx
import React from 'react'
import styles from './About.module.css'
import katiaImg from '../assets/katia.png'
import salao from '../assets/salao.png'

export function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Conheça um pouco mais do KatiaSantanaBeauty
      </h1>

      <div className={styles.profile}>
        <div className={styles.photo}>
          <img src={katiaImg} alt="Katia Santana" />
        </div>
        <div className={styles.bio}>
          <h2>Katia Santana</h2>
          <p>
            Com mais de 10 anos de experiência no mercado de beleza, Katia
            Santana é especialista em realçar a beleza única de cada cliente.
            Empreendedora nata, ela fundou o KatiaSantanaBeauty para oferecer
            tratamentos de ponta, aliando técnicas modernas com um atendimento
            acolhedor e personalizado. Seu compromisso é fazer com que cada
            pessoa se sinta confiante, rara e incomparável.
          </p>
        </div>
      </div>

      <div className={styles.space}>
        <div className={styles.spaceInfo}>
          <h2>Nosso espaço</h2>
          <p>
            Localizado no coração da cidade, nosso salão foi projetado para
            oferecer conforto e privacidade. Com ambientes climatizados,
            iluminação natural, estações equipadas e um lounge para espera
            relaxante, garantimos uma experiência completa. Venha nos visitar
            na Rua das Flores, 123 – Centro, e descubra um novo conceito em beleza.
          </p>
        </div>
        <div className={styles.spacePhoto}>
          {/* Se quiser, troque por uma imagem do salão */}
          <img src={salao} alt="Interior do salão KatiaSantanaBeauty" />
        </div>
      </div>
    </main>
  )
}