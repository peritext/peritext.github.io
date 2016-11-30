
import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {StickyContainer, Sticky} from 'react-sticky';
const Section = require('react-scroll-nav').Section;
const Link = require('react-scroll-nav').Link;

require('./style.scss');

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLang: 'fr',
      otherLang : 'switch to english'
    };

    this.toggleLang = this.toggleLang.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  toggleLang() {
    if (this.state.activeLang === 'fr') {
      this.state.activeLang = 'en';
      this.state.otherLang = 'basculer en français';
    } else {
      this.state.activeLang = 'fr';
      this.state.otherLang = 'switch to english';
    }
    this.forceUpdate();
  }

  render() {
    return (
      <StickyContainer id="wrapper">
        <section id="brand-wrapper">
          <section id="brand-container">
            <iframe
              id="vimeo_player"
              src="https://player.vimeo.com/video/157160996?title=0&byline=0&portrait=0&autoplay=1&showplayer=0"
              width="100%"
              height="100%"
              frameBorder="0" />
            <div className="cache"/>
            <h1><Link name="what">Peritext <span className="arrow">↓</span> </Link>
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

            <Link id="logo-link" name="brand-container">
              <span className="logo">
                Peritext
              </span>
            </Link>
            <Link name="why">
              {
                this.state.activeLang === 'fr' ?
                  'Pourquoi' :
                  'Why'
              }
            </Link>
            <Link name="what">
              {
                this.state.activeLang === 'fr' ?
                  'Quoi' :
                  'What'
              }
            </Link>
            <Link name="who">
              {
                this.state.activeLang === 'fr' ?
                  'Pour qui' :
                  'For who'
              }
            </Link>
            <Link name="how">
              {
                this.state.activeLang === 'fr' ?
                  'Comment' :
                  'How'
              }
            </Link>
            <Link name="lang"><span onClick={this.toggleLang}>{this.state.otherLang}</span></Link>
          </header>
        </Sticky>

        <Section name="why">
          <div className="site-section">
            <ReactMarkdown source={
              this.state.activeLang === 'fr' ?
              require('raw!./../contents/why_fr.md') :
              require('raw!./../contents/why_en.md')
            }/>
          </div>
        </Section>

        <Section name="what">
          <div className="site-section">
            <ReactMarkdown source={
              this.state.activeLang === 'fr' ?
              require('raw!./../contents/what_fr.md') :
              require('raw!./../contents/what_en.md')
            }/>
          </div>
        </Section>

        <Section name="who">
          <div className="site-section">
            <ReactMarkdown source={
              this.state.activeLang === 'fr' ?
              require('raw!./../contents/who_fr.md') :
              require('raw!./../contents/who_en.md')
            }/>
          </div>
        </Section>

        <Section name="versions">
          <div className="site-section versions-section">
            <a target="blank" href="https://github.com/peritext/peritext" className="peritext-version">
              <img src="res/peritext-lib.gif"/>
              <h3>
                Peritext.js
              </h3>
              <p>
              {
                  this.state.activeLang === 'fr' ?
                    'Une bibliothèque de programmation en Javascript pouvant être utilisée par d\'autres applications - plutôt pour les développeurs et les designers' :
                    'A javascript programming library that can be used by other applications - rather for developers and designers'
                }
              </p>
            </a>
            <a target="blank" href="https://github.com/peritext/peritext-cli" className="peritext-version">
              <img src="res/peritext-cli.gif"/>
              <h3>
                Peritext-cli
              </h3>
              <p>
                {
                  this.state.activeLang === 'fr' ?
                    'Une application en ligne de commandes pour générer des documents pdf ou epub par exemple - plutôt pour les auteurs disposant d\’une bonne compétence technique' :
                    'A command-line application that is aimed at generating pdf or epub documents - rather for authors with good technological skills'
                }
              </p>
            </a>
            <a target="blank" href="https://github.com/peritext/peritext-api" className="peritext-version">
              <img src="res/peritext-api.gif"/>
              <h3>
                Peritext API
              </h3>
              <p>
                {
                  this.state.activeLang === 'fr' ?
                    'Une application pour serveur servant les données d\'un document peritext sur le web pour des applications tierces - plutôt pour les institutions et les organisations' :
                    'A server-side applicatino serving the data of a peritext document on the web for third-party applications or use - rather for institutions and organizations'
                }
              </p>
            </a>
            <a target="blank" href="https://github.com/peritext/lectio" className="peritext-version">
              <img src="res/peritext-lectio.gif"/>
              <h3>
                Lectio
              </h3>
              <p>
                {
                  this.state.activeLang === 'fr' ?
                    'Une application web représentant une implémentation possible parmi d\'autres de Peritext dans une application web - pour les particuliers et un usage quasi direct' :
                    'A web application representing a possible implementation of Peritext in a web application - for individuals and available for direct use'
                }
              </p>
            </a>
          </div>
        </Section>

        <Section name="how">
          <div className="site-section">
            <ReactMarkdown source={
              this.state.activeLang === 'fr' ?
              require('raw!./../contents/how_fr.md') :
              require('raw!./../contents/how_en.md')
            }/>
          </div>
        </Section>

        <footer>
          <p>
            Les différentes technologies de Peritext sont placée sous <a href="https://github.com/peritext/peritext/blob/master/LICENSE.md">license GNU</a>.
          </p>
          <p>
            Pour plus d'informations, contacter Robin de Mourat : robin.demourat@gmail.com
          </p>
        </footer>
      </StickyContainer>
    );
  }
}

export default Application;
