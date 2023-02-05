const localFoodList = [
  {
    id: 1,
    name: '육개장',
    local: '서울',
  },
  {
    id: 2,
    name: '여주산병',
    local: '경기도',
  },
  {
    id: 3,
    name: '메밀막국수',
    local: '강원도',
  },
  {
    id: 4,
    name: '다슬기국',
    local: '충청도',
  },
  {
    id: 5,
    name: '전주비빔밥',
    local: '전라도',
  },
  {
    id: 6,
    name: '안동식혜',
    local: '경상도',
  },
  {
    id: 7,
    name: '고사리국',
    local: '제주도',
  },
  {
    id: 8,
    name: '되비지탕',
    local: '황해도',
  },
  {
    id: 9,
    name: '평양냉면',
    local: '평안도',
  },
  {
    id: 10,
    name: '닭비빔밥',
    local: '함경도',
  },
];

const menuList = document.querySelector('#container');

localFoodList.forEach((menu) => {
  menuList.innerHTML += `<div class='menu-box'>
  <h3>${menu.name}</h3>
  <p>지역: ${menu.local}</p>
  </div>`;
});
