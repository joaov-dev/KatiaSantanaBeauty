// components/ServiceDescription.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './ServiceDescription.module.css'

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

const SERVICES = [
  {
    id: 'AlongamentodeUnhas',
    img: alongamentoUnhas,
    title: 'Alongamento de Unhas',
    text: `
Descubra a liberdade de ter unhas longas, fortes e impecáveis com o nosso Alongamento de Unhas, um serviço que une técnica avançada e cuidado personalizado. Durante a aplicação, moldamos extensões em acrílico ou gel sobre suas unhas naturais, garantindo um comprimento uniforme e um formato harmonioso que valoriza o seu estilo e a sua rotina. Após o alongamento, realizamos remoção de cutículas e esmaltação em gel, resultando em um acabamento brilhante e duradouro. O procedimento é realizado em ambiente esterilizado, com produtos de alta qualidade, para oferecer conforto e segurança do início ao fim.

Benefícios:
	•	Unhas mais resistentes, sem risco de quebra ou lascas
	•	Acabamento impecável que dura semanas, sem necessidade de retoques diários
	•	Versatilidade para escolher formato e comprimento conforme sua preferência
	•	Aplicação indolor e rápida, ideal para quem tem agenda cheia
	•	Visual sofisticado e bem cuidado, perfeito para qualquer ocasião
    `
  },
  {
    id: 'BanhodeGel',
    img: BanhoGel,
    title: 'Banho de Gel',
    text: `
Descubra o poder de unhas naturais mais fortes e radiantes com o nosso Banho de Gel, um tratamento que alia cuidado e tecnologia sem recorrer ao alongamento. A aplicação de gel especial confere resistência extra às suas unhas, reduzindo a incidência de quebras e descamações, ao mesmo tempo em que proporciona um brilho intenso e duradouro.

Durante a sessão, preparamos as unhas com limpeza e remoção suave de cutículas, antes de aplicar camadas finas de gel fortalecedor, modelando cada unha para realçar sua forma natural. O gel é então curado em lâmpada UV/LED, garantindo acabamento liso e impecável. Não há uso de extensões: o foco é preservar e valorizar sua unha verdadeira, mantendo-a saudável e protegida.

Benefícios:
	•	Fortalecimento da estrutura natural, evitando quebras e lascas
	•	Brilho e cobertura uniforme que duram semanas
	•	Processo rápido, indolor e livre de odores fortes
    `
  },
  {
    id: 'ManicurePedicure',
    img: manicurePedicure,
    title: 'Manicure e Pedicure',
    text: `
Transforme o cuidado das suas mãos e pés em um momento de puro bem-estar com o nosso serviço de Manicure e Pedicure. Receba atenção personalizada desde o início, com higienização completa e remoção cuidadosa de cutículas, preparando a superfície para um acabamento impecável.

Em seguida, lixamos e modelamos cada unha conforme o formato ideal para você, garantindo simetria e conforto. Aplicamos um creme hidratante nutritivo em mãos e pés, promovendo maciez e relaxamento, antes de finalizar com esmaltação de alta durabilidade em cores à sua escolha. Tudo isso em um ambiente acolhedor, com materiais esterilizados e uma equipe dedicada ao seu conforto.

Benefícios:
	•	Unhas e cutículas cuidadosamente tratadas, sem agressão
	•	Hidratação profunda que deixa pele macia e suave
	•	Esmaltação uniforme com longa duração e brilho intenso
    `
  },
  {
    id: 'SpadosPes',
    img: spadospes,
    title: 'Spa dos Pés',
    text: `
Entregue-se a um momento de puro conforto e renovação com o nosso Spa dos Pés, um tratamento pensado para revitalizar e cuidar de quem caminha o dia todo. Iniciamos com uma esfoliação suave que remove células mortas e suaviza a pele, seguida de imersão em um escalda-pés aromático que relaxa e prepara os tecidos. Em seguida, aplicamos uma máscara hidratante intensiva, enquanto realizamos uma massagem estimulante nos pés e tornozelos, aliviando tensões e melhorando a circulação. Finalizamos com remoção cuidadosa de calosidades e aplicação de um creme nutritivo que deixa a pele macia e protegida.

Benefícios:
	•	Alívio imediato do cansaço e da sensação de pés pesados
	•	Estímulo à circulação sanguínea, reduzindo inchaços
	•	Esfoliação e hidratação profunda que renovam a pele
	•	Massagem relaxante que alivia dores e promove bem-estar
	•	Pés suaves, revitalizados e prontos para qualquer desafio
    `
  },
	{
    id: 'ExtensaodeCilios',
    img: ExtensaoCilios,
    title: 'Extensão de Cílios',
    text: `
Realce seu olhar de forma prática e sofisticada com a nossa Extensão de Cílios, um procedimento que confere volume, alongamento e definição imediatos — sem a necessidade de rímel diário. Após avaliação do formato dos seus olhos e escolha da técnica (clássica, volume russo ou mix), o profissional isola cuidadosamente cada fio natural e aplica extensões de seda ou vison, garantindo acabamento impecável e aderência segura. Todo o procedimento é realizado em ambiente esterilizado, com cola de alta qualidade e sessões confortáveis.

Estilos disponíveis:
	•	Clássico Fio a Fio
	•	Hyper Classic
	•	Hyper Fox
	•	Hyper Plume
	•	Volume Brasileiro, Egípcio e Russo
    `
  },
  {
    id: 'BrowLamination',
    img: browLamination,
    title: 'Brow Lamination',
    text: `
Destaque suas sobrancelhas com a nossa Brow Lamination, um tratamento que alinha, modela e fixa os fios para um efeito “lifting” natural e duradouro. Durante o procedimento, aplicamos produtos específicos que suavizam a fibra capilar, permitindo reposicionar cada fio na direção ideal. Em seguida, selamos o resultado com uma solução nutritiva, garantindo fios alinhados, com volume e simetria perfeitos. Tudo isso em um ambiente seguro e esterilizado, proporcionando conforto do início ao fim.

Benefícios:
	•	Sobrancelhas perfeitamente alinhadas e definidas por até 6–8 semanas
	•	Efeito lifting que abre o olhar sem necessidade de maquiagem diária
	•	Volume e simetria uniformes, adaptados ao formato do seu rosto
	•	Procedimento rápido, indolor e sem danos aos fios
	•	Visual moderno e sofisticado, com manutenção simples e espaçada
    `
  },
  {
    id: 'MicrobladingMicropigmentação',
    img: microblading,
    title: 'Microblading e Micropigmentação',
    text: `
Realce suas sobrancelhas com precisão e arte por meio do nosso serviço de Microblading e Micropigmentação, ideal para quem busca contornos perfeitos e um acabamento ultrarrealista. Após a análise do formato do seu rosto e da densidade dos fios, escolhemos a técnica mais adequada para preencher falhas e definir o arco ideal. Todo o procedimento é realizado em ambiente esterilizado, com anestesia tópica para total conforto.

Técnicas disponíveis:
	•	Fio a Fio: Implantação manual de pigmentos que simula cada fio natural, garantindo um efeito super fino e realista.
	•	Shadow: Técnica de sombreamento suave que preenche e unifica o design, criando um contorno mais denso e com aparência de maquiagem esfumada.
    `
  },
  {
    id: 'Maquiagem',
    img: maquiagem,
    title: 'Maquiagem',
    text: `
Transforme seu visual com a nossa Maquiagem Social, um serviço personalizado que realça sua beleza única para ocasiões especiais. Utilizamos produtos de alta performance e longa duração para criar looks sofisticados, desde um acabamento natural e iluminado até uma produção mais marcante, conforme sua preferência.

A sessão começa com preparação da pele: limpeza, tonificação e aplicação de primers adequados ao seu tipo de pele, garantindo base uniforme e prolongando a durabilidade da make. Em seguida, escolhemos a paleta ideal de sombras, contornos e iluminadores, trabalhando ponto a ponto para valorizar seus traços — olhos, maçãs do rosto e lábios ganham destaque com técnicas de esfumaçado, blush e batom precisos. Finalizamos com acabamento e fixação profissional, garantindo resistência a calor e umidade.

Benefícios:
	•	Look impecável e foto-proof, perfeito para eventos e ensaios
	•	Produtos de alta qualidade que respeitam e protegem a pele
	•	Versatilidade para adaptar o estilo: do natural ao glamouroso
    `
  },
  {
    id: 'DepilacaoFacial',
    img: depilacaoFacial,
    title: 'Depilacao Facial',
    text: `
Entregue-se a uma pele lisa e renovada com o nosso serviço de Depilação Facial, que alia técnicas tradicionais egípcias e métodos modernos para remover pelos com suavidade e precisão. Cada procedimento é realizado com produtos e instrumentos esterilizados, respeitando o seu tipo de pele e garantindo conforto do início ao fim.

Serviços disponíveis:
	•	Buço Egípcio: remoção do pelo acima do lábio com técnica ancestral, proporcionando esfoliação leve e toque sedoso.
	•	Full Face Egípcio: depilação completa do rosto com fio egípcio, promovendo limpeza profunda e renovação celular.
	•	Dermaplaning: esfoliação mecânica que remove pelos finos (vello) e células mortas, revelando uma pele mais luminosa e uniforme.
    `
  },
  {
    id: 'LimpezadePele',
    img: limpezaPele,
    title: 'Limpeza de Pele',
    text: `
Revitalize sua pele com o nosso exclusivo tratamento de Limpeza de Pele, um verdadeiro ritual de autocuidado que combina técnica profissional e produtos de alta performance. Iniciamos com vaporização suave para amolecer impurezas, seguida de extração cuidadosa de cravos e remoção de células mortas. Em seguida, aplicamos uma máscara purificante que desobstrui os poros e acalma a pele, finalizando com sérum hidratante e protetor solar para selar o tratamento e proteger o tecido cutâneo. Todo o procedimento é realizado em ambiente esterilizado, com massagem facial leve que estimula a circulação e promove relaxamento.

Benefícios:
	•	Poros desobstruídos e redução visível de cravos
	•	Remoção profunda de impurezas e células mortas
	•	Estímulo à renovação celular e melhora da textura da pele
	•	Prevenção de acne e control e do excesso de oleosidade
    `
  },
  {
    id: 'DesigndeSobrancelhas',
    img: browLamination,
    title: 'Design de Sobrancelhas',
    text: `
Realce o contorno do seu olhar com o nosso Design de Sobrancelhas, um serviço customizado que respeita a harmonização facial e valoriza sua expressão natural. Iniciamos com uma avaliação detalhada do formato do seu rosto e dos fios, identificando pontos de correção e mapeando a curva ideal. Em seguida, trabalhamos cada etapa com precisão, seja preenchendo falhas, definindo o arco ou ajustando a espessura, tudo para criar sobrancelhas equilibradas e cheias de personalidade.

Você pode escolher entre três técnicas, conforme a sua preferência e necessidade:
	•	Com Henna: Pigmentação semipermanente que preenche e destaca os fios, criando efeito de sobrancelha mais cheia por até 15 dias.
	•	Com Tintura: Coloração suave que uniformiza o tom dos pelos, realçando a moldura natural do rosto por cerca de 4 semanas.
	•	Personalizado: Combinação de mapeamento fio a fio e preenchimento com produtos à base de gel ou pó, para contorno definido e acabamento natural, com durabilidade de até 6 semanas.
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