
const token = '7990072284:AAGzwV3xzJyv3PYOziJw69qa7dgkdbprgm4';
const chatId = '6313594797';

function sendToTelegram(name, phone, message) {
  const text = `Заявка з сайту ПК Майстер:\n\nІм’я: ${name}\nТелефон: ${phone}\nПроблема: ${message}`;
  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  })
  .then(res => {
    if (res.ok) {
      alert('✅ Дякуємо! Заявка надіслана.');
    } else {
      alert('❌ Помилка при надсиланні');
    }
  })
  .catch(err => {
    console.error(err);
    alert('❌ Помилка з’єднання з Telegram');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Нижня форма (контактна)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = this.querySelector('input[name="name"]')?.value || '';
      const phone = this.querySelector('input[name="phone"]')?.value || '';
      const message = this.querySelector('textarea[name="message"]')?.value || '';
      sendToTelegram(name, phone, message);
      this.reset();
    });
  }

  // Модальна форма (замовлення)
  const modalForm = document.querySelector('.order-form');
  if (modalForm) {
    modalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('user-name')?.value || '';
      const phone = document.getElementById('user-phone')?.value || '';
      const message = document.getElementById('user-comment')?.value || '';
      sendToTelegram(name, phone, message);
      this.reset();

      const modal = document.querySelector('[data-modal="overlay"]');
      if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = 'auto'; // повертаємо scroll (auto може не спрацювати на всіх темах)
      }
    });
  }
});
