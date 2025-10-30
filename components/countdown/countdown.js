// Simple countdown overlay — set targetISO to your desired local date-time (YYYY-MM-DDTHH:MM:SS)
(function(){
  // TODO: change this to your target local date/time
  const targetISO = '2025-10-31T00:00:00';
  const target = new Date(targetISO);
  const overlay = document.getElementById('countdown-overlay');
  const timerEl = document.getElementById('countdown');
  const titleEl = document.getElementById('countdown-title');

  if (!overlay || !timerEl) return;

  function pad(n){ return String(n).padStart(2,'0'); }

  // timing settings
  const PRE_FADE_DELAY_MS = 900;   // pause after target reached before starting fade
  const FADE_DURATION_MS = 1300;   // matches CSS transition duration

  function update(){
    const now = new Date();
    const diff = target - now;
    if (diff <= 0){
      // announce and reveal (with a slight delay + longer fade)
    //   timerEl.textContent = 'The surprise is revealed!';
      titleEl.textContent = 'YYYEEEE 🎉';

      // wait a moment, then reveal content and start fade
      setTimeout(()=>{
        const anim = document.getElementById('birthday-animation');
        if (anim) anim.classList.remove('hidden');
        overlay.classList.add('fade-out');
        // remove overlay after fade completes (give a small buffer)
        setTimeout(()=> {
          if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, FADE_DURATION_MS + 120);
      }, PRE_FADE_DELAY_MS);

      clearInterval(interval);
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
    const secs = Math.floor((diff % (1000*60)) / 1000);
    timerEl.textContent = `${days}d ${pad(hours)}h ${pad(mins)}m ${pad(secs)}s`;
  }

  update();
  const interval = setInterval(update, 1000);
})();