import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm <br />
          Samuel Ndungu
        </SectionTitle>
        <SectionText>
        Am a Nairobi based software engineer who specializes in building exceptional digital experiences. 
        </SectionText>
        
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;