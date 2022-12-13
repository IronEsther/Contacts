export default () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  const heading = document.createElement('h1');
  const text = document.createElement('p');

  heading.textContent = 'Über mich';

  text.classList = 'mainText';

  text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Donec et odio pellentesque diam volutpat commodo. Tristique senectus et netus et malesuada fames ac. 
  Aliquam sem et tortor consequat id porta nibh venenatis cras. In vitae turpis massa sed elementum tempus egestas. 
  Diam donec adipiscing tristique risus nec feugiat in. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. 
  Justo donec enim diam vulputate ut. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus.
  Pharetra convallis posuere morbi leo urna molestie at elementum. Lacinia at quis risus sed vulputate odio ut enim.
  Nam aliquam sem et tortor. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. 
  Egestas fringilla phasellus faucibus scelerisque. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. 
  Imperdiet dui accumsan sit amet. Sed turpis tincidunt id aliquet risus. 
  Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim.`; // https://loremipsum.io/generator/?n=10&t=p
  container.appendChild(heading);
  container.appendChild(text);
};
