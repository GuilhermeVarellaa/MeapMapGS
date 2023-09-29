import React from 'react';
import './Empresas.css'

class Empresas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreFIAP: false,
      showMoreMicrosoft: false,
      showMoreKraftHeinz: false,
      showMoreOng: false,
    };
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }

  handleShowMoreClick(company) {
    this.setState({
      [company]: !this.state[company],
    });
  }

  render() {

    return (
      <div className="empresas-container">
        <div className="empresa">
          <img src='./logo.png' alt='MealMap Logo' className='empresa-logo'/>
          <h2 className="empresa-nome">MealMap</h2>
          <p className="empresa-descricao">
            A empresa MealMap é uma inovadora no combate à fome, por meio do seu revolucionário sistema de inteligência artificial chamado "MealMap AI". Esse sistema tem o propósito de conectar fontes de alimentos excedentes a comunidades que enfrentam insegurança alimentar, criando um impacto positivo e significativo.
            {this.state.showMoreMealMap && 
            <p>
              O funcionamento do "MealMap AI" é simples e eficiente. Utilizando algoritmos avançados, o sistema identifica estabelecimentos como restaurantes, supermercados e fazendas que frequentemente têm alimentos em excesso e que correm o risco de serem desperdiçados. Simultaneamente, a inteligência artificial também identifica comunidades em situação de necessidade, com base em dados socioeconômicos e de saúde pública.
              <br/><br/>
              Agindo como um mediador entre esses dois grupos, o "MealMap AI" facilita a entrega dos alimentos excedentes das fontes para as comunidades necessitadas. Além disso, a IA coleta dados continuamente e, com base nessas informações, é capaz de prever as necessidades futuras de alimentos nessas comunidades e ajustar a distribuição de forma eficiente, minimizando o desperdício e maximizando o impacto.
              <br/><br/>
              Dessa forma, a MealMap resolve dois problemas de uma só vez: reduz o desperdício de alimentos e combate a fome nas comunidades mais necessitadas. Através da aplicação da inteligência artificial, a empresa promove uma distribuição mais equitativa dos recursos alimentares, ajudando a garantir que ninguém passe fome.
              <br/><br/>
              A MealMap demonstra um compromisso em utilizar a tecnologia de forma inovadora e consciente, contribuindo ativamente para o combate à fome e para a construção de um mundo mais sustentável e justo.
            </p>}
          </p>
          <button onClick={() => this.handleShowMoreClick('showMoreMealMap')} className="saber-mais">
            {this.state.showMoreMealMap ? 'Mostrar Menos' : 'Saber Mais'}
          </button>
        </div>
        <h1 className="empresas-titulo">Empresas Parceiras</h1>
        <div className="empresa fiap">
          <img src='./fiap.logo.png' alt='FIAP Logo' className='empresa-logo'/>
          <h2 className="empresa-nome">FIAP</h2>
          <p className="empresa-descricao">
            A FIAP (Faculdade de Informática e Administração Paulista) é uma instituição de ensino superior localizada na cidade de São Paulo, Brasil. Fundada em 1999, a FIAP é especializada na área de tecnologia da informação e oferece cursos de graduação, pós-graduação e programas de educação executiva.
            {this.state.showMoreFIAP && <p>No que diz respeito ao combate à fome, a FIAP pode contribuir de várias formas:<br/><br/>

              <strong>Educação:</strong> A FIAP pode fornecer conhecimentos e habilidades para que os profissionais formados pela instituição possam desenvolver soluções tecnológicas inovadoras para enfrentar os desafios relacionados à fome. Isso inclui áreas como agricultura sustentável, cadeias de suprimentos eficientes e sistemas de gerenciamento de recursos alimentares.<br/><br/>

              <strong>Pesquisa e desenvolvimento:</strong> A FIAP pode realizar pesquisas acadêmicas e projetos de desenvolvimento tecnológico voltados para soluções inovadoras no combate à fome. Isso envolve a investigação de novas tecnologias, como inteligência artificial, big data, internet das coisas (IoT) e blockchain, que podem ser aplicadas em áreas como produção agrícola, distribuição de alimentos e redução do desperdício.<br/><br/>

              <strong>Parcerias e engajamento com a comunidade:</strong> A FIAP pode estabelecer parcerias com organizações sem fins lucrativos, governos e empresas do setor alimentício para promover iniciativas conjuntas de combate à fome. Essas parcerias podem incluir o desenvolvimento de programas de capacitação, hackathons, competições e eventos para engajar a comunidade acadêmica e profissional na busca por soluções inovadoras.<br/><br/>

              <strong>Conscientização e divulgação:</strong> A FIAP pode desempenhar um papel fundamental na conscientização sobre a fome e seus impactos, promovendo eventos, palestras e campanhas de divulgação para educar a comunidade acadêmica e a sociedade em geral sobre a importância de enfrentar esse problema global. Isso inclui a disseminação de informações sobre as causas da fome, a importância da segurança alimentar e a necessidade de soluções sustentáveis.<br/><br/>

              É importante ressaltar que, como uma instituição de ensino, a FIAP não atua diretamente na execução de projetos de combate à fome, mas pode contribuir significativamente por meio da formação de profissionais qualificados e do fomento à inovação tecnológica nessa área.</p>}
          </p>
          <button onClick={() => this.handleShowMoreClick('showMoreFIAP')} className="saber-mais">
            {this.state.showMoreFIAP ? 'Mostrar Menos' : 'Saber Mais'}
          </button>
        </div>

        <div className="empresa">
          <img src='./Microsoft_logo.png' alt='Microsoft Logo' className='empresa-logo'/>
          <h2 className="empresa-nome">Microsoft</h2>
          <p className="empresa-descricao">
            A Microsoft Corporation é uma das maiores empresas de tecnologia do mundo, fundada em 1975 e sediada em Redmond, Washington, nos Estados Unidos. 
            {this.state.showMoreMicrosoft && 
            <p>
              No combate à fome, a Microsoft tem buscado utilizar sua expertise tecnológica e recursos para fazer a diferença. Veja algumas formas em que a empresa pode ajudar:<br/><br/>

              <strong>Tecnologia para agricultura sustentável:</strong> A Microsoft investe em soluções baseadas em tecnologia para aprimorar a agricultura e promover a produção de alimentos sustentáveis. Por meio do uso de inteligência artificial, análise de dados e IoT, a empresa desenvolve ferramentas que auxiliam no monitoramento das colheitas, previsão de safras, gerenciamento eficiente de recursos hídricos e otimização do uso de fertilizantes, contribuindo para aumentar a produtividade e reduzir desperdícios.<br/><br/>

              <strong>Acesso à tecnologia em áreas rurais:</strong> A Microsoft está empenhada em expandir o acesso à tecnologia em regiões rurais e comunidades carentes, onde a falta de conectividade pode ser um obstáculo. Através de iniciativas como o programa Airband, a empresa busca levar conectividade de internet para áreas remotas, facilitando o acesso a informações relevantes sobre práticas agrícolas, preços de mercado e oportunidades de negócios, o que pode ajudar a melhorar a produtividade e a renda dos agricultores.<br/><br/>

              <strong>Parcerias com organizações e governos:</strong> A Microsoft colabora com organizações sem fins lucrativos, agências governamentais e outras entidades para desenvolver soluções inovadoras no combate à fome. Através de parcerias estratégicas, a empresa busca combinar seus recursos tecnológicos com o conhecimento local para criar soluções personalizadas que abordem os desafios específicos de cada região.<br/><br/>

              <strong>Inovação social e investimentos:</strong> Através do programa Microsoft Philanthropies, a empresa investe em projetos sociais e de inovação que visam combater a fome e a pobreza. Isso inclui apoio financeiro, doações de tecnologia, programas de capacitação e incentivo ao empreendedorismo social. A Microsoft também busca alavancar sua plataforma de computação em nuvem, o Azure, para permitir o desenvolvimento de aplicativos e soluções voltados para a segurança alimentar.<br/><br/>

              Essas são apenas algumas maneiras pelas quais a Microsoft pode contribuir no combate à fome, utilizando sua experiência em tecnologia e seu compromisso com a responsabilidade social. A empresa continua empenhada em explorar novas oportunidades e parcerias para enfrentar esse desafio global de forma eficaz.
            </p>
            }
          </p>
          <button onClick={() => this.handleShowMoreClick('showMoreMicrosoft')} className="saber-mais">
            {this.state.showMoreMicrosoft ? 'Mostrar Menos' : 'Saber Mais'}
          </button>
        </div>

        <div className="empresa">
          <img src='./kraft.logo.png' alt='Kraft Heinz Logo' className='empresa-logo'/>
          <h2 className="empresa-nome">Kraft Heinz</h2>
          <p className="empresa-descricao">
            A Kraft Heinz é uma das maiores empresas de alimentos e bebidas do mundo, resultado da fusão entre a Kraft Foods e a H.J. Heinz Company.
            {this.state.showMoreKraftHeinz && <p>No combate à fome, a Kraft Heinz pode desempenhar um papel importante por meio de várias iniciativas:<br/><br/>

              <strong>Doações de alimentos:</strong> A empresa pode ajudar a combater a fome por meio de doações de alimentos. A Kraft Heinz pode estabelecer parcerias com organizações sem fins lucrativos, bancos de alimentos e programas governamentais para fornecer alimentos nutritivos e de qualidade para pessoas em situação de vulnerabilidade. Essas doações podem incluir produtos alimentícios prontos para consumo, como sopas, molhos, massas, enlatados, entre outros.<br/><br/>

              <strong>Programas de responsabilidade social:</strong> A Kraft Heinz pode desenvolver e apoiar programas de responsabilidade social que tenham como objetivo principal o combate à fome. Esses programas podem envolver a criação de iniciativas de educação nutricional, promoção da segurança alimentar e capacitação de comunidades carentes para a produção de alimentos sustentáveis.<br/><br/>

              <strong>Redução do desperdício de alimentos:</strong> A Kraft Heinz pode implementar práticas e políticas internas para reduzir o desperdício de alimentos em suas operações. Isso pode incluir o estabelecimento de metas de redução de resíduos, o uso de tecnologias de conservação de alimentos e o engajamento de fornecedores e parceiros para adotar práticas sustentáveis em toda a cadeia de suprimentos.<br/><br/>

              <strong>Inovação em alimentos saudáveis e acessíveis:</strong> A Kraft Heinz pode investir em pesquisa e desenvolvimento para criar produtos alimentícios mais saudáveis e acessíveis. Isso pode incluir o desenvolvimento de opções de refeições prontas, lanches nutritivos e produtos de fácil preparo, que sejam acessíveis a populações de baixa renda e possam contribuir para uma alimentação equilibrada.<br/><br/>

              Além disso, a Kraft Heinz também pode promover a conscientização sobre a fome e a importância da segurança alimentar, por meio de campanhas de marketing, parcerias com influenciadores e patrocínio de eventos relacionados ao tema.<br/><br/>

              A Kraft Heinz tem a oportunidade de usar sua influência e recursos como uma empresa líder no setor de alimentos para ajudar a combater a fome, buscando soluções inovadoras, promovendo parcerias estratégicas e fazendo uma diferença significativa na vida das pessoas em todo o mundo.</p>}
          </p>
          <button onClick={() => this.handleShowMoreClick('showMoreKraftHeinz')} className="saber-mais">
            {this.state.showMoreKraftHeinz ? 'Mostrar Menos' : 'Saber Mais'}
          </button>
        </div>

        <div className="empresa">
          <img src='./ong.logo.png' alt='ONG Logo' className='empresa-logo'/>
          <h2 className="empresa-nome">ONG Caça Fome</h2>
          <p className="empresa-descricao">
            A ONG Caça Fome é uma organização não governamental dedicada ao combate à fome e à promoção da segurança alimentar.
            {this.state.showMoreOng && <p>No combate à fome, a Caça Fome pode desempenhar um papel crucial por meio de várias iniciativas:<br/><br/>

              <strong>Distribuição de alimentos:</strong> Uma das principais atividades da Caça Fome é a distribuição direta de alimentos para comunidades carentes. A organização pode estabelecer parcerias com supermercados, produtores agrícolas, restaurantes e outras empresas alimentícias para obter doações e redistribuí-las de maneira eficiente e equitativa para aqueles que mais precisam.<br/><br/>

              <strong>Programas de alimentação infantil:</strong> A Caça Fome pode desenvolver programas específicos para combater a fome entre crianças, como merendas escolares ou programas de café da manhã nutritivos. Esses programas visam garantir que crianças em idade escolar recebam refeições adequadas, o que contribui para seu desenvolvimento físico e cognitivo.<br/><br/>

              <strong>Educação nutricional:</strong> A ONG pode promover a conscientização e a educação sobre nutrição, fornecendo informações e orientações sobre escolhas alimentares saudáveis. Isso inclui a realização de palestras, oficinas e campanhas de sensibilização em comunidades carentes, escolas e centros comunitários para capacitar as pessoas a tomar decisões alimentares melhores e mais informadas.<br/><br/>

              <strong>Apoio à agricultura sustentável:</strong> A Caça Fome pode fornecer apoio e recursos para promover a agricultura sustentável em comunidades vulneráveis. Isso pode incluir treinamento em técnicas agrícolas sustentáveis, fornecimento de sementes e ferramentas agrícolas, estabelecimento de hortas comunitárias e incentivo ao uso de práticas agrícolas que preservem o meio ambiente e aumentem a produção de alimentos.<br/><br/>

              <strong>Parcerias e advocacy:</strong> A organização pode estabelecer parcerias estratégicas com outras ONGs, governos e setor privado para fortalecer suas ações e ampliar seu impacto. Além disso, a Caça Fome pode realizar atividades de advocacy, buscando sensibilizar os formuladores de políticas e a sociedade em geral sobre a importância de combater a fome e promover a segurança alimentar.<br/><br/>

              Através dessas iniciativas, a ONG Caça Fome pode ajudar no combate à fome, buscando soluções sustentáveis e integradas que abordem as causas subjacentes da insegurança alimentar. Seu trabalho é fundamental para garantir que indivíduos e comunidades em situação de vulnerabilidade tenham acesso a alimentos adequados e sejam capacitados para uma vida mais saudável e próspera.</p>}
          </p>
          <button onClick={() => this.handleShowMoreClick('showMoreOng')} className="saber-mais">
            {this.state.showMoreOng ? 'Mostrar Menos' : 'Saber Mais'}
          </button>
        </div>

      </div>
    );
  }
}

export default Empresas;

