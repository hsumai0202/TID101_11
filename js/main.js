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
    aniElements.forEach(function (aniElements)
    {
        // 如果有判定到.ani_img的元素 就添加上ed元素
        if (!isElementInViewport(aniElements)) aniElements.classList.add("ed")
        // 如果沒有判定到，就移除ed元素
        else aniElements.classList.remove("ed")

    });

}
// 當滑動時就跑 addClassToVisibleElements這函數
document.addEventListener("scroll", addClassToVisibleElements);
addClassToVisibleElements();