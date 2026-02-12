document.addEventListener('DOMContentLoaded', function () {
  // when the page is ready

  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  const button = form.querySelector('.action-button');
  const icon = button ? button.querySelector('.btn-icon') : null;

  const successDlg = document.getElementById('success-dialog');
  const errorDlg = document.getElementById('error-dialog');
  const errorTxt = document.getElementById('error-text');

  if (!button || !icon || !successDlg || !errorDlg || !errorTxt) {
    return;
  }

  // helpers
  const showSpinner = () => {
    if (button.querySelector('.spinner')) {
      return;
    }

    icon.style.display = 'none';

    const spin = document.createElement('span');
    spin.className = 'spinner';
    spin.setAttribute('aria-label', 'Loading');

    button.appendChild(spin);
    button.disabled = true;
  };

  const hideSpinner = () => {
    const spin = button.querySelector('.spinner');

    if (spin) {
      spin.remove();
    }

    icon.style.display = '';
    button.disabled = false;
  };

  const getCaptchaResponse = () => {
    const captchaInput = form.querySelector('textarea[name="h-captcha-response"]');
    return captchaInput ? captchaInput.value.trim() : '';
  };

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const hCaptcha = getCaptchaResponse();
    if (!hCaptcha) {
      errorTxt.textContent = '❌ Complete the CAPTCHA to send.';
      errorDlg.showModal();
      return;
    }

    showSpinner();

    try {
      // collect form data
      const fd = new FormData(form);
      const name = fd.get('name');
      const checkIfapp = fd.get('resume') ? 'Yes' : 'No';
      const subject = checkIfapp === 'Yes' ? `New application from: ${name}` : `New message from: ${name}`;

      fd.append('subject', subject);
      fd.append('replyto', fd.get('email'));

      const object = Object.fromEntries(fd);
      const json = JSON.stringify(object);

      // POST to Web3Forms
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
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
