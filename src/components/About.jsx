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
            Katia Santana é especialista em realçar a beleza única de cada cliente.
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
            Localizado no coração do Sacomã, na Rua Alencar Araripe, 1258, o Katia Santana Beauty foi planejado para oferecer conforto, privacidade e bem-estar desde o primeiro instante. Nossos ambientes são climatizados e contam com amplas janelas que garantem iluminação natural durante todo o dia. Cada estação de atendimento está equipada com mobiliário ergonômico e materiais de última geração, proporcionando praticidade e higiene máxima.
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