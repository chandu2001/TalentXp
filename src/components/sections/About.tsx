import AnimatedSection from '../ui/AnimatedSection';
import AboutIntro from '@/components/about/AboutIntro';
import GlobalReach from '@/components/about/GlobalReach';
import MissionAndValues from '@/components/about/MissionAndValues';
import TeamSection from '@/components/about/TeamSection';

const About = () => {
  return (
    <>
      <AnimatedSection>
        <AboutIntro />
      </AnimatedSection>
      <AnimatedSection>
        <GlobalReach />
      </AnimatedSection>
      <AnimatedSection>
        <MissionAndValues />
      </AnimatedSection>
      <AnimatedSection>
        <TeamSection />
      </AnimatedSection>
    </>
  );
};

export default About;
