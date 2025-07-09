// header 왼쪽 title btn
const titleBtn = document.querySelector("#title_btn");

titleBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// header 오른쪽 nav btns
const navBtns = document.querySelectorAll("button[data-target]");

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-target");
        const target = document.querySelector(targetSelector);

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// projects scroll event
const scrollContainer = document.querySelector(".projects_slider");

let isMouseDown = false; // 사용자가 마우스를 클릭했는지 여부
let startX; // 마우스를 클릭한 최초의 x 좌표
let scrollLeft; // 드래그 시작 시 컨테이너의 가로 스크롤 위치

scrollContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;

    // 클릭한 페이지의 x 좌표에서 container의 왼쪽 경계값을 빼줘야 현 위치값을 저장할 수 있다
    startX = e.pageX - scrollContainer.offsetLeft;

    // 가로 스크롤 위치를 업데이트
    scrollLeft = scrollContainer.scrollLeft;

    scrollContainer.style.scrollBehavior = "auto";
});

scrollContainer.addEventListener("mouseleave", () => {
    isMouseDown = false;
    scrollContainer.style.scrollBehavior = "smooth";
});

scrollContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
    scrollContainer.style.scrollBehavior = "smooth";
});

scrollContainer.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - scrollContainer.offsetLeft;

    // 이동한 거리 * 속도
    const walk = (x - startX) * 1.5;

    // 컨테이너를 이동시킴
    scrollContainer.scrollLeft = scrollLeft - walk;
});

// project 별 btn 이동 막기 (구현 안 되어서)
const viewBtns = document.querySelectorAll(".view_btn");

viewBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("추후 연결 예정");
    });
});

const sourceBtns = document.querySelectorAll(".source_btn");

sourceBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("추후 연결 예정");
    });
});
