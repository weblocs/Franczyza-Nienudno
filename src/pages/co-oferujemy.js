import React, {Component} from "react";
import Link from 'gatsby-link';

import background from './images/meeting.jpg';

class About extends Component {
    render() {
        return(
        <div>
            <div className="article-title">
                <article>
                <h1>Co oferujemy</h1>
                <p>Prowadzimy szkolenia, zajmujemy się administracją, metodyką oraz marketingiem.</p>
                </article>
            </div>
            <article>
            
            <h1>Szkolenia</h1>
            <p>Darmowe szkolenia dla franczyzobiorców, w ramach opłaty franczyzowej.
Przekazujemy Ci cały know-how. Nasi metodycy przeprowadzą kompleksowe szkolenie dzięki 
któremu w praktyce będziesz wiedzieć jak skutecznie rozwijać swój biznes.
Szkolenie Startowe odbywa się w naszym lokalu w Warszawie. W trakcie roku nasz metodyk odwiedza Twoją filię, 
żeby odpowiadać na Twoje pytania i pomóc utrzymywać ci standardy NIENUDNO.PL</p>

<h1>Administracja</h1>
<p>Dzięki tępie rozwoju Nienudno.pl nasze biuro wyspecjalizowało się w paracy na najwyższym poziomie, a Ty możesz korzystać z doświadczenia które Ci przekażemy.
Oprócz codziennego wsparcia zespołu administracyjnego otrzymasz od nas niezbędny pakiet umów oraz narzędzia do sprawnego zarządzania Twoimi finansami.</p>

<h1>Metodyka</h1>
<p>Żeby Twój biznes odniósł sukces musi się wyróżniać a do tego potrzebny jest produkt na najwyższym poziomie. Włożyliśmy dużo pracy aby produkt który oferujemy był naprawde innowacyjny. Nasz autorski program to nie tylko świetna zabawa ale przede wszystkim system który realizuje konkretną ścieżkę edukacyjną.</p>

<h1>Marketing</h1> 
<p>Śmiało możemy powiedzieć, że marketing na Start to jest nasz konik.
Od 2014r. nasza marka stałą się jedną z bardziej rozpoznawanych na rynku zajęć pozalekcyjnych.Zapewniamy Ci plan promocji dostosowany do twojej lokalizacji oraz wszystkie potrzebne materiały marketingowe ( ulotki, plakaty, Roll-upy, Banery ).</p>
<p>Ponad 8.000 zapisów na sezon 2018/2019 !</p>
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