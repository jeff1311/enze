
var slidershow = {
    render:function(images){
        var html = '';
        var slides = '<ul class="slides" style="width:' + 100 * images.length + '%;">';
        var navigation = '<ul class="navigation">';
        for (const i in images) {
            slides += '<li style="background-image: url(' + images[i] + ');"></li>';
            var barFocus = i == 0 ? 'class="bar-focus"' : '';
            navigation += '<li ' + barFocus + '></li>';
        }
        slides += '</ul>';
        navigation += '</ul>';
        html += slides;
        html += navigation;
        $('.slidershow').html(html);

        var num = 1;
        $('.navigation li').on('click',function(){
            var index = $(this).index();
            num = index;
            $('.navigation li').css('background','none');
            $(this).css('background','rgba(255, 255, 255, 0.7)');
            $('.slides li').eq(0).css('margin-left',index * -20 + '%')
        });

        var interval = setInterval(slide,2000);
        function slide(){
            num = num == 5 ? 0 : num;
            $('.slides li').eq(0).css('margin-left',num * -20 + '%');
            $('.navigation li').css('background','none');
            $('.navigation li').eq(num).css('background','rgba(255, 255, 255, 0.7)');
            num ++;
        }

        $('.slidershow').hover(function(){
            clearInterval(interval);
        },function(){
            interval = setInterval(slide,2000);
        });
    }
}



var images = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
    '/images/bg5.jpg'
]

slidershow.render(images);
