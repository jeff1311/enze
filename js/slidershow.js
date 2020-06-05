
var slidershow = {
    render:function(images){
        var html = '';
        var prevBtn = '<span class="prev-btn iconfont">&#xe744;</span>';
        var nextBtn = '<span class="next-btn iconfont">&#xe743;</span>';
        html += prevBtn;
        html += nextBtn;
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

        $('.navigation li').on('click',function(){
            var index = $(this).index();
            $('.navigation li').removeClass('bar-focus')
            $(this).addClass('bar-focus');
            $('.slides li').eq(0).css('margin-left',index * -20 + '%')
        });

        var ms = 3000;
        var interval = setInterval(slide,ms);
        function slide(act){
            var i = $('.navigation').find('.bar-focus').index();
            if(act == 'prev'){
                i --;
            }else{
                i ++;
            }
            i = i == images.length ? 0 : i;
            i = i < 0 ? images.length - 1 : i;
            $('.slides li').eq(0).css('margin-left',i * -20 + '%');
            $('.navigation li').removeClass('bar-focus');
            $('.navigation li').eq(i).addClass('bar-focus');
        }

        $('.slidershow').hover(function(){
            clearInterval(interval);
            // $('.prev-btn').css('opacity',1);
            // $('.next-btn').css('opacity',1);
        },function(){
            interval = setInterval(slide,ms);
            // $('.prev-btn').css('opacity',0);
            // $('.next-btn').css('opacity',0);
        });

        $('.prev-btn').on('click',function(){
            slide('prev');
        });
        $('.next-btn').on('click',function(){
            slide('next');
        });
        
    }
}



var images = [
    '/images/bg/06.jpg',
    '/images/bg/12.jpg',
    '/images/bg/08.jpg',
    '/images/bg/09.jpg',
    '/images/bg/10.jpg'
]

slidershow.render(images);
