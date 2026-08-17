import { STATS } from '@/content';
import { CountUp } from './CountUp';

export function Stats() {
  return (
    <div className="stats">
      {STATS.map((s, i) => (
        <div className="stat" key={i}>
          <div className="stat__value">
            <CountUp value={s.value} suffix={s.suffix} />
          </div>
          <div className="stat__label">
            {s.line1}
            <br />
            {s.line2}
          </div>
        </div>
      ))}
    </div>
  );
}
