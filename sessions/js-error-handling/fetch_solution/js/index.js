console.clear();

const userElement = document.querySelector('.user');
const errorElement = document.querySelector('.error');

async function getUser(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

document.querySelectorAll('button[data-url]').forEach((button) =>
  button.addEventListener('click', async (event) => {
    errorElement.textContent = '';

    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
    } catch (error) {
      userElement.innerHTML = '';
      errorElement.textContent = 'Error fetching data: ' + error.message;
    }
  })
);
