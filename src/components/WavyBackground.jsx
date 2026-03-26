export default function WavyBackground({ colors = ['var(--ink-coral)', 'var(--ink-teal)', 'var(--ink-blue)'], className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="wave-animation absolute bottom-0 left-0 h-[180px] w-[200%] opacity-[0.07]"
        viewBox="0 0 2880 180"
        preserveAspectRatio="none"
      >
        <path
          fill={colors[0]}
          d="M0,80 C360,160 720,0 1080,80 C1440,160 1800,0 2160,80 C2520,160 2880,0 2880,80 L2880,180 L0,180 Z"
        />
      </svg>
      <svg
        className="wave-animation absolute bottom-0 left-0 h-[140px] w-[200%] opacity-[0.05]"
        style={{ animationDuration: '25s', animationDirection: 'reverse' }}
        viewBox="0 0 2880 140"
        preserveAspectRatio="none"
      >
        <path
          fill={colors[1]}
          d="M0,60 C480,120 960,0 1440,60 C1920,120 2400,0 2880,60 L2880,140 L0,140 Z"
        />
      </svg>
      <svg
        className="wave-animation absolute bottom-0 left-0 h-[100px] w-[200%] opacity-[0.04]"
        style={{ animationDuration: '30s' }}
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
      >
        <path
          fill={colors[2]}
          d="M0,40 C600,100 1200,0 1800,40 C2400,100 2880,0 2880,40 L2880,100 L0,100 Z"
        />
      </svg>
    </div>
  )
}
