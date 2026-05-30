// Food Results Data
const results = {
  1: {emoji: '😌', message: 'Ami shanto manush... just taste korchi'},
  2: {emoji: '🔥', message: 'Eid shuru... control amar hate nei'},
  3: {emoji: '😲', message: 'Stomach: "bhai ami resign dicchi"'},
  4: {emoji: '😨', message: 'Chair theke uthle world spin kore'},
  5: {emoji: '💀', message: 'Ami ar manush nai... ami ekta moving cow now 🐄'}
};

function hideAllSections() {
  const sections = ['section2', 'section2b', 'section2c', 'section3', 'section4'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('section-hidden');
  });
  // Hide any active error messages
  document.getElementById('foodError').style.display = 'none';
}

function handleSalamiYes() {
  // Adjusted image handling
  const salamiHTML = `
    <div class="salami-celebration">
      <div class="salami-emoji">🎁</div>
      <img src="IMG20260530075451.jpg" 
           onerror="this.onerror=null; this.src='https://placehold.co/150x150/9b59b6/ffffff?text=Salami+Pic&font=poppins';" 
           class="salami-image" 
           alt="Salami Bonus"
           onclick="openImageModal(this.src, this.alt)">
      <p style="font-size: 1.1rem; color: #666; margin-top: 20px;">
        Happy Eid, Enjoy! 💕
      </p>
    </div>
  `;
  document.getElementById('salamiContent').innerHTML = salamiHTML;
  
  hideAllSections();
  const sec2b = document.getElementById('section2b');
  sec2b.classList.remove('section-hidden');
  sec2b.scrollIntoView({behavior: 'smooth'});
}

function handleSalamiNo() {
  hideAllSections();
  const sec2c = document.getElementById('section2c');
  sec2c.classList.remove('section-hidden');
  sec2c.scrollIntoView({behavior: 'smooth'});
}

function moveToFoodQuiz() {
  hideAllSections();
  const sec3 = document.getElementById('section3');
  sec3.classList.remove('section-hidden');
  sec3.scrollIntoView({behavior: 'smooth'});
}

function showResults() {
  const selectedFood = document.querySelector('input[name="foodAmount"]:checked');
  const errorMsg = document.getElementById('foodError');
  
  if (!selectedFood) {
    errorMsg.style.display = 'block';
    errorMsg.style.animation = 'none';
    void errorMsg.offsetWidth; // trigger reflow
    errorMsg.style.animation = 'shake 0.4s ease-in-out';
    return;
  }

  errorMsg.style.display = 'none';

  const foodAmount = selectedFood.value;
  const result = results[foodAmount];
  
  const resultHTML = `
    <div class="result-emoji">${result.emoji}</div>
    <div class="result-message">${result.message}</div>
    <p style="font-size: 1rem; color: #666;">
      Ei eid e tumi awesome ছিলে! 💕
    </p>
  `;
  
  document.getElementById('resultContent').innerHTML = resultHTML;
  
  hideAllSections();
  const sec4 = document.getElementById('section4');
  sec4.classList.remove('section-hidden');
  sec4.scrollIntoView({behavior: 'smooth'});
  
  createConfetti();
}

function createConfetti() {
  const colors = ['#9b59b6', '#c39bd3', '#e8d4f1', '#f39c12', '#e74c3c'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3500);
  }
}

function openImageModal(src, alt) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imageModalImg');
  modalImg.src = src;
  modalImg.alt = alt || '';
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeImageModal(event) {
  const modal = document.getElementById('imageModal');
  if (!modal.classList.contains('show')) return;
  if (!event || event.target.id === 'imageModal' || event.target.classList.contains('image-modal-close')) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeImageModal();
  }
});

function resetExperience() {
  const radios = document.querySelectorAll('input[name="foodAmount"]');
  radios.forEach(radio => radio.checked = false);
  
  hideAllSections();
  const sec2 = document.getElementById('section2');
  sec2.classList.remove('section-hidden');
  sec2.scrollIntoView({behavior: 'smooth'});
}

