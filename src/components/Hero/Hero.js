import React from "react";
import PropTypes from "prop-types";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
        Rozpocznij swój własny biznes.
        </h1>

        <button onClick={scrollToContent} aria-label="scroll">
          Więcej
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: #041f60;
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          background-position: center;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};

          :before {
            left: 0;
            height: 0;
            position: absolute;
            content: '';
            background: #000;
            opacity: 0.3;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index:0;
          }
        }

        

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          line-height: 1.2;
          font-size: 36px;
          letter-spacing: 0.04em;
          font-weight: 600;
          text-remove-gap: both 0 "Open Sans";
          z-index: 1;

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: transparent;
          border: 1px solid #fff;
          color: #fff;
          font-family: Geomanist;
          padding: 13px 34px;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.115em;
          cursor: pointer;
          transition: .2s;
          outline-style: none;
          z-index: 1;

          &:hover {
            outline-style: none;
            background: #fff;
            color: #041e60;
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
            background-attachment: fixed;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
