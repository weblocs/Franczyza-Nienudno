
import React, {Component} from "react";
import Link from 'gatsby-link';

import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

class About extends Component {
    
    render() {
        const {
            data: {
                placeholderImage, administration, marketing
            }
          } = this.props;

        return(
            
        <div>
            <BackgroundImage Tag="div"
                           fluid={placeholderImage.childImageSharp.fluid} 
            >
                <div className="filter">
                    <article className="article">
                        <h1>Co oferujemy</h1>
                        <p>Prowadzimy szkolenia, zajmujemy się administracją, metodyką oraz marketingiem.</p>
                    </article>
                </div>
            </BackgroundImage>
            
            <article>
                <h1>Szkolenia</h1>
                <p>Darmowe szkolenia dla franczyzobiorców, w ramach opłaty franczyzowej.
                Przekazujemy Ci cały know-how. Nasi metodycy przeprowadzą kompleksowe szkolenie dzięki 
            któremu w praktyce będziesz wiedzieć jak skutecznie rozwijać swój biznes.
            Szkolenie Startowe odbywa się w naszym lokalu w Warszawie. W trakcie roku nasz metodyk odwiedza Twoją filię, 
            żeby odpowiadać na Twoje pytania i pomóc utrzymywać ci standardy NIENUDNO.PL</p>
            </article>

            <BackgroundImage Tag="div"
                           fluid={administration.childImageSharp.fluid} 
            >
                <div className="filter">
                    <article className="article">
                        <h1>Administracja</h1>
                        <p>Dzięki tępie rozwoju Nienudno.pl nasze biuro wyspecjalizowało się w paracy na najwyższym poziomie, a Ty możesz korzystać z doświadczenia które Ci przekażemy.
                        Oprócz codziennego wsparcia zespołu administracyjnego otrzymasz od nas niezbędny pakiet umów oraz narzędzia do sprawnego zarządzania Twoimi finansami.</p>
                    </article>
                </div>
            </BackgroundImage>

            <article>
                <h1>Metodyka</h1>
                <p>Żeby Twój biznes odniósł sukces musi się wyróżniać a do tego potrzebny jest produkt na najwyższym poziomie. Włożyliśmy dużo pracy aby produkt który oferujemy był naprawde innowacyjny. Nasz autorski program to nie tylko świetna zabawa ale przede wszystkim system, który realizuje konkretną ścieżkę edukacyjną.</p>
            </article>

            <BackgroundImage Tag="div"
                           fluid={marketing.childImageSharp.fluid} 
            >
                <div className="filter">
                    <article className="article">
                        <h1>Marketing</h1> 
                        <p>Śmiało możemy powiedzieć, że marketing na Start to jest nasz konik.
                        Od 2014r. nasza marka stałą się jedną z bardziej rozpoznawanych na rynku zajęć pozalekcyjnych.Zapewniamy Ci plan promocji dostosowany do twojej lokalizacji oraz wszystkie potrzebne materiały marketingowe ( ulotki, plakaty, Roll-upy, Banery ).</p>
                        <h3>Ponad 8.000 zapisów na sezon 2018/2019 !</h3>
                                    <Link className="button" to="/kontakt">
                                            Skantakuj się z nami
                                    </Link>
                    </article>
                </div>
            </BackgroundImage>


                
            <style jsx>{`
                .filter {
                    background: rgba(0,0,0,.3);
                    z-index: 1;
                    position:relative;
                }
                article {
                    max-width: 800px;
                    padding: 10px;
                    margin: 50px auto;
                    p {
                        font-size: 1.1em;
                        line-height: 1.6;
                        margin: 0 0 1.5em;
                    }
                    h1 {
                        margin: 0.3em 0 0.8em;
                    }

                    &.article {
                        padding: 180px 10px 140px;
                        margin: 0 auto;
                        z-index: 2;
                        position:relative;

                        h1, p, h3 {
                            color: #fff;
                            max-width: 405px;
                            margin-bottom: 0;
                            margin-top: 0;
                            position: relative;
                            z-index: 3;
                        }

                        h1 {
                            margin-bottom: 10px;
                        }

                        h3 {
                            font-weight: 600;
                            margin-top: 0.8em;
                        }
                    }
                }

            

                
                    
            `}</style>
        </div>
        
        );
    }
}

export default About;

export const query = graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jpg/meeting.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        administration: file(relativePath: { eq: "jpg/administration.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        marketing: file(relativePath: { eq: "jpg/marketing.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
