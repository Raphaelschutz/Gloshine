// Logo une ligne validé par Glody. Les couleurs suivent le thème par les variables CSS.
// `id` doit être unique dans la page : il nomme le dégradé du carré.
export function Logo({ id, className = 'logo' }: { id: string; className?: string }) {
  const display = { fontFamily: 'var(--display)' };
  return (
    <svg viewBox="0 0 650 140" role="img" aria-label="Glo Shine Cleaning" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--brand-a)' }} />
          <stop offset="1" style={{ stopColor: 'var(--brand-b)' }} />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="120" height="120" rx="30" fill={`url(#${id})`} />
      <text x="70" y="85" textAnchor="middle" fontWeight="700" fontSize="42" letterSpacing="1" style={{ ...display, fill: 'var(--logo-gsc)' }}>
        GSC
      </text>
      <g data-anim="etincelle">
        <path d="M0,-10 Q1.2,-1.2 10,0 Q1.2,1.2 0,10 Q-1.2,1.2 -10,0 Q-1.2,-1.2 0,-10 Z" transform="translate(108 32) scale(0.9)" style={{ fill: 'var(--logo-spark)' }} />
      </g>
      <text x="154" y="88" fontWeight="600" fontSize="52" style={{ ...display, fill: 'var(--logo-name)' }}>
        Glo Shine
        <tspan fontWeight="500" style={{ fill: 'var(--logo-cleaning)' }}> Cleaning</tspan>
      </text>
    </svg>
  );
}
