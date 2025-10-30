async function loadFragments() {
    const map = {
        'birthday-animation': 'components/birthday-animation.html',
        // 'countdown': 'components/countdown.html'
    };
    const promises = Object.entries(map).map(async ([id, url]) => {
        const el = document.getElementById(id);
        if (!el) return;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Failed to load ${url}`);
            el.innerHTML = await res.text();
        } catch (e) {
            console.error(e);
        }
    });
    await Promise.all(promises);
}
// call loader and then append scripts that depend on injected markup
loadFragments().then(() => {
    const add = (src) => {
        const s = document.createElement('script');
        s.src = src;
        s.defer = false;
        document.body.appendChild(s);
    };
    
    // add('countdown/countdown.js');
});