
function updateOutput(){
    $('iframe').contents().find('html').html('<html><head><style type="text/css">'+$("#cssPanel").val()+'</style></head><body>'+$("#htmlPanel").val()+'</body></html>');            
}
function updateJS(){
    document.getElementById('outputPanel').contentWindow.eval($('#jsPanel').val());
}

// hightlight buttons after hover and remove highlight
$('.toggleButton').hover(function(){
    $(this).addClass('highlightedBtn');
}, function(){
    $(this).removeClass('highlightedBtn');
});

// toggle 'active' class
$('.toggleButton').click(function(){
    $(this).toggleClass('active');
    $(this).removeClass('highlightedBtn');
    var panelId = $(this).attr('id') + 'Panel';            
    $('#'+ panelId).toggleClass('hidden');

    var numOfActivePanels = 4 - $('.hidden').length;

    $('.panel').width(($(window).width() /numOfActivePanels) - 10);
});

// text ares sizing with jquery
$('textarea').height($(window).height() - $('#header').height() - 15);

$('.panel').width(($(window).width() /2) - 10);

// Update iframe according to html
updateOutput();
updateJS();

$('textarea').on('change keyup paste', function(){
    updateOutput();
});

$('#runJS').on('click', function(){
    updateJS();
});
