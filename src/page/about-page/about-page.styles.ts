import styled from 'styled-components';
import aboutPic from '../../assets/about-img.jpg';

export const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2.5rem;
`;

export const TitlePage = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  padding: 18px 0 24px 0;
`;

export const AboutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
`;

export const AboutPic = styled.div`
  max-width: 520px;
  width: 100%;
  height: 670px;
  background: url(${aboutPic}) center/cover no-repeat;
`;

export const TitleBox = styled.h3`
  font-size: 2.6rem;
  letter-spacing: 1;
  margin-top: -10px;
`;

export const TextParagraph = styled.p`
  font-size: 1.7rem;

  &:not(:last-child) {
    margin: 1.8rem 0;
  }
`;