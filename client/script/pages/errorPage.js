export default () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const errorMessage = document.createElement('h1');
  errorMessage.textContent = 'This Page could not be found';

  container.appendChild(errorMessage);
};
