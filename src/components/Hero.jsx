import React from 'react'
import styles from './Hero.module.css'
import bannerImg from '../assets/banner3.png'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.cta}>
        <div className={styles.textWrapper}>
          <div className={styles.title}>
            <p>Beleza sem limites,</p>
            <p>perfeição inalcançável</p>
          </div>
          <p className={styles.subtitle}>
            Você é uma pérola rara, linda e incomparável.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <a href="https://katiasantanabeauty.gendo.app/#/" className={styles.agendamento}>
            Agende agora
          </a>
          <a href="https://wa.me/message/4VZHU4YYLZ35I1" className={styles.contato}>
            Entre em contato
          </a>
        </div>
      </div>
      <div className={styles.banner}>
        <img
          src={bannerImg}
          alt="Banner de serviços da Katia Santana Beauty"
        />
      </div>
    </section>
  )
}