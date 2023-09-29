import React, { useState } from 'react';
import Modal from 'react-modal';
import './QuemSomos.css';

Modal.setAppElement('#root'); // Substitua '#root' pelo id do elemento raiz do seu aplicativo

const Button = ({ text, onClick }) => (
  <button className="btn" onClick={onClick}>{text}</button>
);

const Member = ({ name, imgSrc, altText, aboutText, socialOnClick }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="membro">
      <img src={imgSrc} alt={altText} />
      <h3>{name}</h3>
      <Button text="Sobre" onClick={openModal} />
      <Button text="Rede Social" onClick={socialOnClick} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sobre Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Sobre {name}</h2>
        <p>{aboutText}</p>
        <button className="btn" onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

const QuemSomos = () => {
  const aboutBruno = "Sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP, com amplo conhecimento em tecnologias de desenvolvimento web, incluindo SQL, Javascript, HTML5 / CSS3. \n\nAlém disso, possuo conhecimento em outras tecnologias, como Python, React, Wordpress, Java, IBM Watson, Linux, Figma. \n\nTenho conhecimento sobre metodologias ágeis e prezo pela comunicação dentro da equipe, utilizando métodos Kanban, Scrum e XP. Também valorizo o desenvolvimento com código limpo e seguindo os padrões definidos pelo time. (design patterns)\n\nBusco uma oportunidade para aplicar minhas habilidades em projetos práticos e continuar desenvolvendo minhas habilidades técnicas e interpessoais.";
  const aboutGuilherme = "Jovem apaixonado por inovação e tecnologia, atualmente estudando Análise e Desenvolvimento de Sistemas na FIAP e trabalhando como Jovem aprendiz (Enterprise) na Apple. Com forte capacidade analítica e habilidades de resolução de problemas, estou constantemente procurando novas oportunidades para aprimorar minhas habilidades e expandir meus conhecimentos.\n\n";
  const aboutLucas = "Apesar de muitas outras habilidades, acredito que meu diferencial esteja relacionado aos principais idiomas corporativos na América Latina.\nEstudei inglês formalmente e, recentemente, consegui realizar um intercâmbio acadêmico nos EUA – onde completei o High School americano. Meu intercâmbio não foi “adquirido” segundo programas particulares de inserção estudantil. Na verdade, fui aprovado para a Escola Pública nos EUA após provas de fluência e conhecimentos culturais e, nesse período, aprimorei minhas habilidades com o idioma, me tornando fluente nesta língua. Meu relacionamento com a host-Family durante esses 12 meses foi intenso, agregador, afetuoso e colaborador na rotina e objetivos da família.\nAntes desse processo, vivi em Madrid (Espanha) durante três anos da adolescência, onde desenvolvi espanhol fluente e com muitas experiências novas e diferentes.\nO ensino fundamental e médio, realizado numa das mais exigentes escolas privadas de Santos (São Paulo) me ajudou a desenvolver habilidades que não eram restritas ao conteúdo didático básico. Robótica, tecnologia e Projetos de Iniciação Científica fizeram parte de minha formação.\nRealizei integralmente cursos de Marketing digital e elaborei muitos projetos-pilotos nesse sentido. Adotei um estilo de vida devotado ao conhecimento, ao funcionamento do mundo corporativo de modo a desenvolver organização, perspicácia, paciência e pró-atividade – as qualidades que mais se desenvolveram e me mantiveram firme durante os desafios enfrentados.\n\nAgrego por onde passo, mas principalmente, evoluo e aprendo como nunca.";
  return (
    <div className="quem-somos">
      <div className="texto-introductorio">
        <h1>Quem Somos</h1>
        <p>
          Nós, como equipe do projeto "MealMap AI", somos os criadores dessa iniciativa inovadora e temos um interesse genuíno em seu crescimento contínuo. Desde o início, temos trabalhado incansavelmente para desenvolver e aprimorar o "MealMap AI" como uma solução poderosa no combate à fome. Estamos extremamente empolgados com o potencial do "MealMap AI" e acreditamos no impacto positivo que ele pode gerar nas comunidades em situação de insegurança alimentar. Como criadores, temos o compromisso de impulsionar o crescimento do projeto, buscando constantemente formas de expandir sua abrangência e eficácia.
          <br />
          <br />
          Nossa visão vai além do desenvolvimento inicial do "MealMap AI". Estamos determinados a estabelecer parcerias estratégicas com outras organizações e empresas que compartilhem de nossa missão. Juntos, podemos maximizar o alcance do projeto, aumentando sua eficácia e ampliando o impacto positivo nas comunidades que atendemos.
        </p>
      </div>

      <h2>Participantes do Grupo</h2>
      <div className="representante">
      <Member
          name="Guilherme Raul Varella da Silva"
          imgSrc="./guilherme.jpg"
          altText="Guilherme Raul Varella da Silva"
          aboutText={aboutGuilherme}
          socialOnClick={() => { window.open('https://www.linkedin.com/in/guilhermervarella/', '_blank') }}
        />
        
        <Member
          name="Bruno Barbosa Braga dos Santos"
          imgSrc="./bruno.jpeg"
          altText="Foto de Bruno"
          aboutText={aboutBruno}
          socialOnClick={() => { window.open('https://www.instagram.com/dannzini/', '_blank') }}
        />
      </div>
      <div className="outros-membros">
        
        <Member
          name="Lucas Alves Quintela"
          imgSrc="./lucas.jpg"
          altText="Lucas Alves Quintela"
          aboutText={aboutLucas}
          socialOnClick={() => { window.open('https://www.instagram.com/lucas__quintela/', '_blank') }}
        />
      
      </div>
    </div>
  );
}

export default QuemSomos;
