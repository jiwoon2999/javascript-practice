const checkBox = document.querySelector('#checkBox');
const textBox = document.querySelector('.textBox');

checkBox.addEventListener('change', (e) => {
  const checkBoxValue = e.target.checked;
  textBox.innerHTML = `체크박스는 말이어라 ${checkBoxValue} 이렇게 되지어라.`;
});
