const searchWord = document.querySelector('#search-word');
const movieList = document.querySelectorAll('#movie-list li');

searchWord.addEventListener('keyup', () => {
  const searchWordText = searchWord.value;
  movieList.forEach((elem) => {
    if (!searchWordText || searchWordText === '') {
      elem.classList.remove('hide');
      return;
    }
    const moveName = elem.dataset.name;
    if (searchWordText.charAt(0) === moveName.charAt(0)) {
      elem.classList.remove('hide');
    } else {
      elem.classList.add('hide');
    }
  });
});
