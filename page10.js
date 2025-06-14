const scrollToSection = (targetId) => {
  const section = document.querySelector(targetId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const subscribeTop = document.getElementById('subscribeTop');
const subscribeBottom = document.getElementById('subscribeBottom');
const startExploring = document.getElementById('startExploring');

if (subscribeTop) {
  subscribeTop.addEventListener('click', () => {
    scrollToSection('#footer');
  });
}

if (subscribeBottom) {
  subscribeBottom.addEventListener('click', () => {
    scrollToSection('#newsletter');
  });
}

if (subscribeBottom) {
  subscribeBottom.addEventListener('click', () => {
    scrollToSection('#footer');
  });
}

if (startExploring) {
  startExploring.addEventListener('click', () => {
    scrollToSection('#dishes');
  });
}
