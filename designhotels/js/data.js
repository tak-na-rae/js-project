let container = document.querySelector(".gallery");
let loadMore = document.querySelector(".loadMoreBtn");
let allData = [];
let addItemCount = 3;
let added = 0;

let filter = document.querySelector("#gallery-filter");
let filterData = [];

// 처음 페이지 로드 시 필터된 데이터의 개수를 가져옵니다.
function initialFilter() {
  // 'all' 필터를 기준으로 데이터를 가져옵니다.
  filterItems("all");
}

fetch('./data/data.json')
.then(response => response.json())
.then(data => {
  allData = data;
  filterData = allData;

  initialFilter();

  addItem();
  loadMore.addEventListener("click", addItem);
  filter.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      const key = e.target.value;
      filterItems(key);
    }
  });
})
.catch(err => console.log("err", err));

// 항목 추가
function addItem() {
  let el = [];
  let slicedData = filterData.slice(added, added += addItemCount); // added 값 기준으로 항목 잘라냄
  slicedData.forEach(item => {
    const fileExtention = item.video.split(".").pop().toLowerCase();
    const isMp4 = fileExtention == "mp4";
    const sw = isMp4 ? (`<video src="${item.video}" loop autoplay muted></video>`) : (`<img src="${item.video}"/>`);

    let itemHTML = `
      <li>
        <div>
          <a href="#" class="javascript:;" class="galleryBtn">
              <span class="g-video">${sw}</span>
              <span class="g-bg"></span>
              <span class="g-title">
                <span><i class="category">${item.category}</i></span>
                <span><strong>${item.title}</strong></span>
                <span><b>${item.description}</b></span>
              </span>
          </a>
        </div>
      </li>
    `;
    let liEl = document.createElement("li");
    liEl.classList.add("gallery-item");
    liEl.innerHTML = itemHTML;
    el.push(liEl);
  });

  el.forEach(item => {
    container.appendChild(item);
  });

  updateMoreBtn(); //+++수정: 항목을 추가한 후 버튼 상태 업데이트
}

// 라디오 필터
function filterItems(key) {
  filterData = [];
  added = 0;  // 필터 변경 시 added를 초기화
  container.innerHTML = ""; // 기존 아이템 삭제
  if(key === "all") {
    filterData = allData;
  } else {
    filterData = allData.filter(item => item.category === key);
  }

  console.log(`${key} :: ${filterData.length}`);

  addItem();
}

// 리스트 더 이상 없으면 버튼 삭제
function updateMoreBtn() {
  if (added < filterData.length) {
    loadMore.textContent = "MORE"; //+++수정: 더 많은 항목이 있으면 "MORE" 버튼 표시
  } else {
    loadMore.textContent = "END"; //+++수정: 모든 항목을 불러왔으면 "END" 버튼 표시
  }
}