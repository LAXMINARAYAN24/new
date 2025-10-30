(function () {
    const countdownEl = document.getElementById('countdown');
    const displayEl = document.getElementById('countdown-display');
    const revealEl = document.getElementById('birthday-animation');

    // --- easy-to-edit target format ---
    // Edit CODED_OPEN_AT before this script (e.g. in index.html):
    //   <script>const CODED_OPEN_AT = new Date('2025-11-02T09:30:00');</script>
    //
    // Or change the fallbackTarget below:
    const fallbackTarget = new Date('2025-10-30T19:20:00');
    const targetMs = (typeof CODED_OPEN_AT !== 'undefined' && CODED_OPEN_AT instanceof Date && !isNaN(CODED_OPEN_AT))
        ? CODED_OPEN_AT.getTime()
        : fallbackTarget.getTime();
    let target = new Date(targetMs);
    // ------------------------------------

    function formatTime(diffMs) {
        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${days}d ${String(hours).padStart(2,'0')}h ${String(minutes).padStart(2,'0')}m ${String(seconds).padStart(2,'0')}s`;
    }

    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            if (timer) clearInterval(timer);
            if (displayEl) displayEl.textContent = '0d 00h 00m 00s';
            setTimeout(() => {
                if (countdownEl) countdownEl.classList.add('hidden');
                if (revealEl) {
                    // remove hidden then add revealed so CSS transition plays
                    revealEl.classList.remove('hidden');
                    requestAnimationFrame(() => revealEl.classList.add('revealed'));
                }
            }, 800);
            return;
        }
        if (displayEl) displayEl.textContent = formatTime(diff);
    }

    // initialize
    let timer = null;
    update();
    timer = setInterval(update, 1000);
})();