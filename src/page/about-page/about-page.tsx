import React from 'react';
import Header from '../../components/header/header';
import {
  AboutSection,
  TitlePage,
  AboutBox,
  AboutPic,
  TitleBox,
  TextParagraph
} from './about-page.styles';

function AbouPage(): JSX.Element {
  return (
    <>
      <Header />
      <AboutSection>
        <TitlePage>About</TitlePage>
        <AboutBox>
          <AboutPic></AboutPic>
          <div>
            <TitleBox>About BookHub</TitleBox>
            <TextParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</TextParagraph>
            <TextParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</TextParagraph>
          </div>
        </AboutBox>
      </AboutSection>
    </>
  )
}

export default AbouPage;
