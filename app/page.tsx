import { Hero } from '@/components/sections/Hero';
import { Positioning } from '@/components/sections/Positioning';
import { Capabilities } from '@/components/sections/Capabilities';
import { Craft } from '@/components/sections/Craft';
import { Proof } from '@/components/sections/Proof';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { Engagement } from '@/components/sections/Engagement';
import { Close } from '@/components/sections/Close';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Capabilities />
      <Craft />
      <Proof />
      <MarqueeStrip />
      <Engagement />
      <Close />
    </>
  );
}
