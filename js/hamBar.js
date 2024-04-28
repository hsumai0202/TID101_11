//展開或收起來 slideToggle

$(document).ready(function () {
    $('#hamBar').click(function () {
        $('#menu').slideToggle('all_nav')
    })
    $('#menu li').click(function () {
        $('#menu').addClass('all_nav')
    })
})

// $(document).ready(() => {
//     $('.hamBar').click(function () {

//         $('#menu').slideToggle(600);
//     })
// })


// $(document).ready(() => {
//     $('.hamBar').click(function () {
//         event.preventDefault();
//         $('#menu').slideToggle(600);
//
//     });
// })