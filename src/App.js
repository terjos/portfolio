import Header from './components/Header'
import Realisation from './components/Realisation'
import Skill from './components/Skill'
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <section >
        <div className="title"><h2>Mon parcourt</h2></div>
        <p>Serrurier de formation j’ai exercé ce métier cinq années puis j’ai occupé le poste de laseriste pendant quinze ans. Parallèlement à mon travail j’ai toujours été passionné par l'informatique au cours de nombreux projets personnels j’ai acquis des compétences dans les technologies du web. Je souhaite aujourd’hui appliquer cette compétence et en acquérir d’autres à plein temps.</p>
      </section>
      <section >
        <div className="title"><h2>Mes réalisations</h2></div>
        <div className="realisation-list">
          <Realisation techno={['React', 'CSS']} img="portfolio" ext=".jpg" w="800" h="672">
            <a target="_blank" rel='noreferrer' href="https://github.com/terjos/portfolio">Portfolio:</a> le site que vous regardez actuellement.
          </Realisation>

          <Realisation techno={['Symfony', 'Twig', 'Node', 'Bootstrap']} img="demontrebellis" ext=".jpg" w="800" h="557">
            <a target="_blank" rel='noreferrer' href="https://www.Demontrebellis.com">Demontrebellis.com</a>, mise à jour d’un site multi langue. Récupération des données et des photos avec un script Nodejs (l'ancienne version était en Vanilla PHP de la fin des années 90) et création d'un backend avec Symfony.
          </Realisation>

          <Realisation techno={['Vuejs', 'Elctronjs']} img="rename-tekla-file" ext=".gif" w="800" h="800">
            Rename-tekla-file, application réalisée à l'origine avec Node-Webkit permet de scanner un dossier et de renommer les fichiers dxf. Utiliser pendant plusieurs années au sein de mon travail de laseriste en 2020 je le met à jour avec Electronjs et Vuejs en ajoutant des fonctionnalités comme la lecture d'un fichier texte pour récupérer des données (qté matière) puis les insérer dans une base de données d’un logiciel tierce pour le laser..
          </Realisation>

          <Realisation techno={['Electron', 'react']} img="cutting-list" ext=".gif" w="800" h="805">
            Cutting-list, application pour éditer des listes de coupes.
          </Realisation>

          <Realisation techno={['php', 'wordpress']} img="brault" ext=".jpg" w="800" h="592">
            <a target="_blank" rel='noreferrer' href="https://www.brault-metallerie.com">brault-metallerie.com</a>, réalisation d’un site vitrine sur Wordpress création du design et du thème personnalisé ainsi que la mise en ligne.
          </Realisation>

          <Realisation techno={['extjs', 'javascrip']} img="tache-laser" ext=".gif" w="800" h="805">
            Tâche laser, une sorte de todo liste améliorée pour gérer les tâches de mon ancien travail.
          </Realisation>

        </div>
      </section>
      <section>
        <div className="title"><h2>Mes compétences</h2></div>
        <div className="skill-list">
          <Skill activity="symfony" level="60" />
          <Skill activity="php" level="70" />
          <Skill activity="react" level="65" />
          <Skill activity="javascript" level="75" />
          <Skill activity="css" level="80" />
          <Skill activity="html" level="90" />
        </div>
      </section>
      <section id="contact" >
        <div className="title"><h2>Contact</h2></div>
        <Contact />
      </section>
    </div>
  );
}

export default App;
