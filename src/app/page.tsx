import { Container } from "@/components/common/Container";
import { Hero } from "@/components/layout/Hero";
import { ExperienceList } from "@/components/sections/ExperienceList";
import { EducationList } from "@/components/sections/EducationList";
import { StackList } from "@/components/sections/StackList";
import { ProjectList } from "@/components/sections/ProjectList";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/lib/animations";

import { constructMetadata } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Om Thakkar | Portfolio",
  description: "CS student at UW-Madison. Founder @ Homey. Building things that matter.",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Container>
        <Hero />
        <AnimatedSection delay={0}>
          <ExperienceList />
        </AnimatedSection>
        <AnimatedSection delay={0}>
          <EducationList />
        </AnimatedSection>
        <AnimatedSection delay={0}>
          <StackList />
        </AnimatedSection>
        <AnimatedSection delay={0}>
          <ProjectList />
        </AnimatedSection>
        <AnimatedSection delay={0}>
          <Footer />
        </AnimatedSection>
      </Container>
    </div>
  );
}
