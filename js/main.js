// --------------------------- 板面的動畫 ---------------------------//
// 先判斷元素是否在視窗中
function isElementInViewport(el) {
    // 判斷元素在視窗的位置跟大小
    const rect = el.getBoundingClientRect();
    // 元素底 <0 並且 元素高 > Window的高度
    return rect.bottom < 0 || rect.top > Window.innerHeight;
}
// 添加css的class到可見的元素中
function addClassToVisibleElements() {
    // 在css中找到所以有.ani_img得元素 變成陣列的型態回傳
    var aniElements = document.querySelectorAll(".ani_img");
    // 將aniElements回傳回來的陣列取出來判斷
    aniElements.forEach(function (aniElements) {
        // 如果有判定到.ani_img的元素 就添加上ed元素
        if (!isElementInViewport(aniElements)) aniElements.classList.add("ed")
        // 如果沒有判定到，就加入ani_img 來維持原本的元素，才不會一直被偵測到
        else aniElements.classList.add("ani_img")

    });

}
// 當滑動時就跑 addClassToVisibleElements這函數
document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
}
// 找到.ani_img 找到就加上 ed  沒有就消除 ed
function addClassToVisibleElements() {
    var aniElements = document.querySelectorAll(".ani_img");

    aniElements.forEach(function (aniElement) {
        if (!isElementInViewport(aniElement)) {
            aniElement.classList.add("ed");
        } else {
            aniElement.classList.remove("ed");
        }
    });
}


function checkScreenWidth() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 800) { // 當寬度小於700
        pauseAnimation();  // 添加動畫
    } else {
        playAnimation(); // 移除動畫
    }
}
// 添加動畫
function pauseAnimation() {
    var aniElements = document.querySelectorAll(".ani_img");
    aniElements.forEach(function (aniElement) {
        aniElement.classList.add("paused-animation");
    });
}
// 移除動畫
function playAnimation() {
    var aniElements = document.querySelectorAll(".ani_img");
    aniElements.forEach(function (aniElement) {
        aniElement.classList.remove("paused-animation");
    });
}
// 當視窗載入 檢查
window.onload = function () {
    checkScreenWidth();
    addClassToVisibleElements();
}
// 當視窗寬度檢查
window.onresize = function () {
    checkScreenWidth();
    addClassToVisibleElements();
}



