
import React, {Component} from 'react';
import {StickyContainer, Sticky} from 'react-sticky';
const Section = require('react-scroll-nav').Section;
const Link = require('react-scroll-nav').Link;

require('./style.scss');

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (

      <StickyContainer id="wrapper">
        <section id="brand-wrapper">
          <section id="brand-container">
            <iframe
              src="https://player.vimeo.com/video/157160996?title=0&byline=0&portrait=0&autoplay=1&showplayer=0"
              width="100%"
              height="100%"
              frameBorder="0" />
            <h1>Peritext <Link name="quoi"> ↓ </Link>
              <span id="subline">
            Publication / <span className="secondary">Context-oriented</span><br />
            Multimodale / <span className="secondary">Multimodal</span><br />
            Orientée contexte / <span className="secondary">Publishing</span><br />
              </span>
            </h1>
          </section>
        </section>
        <Sticky>
          <header id="menu" className={this.state.stickyMode ? 'active' : ''}>
            <span className="logo">
          Peritext
        </span>
            <Link name="quoi">
              <span className="french">Quoi</span> / <span className="english">What</span>
            </Link>

            <Link name="comment">
              <span className="french">Comment</span> / <span className="english">How</span>
            </Link>

            <Link name="qui">
              <span className="french">Qui</span> / <span className="english">Who</span>
            </Link>
          </header>
        </Sticky>
        <Section name="quoi">
          <div className="site-section">
            <section className="french">
              <h2>Qu'est-ce que Peritext</h2>
              <p>
Peritext est un projet de design et développement visant à améliorer et faciliter la production de documents académiques présentant des visualisations interactives de données, des médias audio-visuels, et/ou des références enrichies, tout cela à la fois en version papier et web.
            </p>
              <p>
Pour ce faire, il se fonde sur une proposition de modèle documentaire visant à repenser le rapport entre les textes et leur entours (références citées, données visualisées, références au web, ...) appelé RCC (Ressouces-Contextualiseurs-Contextualisations)
            </p>
              <p>
Le modèle soutenu par Peritext assure une qualité documentaire et une rigueur argumentative très élevée, tout en concentrant l'attention des auteurs sur la présentation et la mise en forme éditoriale des contenus.
            </p>
              <p>Le projet se décline en plusieurs sous-projets, destinés à des publics différents :</p>
              <ul>
                <li>
              Une <a href="https://github.com/peritext/peritext">bibliothèque de programmation</a> pouvant être utilisée par d'autres applications, ou comme un outil en lignes de commandes pour produire des documents pdf ou epub par exemple.
              </li>
                <li>
              Une <a href="https://github.com/peritext/peritext-api">API Rest</a> pouvant simplement servir les données d'un document peritext sur le web
              </li>
                <li>
              Une <a href="https://github.com/peritext/lectio">application web intitulée Lectio</a> représentant une implémentation parmi d'autres de Peritext dans une application web
              </li>
              </ul>
            </section>
            <section className="english">
              <h2>What is Peritext</h2>
              <p>
Peritext is a design & development project  aiming at improving and facilitating the production of media-rich, data-driven and multimodal academic documents.
            </p>
              <p>
            For this purpose, it is grounded on the proposal of a documentary model aiming at rethinking the links between texts and their surroundings (quoted references, visualized data, web references, ...) called RCC (Resources-Contextualizers-Contextualizations).
            </p>
              <p>
The model proposed by Peritext insure a great documentary quality and argumentative rigorousness, while focusing authors' attention on the presentation and editorial setup of their contents.
            </p>
              <p>The project is declined into several subprojects, adapted to different needs and skills:</p>
              <ul>
                <li>
              A <a href="https://github.com/peritext/peritext">javascript programming library</a> that can be used as a library in other applications, or as a command-line tool to produce pdf or epub files.
              </li>
                <li>
              A <a href="https://github.com/peritext/peritext-api">Rest API</a> simply serving the data of a peritext document n the web
              </li>
                <li>
              A <a href="https://github.com/peritext/lectio">web application named Lectio</a> representing an implementation (among others possible) of Peritext inside a web application.
              </li>
              </ul>
            </section>
          </div>
        </Section>

        <Section name="comment">
          <div className="site-section">
            <section className="french">
              <h2>Comment l'utiliser</h2>
              <p>
              Pour l'instant, Peritext est réservé à des auteurs ayant un minimum de connaissance du langage <a href="https://daringfireball.net/projects/markdown/syntax">Markdown</a> et qui savent manipuler un terminal de lignes de commandes. Ceux-ci peuvent se rendre sur
              <a href="https://github.com/peritext/peritext">la page du code open source de la bibliothèque peritext</a>.
            </p>
              <p>Tutoriaux et documentation à venir ...</p>
            </section>
            <section className="english">
              <h2>How to use it</h2>
              <p>
              Until now, Peritext is only accessible to authors having a basic understanding of the <a href="https://daringfireball.net/projects/markdown/syntax">Markdown language</a> and knowing how to manipulate a command lines terminal. These can go to the
              <a href="https://github.com/peritext/peritext">open source page of the Peritext library</a>.
            </p>
              <p>Tutorials and documentation to come ...</p>
            </section>
          </div>
        </Section>

        <Section name="qui">
          <div className="site-section">
            <section className="french">
              <h2>Contexte du projet</h2>
              <p>
              Le projet Peritext est conduit par Robin de Mourat dans le cadre d'un doctorat en esthétique pourtant sur la publication académique en sciences humaines.
            </p>
              <p>
            Il a été prototypé une première fois pour la réalisation du compagnon numérique de l'article
               <a href="http://modesofexistence.org/anomalies/">Clues. Anomalies. Understanding. Detecting underlying assumptions and expected practices in the Digital Humanities through the AIME project</a>,
              publié dans la revue Visible Language (49,3),
              à l'occasion d'une collaboration avec <a href="http://www.medialab.sciences-po.fr/fr/people/donato-ricci/">Donato Ricci</a> et
              l'équipe du projet <a href="http://modesofexistence.org/">Une Enquête sur les modes d'existence</a>.
            </p>
            </section>
            <section className="english">
              <h2>Project context</h2>
              <p>
              Peritext project is lead by Robin de Mourat in the frame of his PhD in digital aesthetics which deals with digital academic publishing.
            </p>
              <p>
               It has been prototyped a first time for the realization of the digital companion of the article
               <a href="http://modesofexistence.org/anomalies/">Clues. Anomalies. Understanding. Detecting underlying assumptions and expected practices in the Digital Humanities through the AIME project</a>,
               published in Visible Language journal (49,3),
               as the collaboration with <a href="http://www.medialab.sciences-po.fr/fr/people/donato-ricci/">Donato Ricci</a> and the team of
               <a href="http://modesofexistence.org/">An Inquiry Into Modes of Existence project</a>
              .
            </p>
            </section>
          </div>
        </Section>

        <footer>
          <img src="/src/img/logoUR2.png" />
          <p>
        La bibliothèque Peritext est placé sous <a href="https://github.com/peritext/peritext/blob/master/LICENSE.md">license GNU</a>
          </p>
        </footer>
      </StickyContainer>
    );
  }
}

export default Application;
