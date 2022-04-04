console.log('Starting up');

$(document).ready(onInit);


function onInit(){
    // debugger
    createPortfolio();
    $('.offcanvas-btn').click(openCanvas);
}