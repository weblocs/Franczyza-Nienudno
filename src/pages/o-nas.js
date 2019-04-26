import React, {Component} from "react";
import Link from 'gatsby-link';

import background from './images/offer.jpg';

class About extends Component {
    render() {
        return(
        <div>
            <div className="article-title">
                <article>
                <h1>O nas</h1>
                <p>Jesteśmy pionierami innowacyjnej edukacji i wiemy, że codzienność nie jest nudna! </p>
                </article>
            </div>
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
                }
                .article-title {
                background: #1f65a0;
                background-image: url(${background});
                background-position: center;
                background-size: cover;
                padding: 100px 0;
                min-height: 300px;
                position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        content: '';
                        background: #1d3c54;
                        opacity: 0.25;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        z-index: 0;
                    }
                    @media(min-width: 1000px) {
                        margin-top: 80px;
                        background-attachment: fixed;
                    }
                    article {
                        z-index: 1;
                        position:relative;

                        h1, p {
                            color: #fff;
                            max-width: 305px;
                            margin-bottom: 0;
                            margin-top: 0;
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