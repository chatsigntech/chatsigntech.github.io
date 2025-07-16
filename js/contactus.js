document.addEventListener("DOMContentLoaded", function () {
  // when the page is ready

  const form = document.getElementById('contact-form');
  const button = form.querySelector('.action-button');
  const icon = button.querySelector('.btn-icon');

  const successDlg = document.getElementById('success-dialog');
  const errorDlg = document.getElementById('error-dialog');
  const errorTxt = document.getElementById('error-text');

  // helpers
  const showSpinner = () => {
    icon.style.display = 'none';
    const spin = document.createElement('span');
    spin.className = 'spinner';
    spin.setAttribute('aria-label', 'Loading');
    button.appendChild(spin);
    button.disabled = true;
  };
  const hideSpinner = () => {
    const spin = button.querySelector('.spinner');
    if (spin) spin.remove();
    icon.style.display = '';
    button.disabled = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;
    if (!hCaptcha) {
      e.preventDefault();
      errorTxt.textContent = `❌ Complete the CAPTCHA to send.`;
      errorDlg.showModal();
      return;
    }
    showSpinner();

    try {
      // collect form data
      const fd = new FormData(form);
      const name = fd.get('name');
      var subject = `New message from: ${name}`;
      const checkIfapp = fd.get('resume') ? 'Yes' : 'No';
      if (checkIfapp === 'Yes') {
        subject = `New application from: ${name}`;
      }

      fd.append('subject', subject);
      fd.append('replyto', fd.get('email'));

      const object = Object.fromEntries(fd);
      const json = JSON.stringify(object);

      // POST to Web3Forms
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        form.reset();
        successDlg.showModal();
      } else {
        throw new Error(data.message || 'Unknown error');
      }
    } catch (err) {
      errorTxt.textContent = `❌ Failed to send message. Error: ${err.message}`;
      errorDlg.showModal();
    } finally {
      hideSpinner();
    }
  });

  // close buttons
  document.getElementById('success-close').onclick = () => successDlg.close();
  document.getElementById('error-close').onclick = () => errorDlg.close();



});
