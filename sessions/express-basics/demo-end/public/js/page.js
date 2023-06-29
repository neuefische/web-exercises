console.log('Hello in the browser!');

const main = () => {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    alert(responseData.message);
  })
}

document.addEventListener('DOMContentLoaded', main);
