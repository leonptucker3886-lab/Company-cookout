export default function Home() {
  return (
    <div style={{ background: '#0c0400', fontFamily: 'Oswald, sans-serif', color: '#FFF8DC', minHeight: '100vh', overflowX: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div id="landing" style={{ maxWidth: '800px', width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="logo-wrap" style={{ textAlign: 'center' }}>
          <div className="ccg-logo" style={{ position: 'relative', display: 'inline-block' }}>
            <div className="logo-badge" style={{ width: 'clamp(200px,50vw,275px)', height: 'clamp(200px,50vw,275px)', borderRadius: '50%', background: 'radial-gradient(circle at 40% 38%, #5C3318 0%, #2d1000 55%, #0d0400 100%)', border: '5px solid #B87333', boxShadow: '0 0 0 3px rgba(184,115,51,.25), 0 0 50px rgba(255,107,26,.3), 0 0 100px rgba(255,70,0,.15), inset 0 2px 0 rgba(255,255,255,.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle at 50% 0%, rgba(255,200,50,.08) 0%, transparent 60%)' }}></div>
              <div className="logo-icons" style={{ fontSize: 'clamp(2rem,6vw,2.8rem)', lineHeight: 1, letterSpacing: '4px', animation: 'icon-bob 3s ease-in-out infinite' }}>🔥🐷🍺</div>
              <div className="logo-txt-inner" style={{ fontFamily: 'Rye, cursive', fontSize: 'clamp(.75rem,2.5vw,1rem)', color: '#FFD700', textShadow: '0 0 12px rgba(255,215,0,.5)', letterSpacing: '3px', textAlign: 'center', lineHeight: '1.3' }}>
                Company Cookout
                <span style={{ display: 'block', fontSize: '.65em', color: '#D4894E', letterSpacing: '4px' }}>Gaming</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="main-title" style={{ fontFamily: 'Rye, cursive', fontSize: 'clamp(2rem,8vw,4rem)', color: '#FFD700', textShadow: '0 0 30px rgba(255,215,0,.7), 3px 3px 0 #FF3300, 6px 6px 0 #600', letterSpacing: '5px', textAlign: 'center', lineHeight: '1.1' }}>
            Sun N Fun<br />Slots
          </div>
          <div className="main-sub" style={{ fontSize: '.68rem', color: '#B87333', letterSpacing: '5px', textTransform: 'uppercase', textAlign: 'center', opacity: 0.7, marginTop: '2px' }}>
            Kick the Pig
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '1rem', color: '#D4894E', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px', marginBottom: '10px' }}>
          Featuring the hit <span style={{ color: '#FFD700', fontFamily: 'Rye, cursive', textShadow: '0 0 10px rgba(255,215,0,.5)', fontSize: 'clamp(2rem,8vw,4rem)' }}>Sun N Fun Slots</span>
        </div>

        <button
          className="enter-btn"
          onClick={() => window.location.href = 'games.html'}
          style={{
            padding: '20px 40px',
            background: 'linear-gradient(180deg, #FF9500 0%, #CC2000 100%)',
            border: '3px solid #FFD700',
            borderRadius: '50px',
            color: '#FFF8DC',
            cursor: 'pointer',
            textShadow: '1px 1px 3px rgba(0,0,0,.6)',
            fontFamily: 'Rye, cursive',
            fontSize: 'clamp(1.2rem,4vw,1.75rem)',
            letterSpacing: '5px',
            boxShadow: '0 0 28px rgba(255,100,0,.4), 0 5px 0 #880000',
            transition: 'all .1s'
          }}
        >
          🎰 ENTER CASINO 🎰
        </button>
        <div className="tagline" style={{ fontSize: '.58rem', color: 'rgba(184,115,51,.4)', letterSpacing: '2px', textAlign: 'center', marginTop: '4px' }}>
          Pig Pit Edition
        </div>
      </div>
    </div>
  )
}
