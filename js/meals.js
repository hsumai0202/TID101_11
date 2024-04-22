// 漢堡動畫
function isElementInViewport(el) {

    const rect = el.getBoundingClientRect();

    return rect.bottom < 0 || rect.top > Window.innerHeight;
}

function addClassToVisibleElements() {

    var aniElements = document.querySelectorAll(".strani_img");

    aniElements.forEach(function (aniElements) {

        if (!isElementInViewport(aniElements)) aniElements.classList.add("ed")

        else aniElements.classList.add("strani_img")

    });

}
// 當滑動時就跑 addClassToVisibleElements這函數
document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();
