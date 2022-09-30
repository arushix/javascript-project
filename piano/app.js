const allKeys = document.querySelectorAll('.key');

const playSound = async(newUrl) => {
    var audio = new Audio(newUrl);
    try {
        await audio.play();
        console.log("Playing audio");
      } catch (err) {
        console.log("Failed to play, error: " + err);
      }
}

allKeys.forEach(
    (pkey, i) => {
        const number = i<9 ? '0'+(i+1) : (i+1);
        const newUrl = 'keys/key'+number+'.mp3';
        pkey.addEventListener('click', () => playSound(newUrl))
    }
)