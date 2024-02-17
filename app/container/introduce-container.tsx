import Container from "@/app/ui/container";
import { Introduce, SkillfulCard } from "@/app/ui/introduce";
import A11yHidden from "@/app/ui/a11y-hidden";

export default function IntroduceContainer() {
  return (
    <Container
      as={'section'}
    >
      <A11yHidden as='h2'>introduce</A11yHidden>
      <Introduce />
      <A11yHidden as='h2'>skillful</A11yHidden>
      <SkillfulCard>
        <SkillfulCard.Item skill={'HTML'} year={4} />
        <SkillfulCard.Item skill={'CSS'} year={4} />
        <SkillfulCard.Item skill={'Javascript'} year={4} />
        <SkillfulCard.Item skill={'Accessibility'} year={4} />
        <SkillfulCard.Item skill={'React'} year={4} />
        <SkillfulCard.Item skill={'Sass'} year={3} />
      </SkillfulCard>
    </Container>
  );
}
