import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  margin: 20px auto;
  padding: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: var(--dashboardRadius);
  background-color: var(--lightGray);
  overflow-y: auto;

  /* Scrollbar */
  &&::-webkit-scrollbar {
    width: 10px;
  }
  &&::-webkit-scrollbar-track {
    background-color: var(--navbarColor);
    border-radius: 50px;
  }
  &&::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(20px);
    border-radius: 50px;
  }
`;

const AboutHeader = styled.h1`
  margin: 1rem 0;
`;
const AboutHeaderImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: top;
  height: 350px;
  border-radius: var(--dashboardRadius)
    var(--dashboardRadius) 0 0;
`;
const AboutParagraph = styled.p`
  font-size: 1.2rem;
  width: 90%;
  margin: 1rem auto;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutHeaderImg
        src={
          process.env.PUBLIC_URL + 'img/dogGang.jpg'
        }
      />
      <AboutHeader>
        Our legacy and experience in the field
      </AboutHeader>
      <AboutParagraph>
        Doggo ipsum smol very jealous pupper. H*ck blep
        tungg, h*ck. The neighborhood pupper wow such
        tempt maximum borkdrive super chub, pupper.
        Clouds ur givin me a spook many pats I am bekom
        fat, wow very biscit sub woofer. Doggo dat
        tungg tho shooberino ur givin me a spook borkf,
        shibe much ruin diet. Doggo big ol shoob I am
        bekom fat, dat tungg tho very good spot. You
        are doin me a concern thicc maximum borkdrive
        super chub length boy, long doggo noodle horse.
      </AboutParagraph>
      <AboutParagraph>
        Shoober extremely cuuuuuute long woofer the
        neighborhood pupper, noodle horse. Stop it fren
        dat tungg tho you are doing me the shock long
        woofer long water shoob, doggorino blop. Boof
        long doggo bork, most angery pupper I have ever
        seen. Sub woofer maximum borkdrive ruff lotsa
        pats floofs, woofer most angery pupper I have
        ever seen heckin good boys. shibe shoober.
        Doggorino heckin good boys and girls you are
        doing me a frighten adorable doggo boofers,
        smol borking doggo with a long snoot for pats
        shibe blop. Long bois wow such tempt shoob blop
        very jealous pupper, mlem heckin good boys and
        girls mlem.
      </AboutParagraph>
      <AboutParagraph>
        Heckin good boys he made many woofs thicc
        boofers long water shoob length boy, pupperino
        fat boi aqua doggo. Corgo fat boi noodle horse
        h*ck extremely cuuuuuute shoober boofers,
        borkdrive noodle horse puggo floofs borking
        doggo. He made many woofs borkdrive long bois
        he made many woofs such treat he made many
        woofs yapper, boofers smol ur givin me a spook
        boofers floofs. What a nice floof doggo very
        taste wow wrinkler heckin borkdrive, waggy wags
        most angery pupper I have ever seen pupper.
        What a nice floof boofers clouds much ruin diet
        wow such tempt most angery pupper I have ever
        seen, long doggo borkdrive doge puggorino very
        good spot, heckin good boys puggo wow very
        biscit heckin angery woofer. Ruff much ruin
        diet you are doing me the shock maximum
        borkdrive, very hand that feed shibe bork.
      </AboutParagraph>
    </AboutWrapper>
  );
};

export default About;
