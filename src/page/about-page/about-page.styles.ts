import styled from 'styled-components';
import aboutPic from '../../assets/about-img.jpg';
import { boxes, bp } from '../../styles/variables';

export const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem ${boxes.lgSpacing};

  @media (${bp.md}) {
    padding: 0 ${boxes.mdSpacing};
  }

  @media (${bp.sm}) {
    padding: 0 ${boxes.smSpacing};
  }
`;

export const TitlePage = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  padding: 18px 0 24px 0;

  @media (${bp.md}) {
    padding: 18px 0 18px 0;
  }
`;

export const AboutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (${bp.md}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
`;

export const AboutPic = styled.div`
  max-width: 520px;
  width: 100%;
  height: 670px;
  background: url(${aboutPic}) center/cover no-repeat;

  @media (${bp.md}) {
    max-width: 100%;
    height: 400px;
  }
`;

export const TitleBox = styled.h3`
  font-size: 2.6rem;
  letter-spacing: 1;
  margin-top: -10px;

  @media (${bp.sm}) {
    font-size: 2.1rem;
  }
`;

export const TextParagraph = styled.p`
  font-size: 1.7rem;

  &:not(:last-child) {
    margin: 1.8rem 0;
  }

  @media (${bp.sm}) {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.8px;
    line-height: 1.6;

    &:not(:last-child) {
      margin: 1.3rem 0;
    }
  }
`;
