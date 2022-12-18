export default () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let data;
  
    const loadEntries = () => {
      for (let i = 0; i < data.length; i++) {
        const entry = document.createElement('div');
        const openButton = document.createElement('p');
  
        openButton.textContent = 'Kontakt';
        openButton.className = 'Btn';
        openButton.id = data[i].id;

        entry.appendChild(openButton);
        container.appendChild(entry);
  
        openButton.addEventListener('click', () => {
          container.innerHTML = '';
          entry.removeChild(openButton);
  
          container.appendChild(entry);
        });
      }
    };
  
    fetch('http://localhost:3000/api/getall', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((jsonData) => {
        data = jsonData;
      })
      .then(() => {
        loadEntries();
      });
  };
  