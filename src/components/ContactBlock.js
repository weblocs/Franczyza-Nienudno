import React from "react";
import { Link } from "gatsby";

const ContactBlock = props => {

  return (
    <React.Fragment>
      <section className="blocks">
        <div className="row">
            <div className="column">
                <h3>Telefon</h3>
                <p>Zadzwoń i dowiedz się więcej o naszej ofercie.</p>
                <div>
                <a className="button" href="tel:507-07-07-27">
                507-07-07-27
                </a>
                </div>
            </div>
            <div className="column">
                <h3>E-mail</h3>
                <p>Napisz, aby otrzymać prezentacje pdf z ofertą franczyzową.</p>
                    <a className="button" href="mailto:franczyza@nienudno.pl">
                kontakt@nienudno.pl
                </a>
            </div>
            <div className="column">
                <h3>Strona internetowa</h3>
                <p>Przyczytaj więcej o naszej firmie na nienudno.pl.
                </p>
                <a target="_blank" className="button" href="https://nienudno.pl">
                    nienudno.pl
                </a>
            </div>
            <div className="column">
                <h3>Facebook</h3>
                <p>Poznaj nas lepiej dzięki naszym social mediom.
                </p>
                <a target="_blank" className="button" href="https://facebook.com/nienudnopl">
                    facebook.com/nienudnopl
                </a>
            </div>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
      .blocks {
          padding: 100px 0;
      }
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .column {
            flex: 100%;
            max-width: 100%;
            margin: 30px;

            h3 {
                color: #005495;
                margin-bottom: 21px;
                font-size: 16px;
                font-weight: 600;
                text-transform: none;
                letter-spacing: 0.12em;
            }

            p {
                color: #777;
                font-size: 14px;
                font-weight: 300;
                line-height: 1.86;
            }  
        }
        @from-width tablet {
            .column {
              flex: calc(50% - 60px);
              width: calc(50% - 60px);
            }
        }

        @from-width desktop {
            .row {
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
            }
            .column {
              flex: calc(25% - 60px);
              width: calc(25% - 60px);
            }
        }
      `}</style>
    </React.Fragment>
  );
};

ContactBlock.propTypes = {
};

export default ContactBlock;
