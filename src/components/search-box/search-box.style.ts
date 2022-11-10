import styled from 'styled-components';
import backgroundPic from '../../assets/background.jpg';
import { stable, boxes } from '../../styles/variables';

export const SearchContainer = styled.div`
  width: 100%;
  min-height: 75vh;
  background: url(${backgroundPic}) center/cover no-repeat;
  background-color: ${stable.bg1};
  padding: 0 ${boxes.lgSpacing};

  display:  flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: rgb(247, 247, 247);
`;

export const SearchBoxTitle = styled.h2`
  font-size: 4.2rem;
  text-transform: capitalize;
`;

export const SearchBoxText = styled.p`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0 auto;
  margin-bottom: 2.8rem;
  opacity: 0.8;
  max-width: 770px;
`;
