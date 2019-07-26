
function stepCarousel(stepdir){
    $('#carouselExampleIndicators').carousel(stepdir);
}
$('#carouselExampleIndicators').on('slide.bs.carousel', function (ev) {
    var id = ev.relatedTarget.id;
    var str='';
    switch (id) {
        case "carousel_1":
            str = '(1/6) - Layout';
            break;
        case "carousel_2":
            str = '(2/6) - Navigation';
            break;
        case "carousel_3":
            str = '(3/6) - Appearance';
            break;
        case "carousel_4":
            str = '(4/6) - Scene Toolbar';
            break;
        case "carousel_5":
            str = '(5/6) - Measurement Tool';
            break;
        case "carousel_6":
            str = '(6/6) - Cross-Section Tool';
            break;
        default:
    }
    $('#helpsubtitle').text(str);
})
