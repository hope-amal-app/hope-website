const btn = document.getElementById('playBtn');
  const status = document.getElementById('status');
  const wave = document.getElementById('wave');
  const adviceAudio = new Audio('audioContinue1.wav');
  adviceAudio.preload = 'metadata';
  for (let i = 0; i < 24; i++) {
    const bar = document.createElement('span');
    bar.style.setProperty('--h', (8 + Math.abs(Math.sin(i * 1.7)) * 26) + 'px');
    wave.appendChild(bar);
  }
  btn.addEventListener('click', async () => {
    if (adviceAudio.paused) {
      try {
        await adviceAudio.play();
      } catch (e) {
        status.textContent = 'مش قادر أشغل الملف الصوتي. اتأكد إن audioContinue1.wav موجود جنب ملف الموقع.';
      }
    } else {
      adviceAudio.pause();
    }
  });
  adviceAudio.addEventListener('play', () => {
    btn.textContent = 'Ⅱ';
    status.textContent = 'النصيحة الصوتية شغالة دلوقتي…';
  });
  adviceAudio.addEventListener('pause', () => {
    btn.textContent = '▶';
    if (adviceAudio.currentTime < adviceAudio.duration) status.textContent = 'الصوت متوقف مؤقتًا.';
  });
  adviceAudio.addEventListener('ended', () => {
    btn.textContent = '▶';
    status.textContent = 'خلصت النصيحة — تقدر تسمعها تاني.';
  });
