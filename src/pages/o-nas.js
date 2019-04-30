import React, {Component} from "react";
import Link from 'gatsby-link';

import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

class About extends Component {
    
    render() {
        const {
            data: {
                placeholderImage
            }
          } = this.props;

        return(
            
        <div>
            <BackgroundImage Tag="div"
                           fluid={placeholderImage.childImageSharp.fluid} 
            >
                <div className="filter">
                    <article className="article">
                        <h1>O nas</h1>
                        <p>Jesteśmy pionierami innowacyjnej edukacji i wiemy, że codzienność nie jest nudna! </p>
                    </article>
                </div>
            </BackgroundImage>
            
            <article>
                <h1>Nauka jest fascynująca</h1>
                <p>Celem naszej pracy, jest pokazanie dzieciom, że nauka nie jest nudna - wręcz przeciwnie jest fascynująca.</p>
                <p>Nauczyciel pełni rolę instruktora, który aktywnie angażuje dzieci w historię danych zajęć. 
                Uczymy przez zabawę! Bawimy się przez naukę! </p>
                <Link className="button" to="/kontakt">
                    Skantakuj się z nami
                </Link>
            </article>
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
                        margin: 1.5em 0 0.8em;
                    }

                    &.article {
                        padding: 180px 0 140px;
                        margin: 0 auto;
                        z-index: 2;
                        position:relative;

                        h1, p {
                            color: #fff;
                            max-width: 305px;
                            margin-bottom: 0;
                            margin-top: 0;
                            position: relative;
                            z-index: 3;
                        }

                        h1 {
                            margin-bottom: 10px;
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
        placeholderImage: file(relativePath: { eq: "jpg/offer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `