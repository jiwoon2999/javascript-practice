// 인풋요소와 텍스트를 변경할 박스인 p 요소를 변수에 할당
const inputText = document.querySelector('#inputText');
const textBox = document.querySelector('.textBox');

// 인풋 이벤트 설정
inputText.addEventListener('change', (e) => {
  // 이벤트가 일어나는 타겟의 값(인풋 입력 값)을 변수에 할당
  const inputTextValue = e.target.value;
  // 비어있는 p요소에 입력된 인풋 값을 바인딩
  textBox.innerHTML = inputTextValue;
});
