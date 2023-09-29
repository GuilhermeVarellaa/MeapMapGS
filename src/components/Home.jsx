import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';



const useStyles = makeStyles((theme) => ({
  parallax: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'auto',
    minHeight: '100vh', // mantém a altura mínima em telas maiores
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px #000',
    textAlign: 'center',
    backdropFilter: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    marginRight: '10%', // Adiciona margem à esquerda
  },
  content: {
    backgroundColor: '#FFFAFA',
    padding: theme.spacing(8, 0, 6),
  },
  form: {
    marginBottom: '20px',
    marginTop: '20px',
  },
  title: {
    fontSize: '2rem',
    fontFamily: 'Arial',
    '@media (max-width: 600px)': { // se a largura da tela for menor ou igual a 600px
      fontSize: '1.5rem', // reduz o tamanho da fonte
    }},
    subtitle: {
      fontSize: '1.2rem',
      fontFamily: 'Arial',
      '@media (max-width: 600px)': { // se a largura da tela for menor ou igual a 600px
        fontSize: '1rem', // reduz o tamanho da fonte
      },
    },
  paragraph: {
    fontSize: '1rem',
    fontFamily: 'Arial',
    marginBottom: '1rem',
    whiteSpace: 'pre-line', // Adiciona quebra de linha no texto
  },
  imgMargin: {
    objectFit: 'cover',
    marginLeft: '0', // Centra a imagem
    marginTop: '15%',
    width: '180%', // Aumenta o tamanho da imagem
    position: 'relative',
    left: '20%',
    transform: 'translate(-60%)',
    '@media (max-width: 600px)': {
      marginTop: '10%',
      marginLeft: '40%',
      width: '100%',
    },
    '@media (max-width: 1280px)': {
      marginTop: '10%',
      marginLeft: '40%',
      width: '100%',
    },
},

  img: {
    borderRadius: '20%',
    width: '100%', // makes the image responsive
    height: 'auto',
  },
}));


function Home() {
  const classes = useStyles();
  const [foodSuppliers, setFoodSuppliers] = useState([]);

  const handleAddSupplier = () => {
    // Aqui você pode adicionar a função para adicionar fornecedores à lista
  };

  return (
    <>
      <Box className={classes.parallax} style={{ backgroundImage: 'url(/comida.jpg)' }}>
  <Container maxWidth="md">
    <Grid container spacing={2} style={{ overflow: 'auto', height: '100%' }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" align="left" className={classes.title} gutterBottom>
          MealMap{'\n\n'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" align="right" className={classes.subtitle} gutterBottom>
          {'\n\n'}Fome zero e agricultura sustentável.<br />
          Possui o objetivo de erradicar a fome,<br />
          Alcançar a segurança alimentar, melhorar a nutrição<br />
          e promover a agricultura sustentável até 2030.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>


  <div className={classes.content}>
  <Container maxWidth="md" className={classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <img src="/criancas.jpg" alt="Crianças" className={`${classes.imgMargin}`} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" align="right" color="textSecondary" className={classes.paragraph} paragraph>
          O "Meal Map AI", um sistema de inteligência artificial revolucionário que foi projetado para abordar duas questões altamente relevantes e críticas no panorama global atual - o desperdício excessivo de alimentos e a crescente insegurança alimentar. {'\n\n'}
          A problemática do desperdício de alimentos não é apenas um ato de desconsideração econômica, mas também contribui significativamente para questões ambientais através do consumo desnecessário de recursos naturais e da emissão de gases de efeito estufa. {'\n\n'}
          Paralelamente, a insegurança alimentar, um desafio que infelizmente continua a persistir em muitas comunidades ao redor do mundo, tem implicações profundas para a saúde e o bem-estar humano. {'\n\n'}
          O "Meal Map AI" surge como uma resposta tecnológica a esses problemas. Este sistema único e perspicaz de inteligência artificial funciona conectando fontes de alimentos excedentes - como restaurantes, supermercados, e fazendas - a comunidades que lutam contra a insegurança alimentar. {'\n\n'}
          Em vez de permitir que alimentos perfeitamente bons e nutritivos sejam descartados, o sistema assegura que eles sejam direcionados para aqueles que mais necessitam.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</div>
<Box className={classes.parallax} style={{ backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 70%), url(/fome.jpg)', backgroundColor: '#C8E6C9' }}>
  <Container maxWidth="md">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" align="left" className={classes.subtitle} gutterBottom style={{ color: '#ffffff', padding: '10px' }}>
          A motivação para desenvolver o "Meal Map AI" é impulsionada por um desejo de solucionar duas questões preocupantes de nosso tempo - o desperdício de alimentos e a insegurança alimentar.
        </Typography>
        <br />
        <Typography variant="h6" align="left" className={classes.subtitle} gutterBottom style={{ color: '#ffffff', padding: '10px' }}>
          Estima-se que cerca de um terço de todos os alimentos produzidos no mundo é desperdiçado. Este não é apenas um desperdício de recursos valiosos, mas também um agravante para a mudança climática devido ao metano liberado quando os alimentos se decompõem em aterros sanitários.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" align="right" className={classes.subtitle} gutterBottom style={{ color: '#ffffff', padding: '10px' }}>
          No extremo oposto da escala, temos uma parte considerável da população mundial que enfrenta insegurança alimentar, uma situação em que o acesso regular e confiável a alimentos nutritivos e suficientes é incerto. A insegurança alimentar pode ter efeitos profundos na saúde e no bem-estar dos indivíduos, levando a doenças crônicas, má nutrição e outros problemas de saúde.
        </Typography>
        <br />
        <Typography variant="h6" align="right" className={classes.subtitle} gutterBottom style={{ color: '#ffffff', padding: '10px' }}>
          No cruzamento dessas duas questões prementes, nasce a ideia do "Meal Map AI". Este projeto propõe uma solução eficiente e inovadora para conectar fontes de alimentos excedentes a comunidades que enfrentam insegurança alimentar. Usando algoritmos inteligentes para identificar potenciais doadores de alimentos e comunidades necessitadas, o "Meal Map AI" tem o potencial de reduzir o desperdício de alimentos e garantir que eles cheguem às pessoas que mais precisam.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>



      <div className={classes.content}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" align="left" color="textPrimary" gutterBottom style={{ marginLeft: '170px'}}>
                Objetivos
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" className={classes.paragraph} paragraph>
                A concretização do "Meal Map AI" impõe várias complexidades.{'\n\n'}
                A precisão na identificação das fontes de alimentos excedentes e das comunidades necessitadas é um desafio primordial. Precisamos desenvolver algoritmos eficientes, baseados em dados socioeconômicos e de saúde pública, para localizar esses grupos com acurácia.{'\n\n'}
                Outro desafio é a logística de coleta e entrega de alimentos. Deve-se construir uma rede robusta que assegure a entrega rápida e segura de alimentos, levando em conta fatores como distância, tempo e condições de transporte.{'\n\n'}
                A garantia de que os alimentos excedentes estejam em condições adequadas para consumo é igualmente crucial, requerendo processos rigorosos de inspeção e controle de qualidade, bem como o transporte e armazenamento adequado.{'\n\n'}
                Prever as necessidades futuras de alimentos nas comunidades é uma tarefa analítica complexa, envolvendo a modelagem de diversos fatores incertos que podem influenciar a demanda por alimentos.{'\n\n'}
                Finalmente, devemos ajustar a distribuição de alimentos para maximizar a eficiência e minimizar o desperdício, o que requer gerenciamento de dados inteligente e tomadas de decisão bem fundamentadas.{'\n\n'}
                Ainda assim, com tecnologia avançada e uma abordagem centrada no usuário, acreditamos ser possível superar esses desafios e alcançar nosso objetivo: combater a insegurança alimentar e o desperdício de alimentos.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src="/parcerias.png" className={classes.img} alt="Parcerias" />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Box className={classes.parallax} style={{ backgroundImage: 'url(/campanha.jpg)' }} />

    </>
  );
}

export default Home;
