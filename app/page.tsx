import About from "@/components/About";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero/>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection delay={0.1}><Skills /></AnimatedSection>
      <AnimatedSection delay={0.2}><Projects /></AnimatedSection>
      <AnimatedSection delay={0.3}><Resume /></AnimatedSection>
      <AnimatedSection delay={0.4}><Contact /></AnimatedSection>
    </>
  );
}
