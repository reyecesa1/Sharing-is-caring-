
function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = true;
  const overlay = document.getElementById('overlay');
  let timeout;

  setTimeout(() => {
    overlay.style.opacity = '0.5';
    overlay.style.display = 'block';
  }, 10);

  recognition.start();

  recognition.onresult = async function(event) {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      }
    }
    document.getElementById('user').textContent += finalTranscript + '\n';

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      recognition.stop();
      if (overlay.style.opacity !== '0') {
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 2000);
      }
    }, 3000);
    
    

    
  };
}
