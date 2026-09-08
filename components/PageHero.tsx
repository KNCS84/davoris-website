import Image from 'next/image';
import { Container } from '@/components/primitives/Container';
import { Eyebrow } from '@/components/primitives/Eyebrow';
import { LineMask } from '@/components/motion/LineMask';

interface Props {
  eyebrow: string;
  titleLines: string[];
  lead?: string;
  image: string;
  alt: string;
}

export function PageHero({ eyebrow, titleLines, lead, image, alt }: Props) {
  return (
    <header className="pagehero section--dark">
      <div className="pagehero__media" aria-hidden="true">
        <Image src={image} alt="" fill sizes="100vw" priority />
      </div>
      <Container className="pagehero__inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <LineMask as="h1" className="h1 mt-stack" lines={titleLines} />
        {lead ? <p className="lead mt-stack">{lead}</p> : null}
      </Container>
    </header>
  );
}
