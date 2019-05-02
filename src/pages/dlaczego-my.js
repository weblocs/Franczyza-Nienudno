import React, {Component} from "react";
import Link from 'gatsby-link';

import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class About extends Component {
    
    render() {
        const dataChart = [
        {name: '2016', uczniów: 1000, pv: 2400, amt: 2400},
        {name: '2017', uczniów: 2000, pv: 2400, amt: 2400},
        {name: '2018', uczniów: 3000, pv: 2400, amt: 2400},
        {name: '2019', uczniów: 4000, pv: 2400, amt: 2400}];
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
                        <h1>Dlaczego my</h1>
                        <p>Dzięki naszym metodykom stworzyliśmy unikatowy program edukacyjny. </p>
                    </article>
                </div>
            </BackgroundImage>
            
            <article>
                <h1>Biznes bez zbędnego ryzyka</h1>
                <p>Stawiamy na dynamiczny rozwój i szybkie efekty wspólnej pracy. Dokładnie wiemy jak powtórzyć sukces u Ciebie w mieście.</p>
                <p>Pomożemy Ci zbudować Twój biznes bez zbędnego ryzyka. </p>

                <div className="chartBox">
                <BarChart width={600} height={300} data={dataChart}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar type="monotone" dataKey="uczniów" fill="#8884d8" barSize={30} />
                </BarChart>
                </div>

                <Link className="button" to="/kontakt">
                    Skantakuj się z nami
                </Link>
            </article>
            <style jsx>{`
                .chartBox {
                    overflow-y: scroll;
                }
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
                        padding: 180px 10px 140px;
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
        placeholderImage: file(relativePath: { eq: "jpg/spacex.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `