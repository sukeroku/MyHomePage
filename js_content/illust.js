if (window.matchMedia('(min-width: 768px)').matches) {
    $(function() {
        $('#img1').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img2').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_2,#img1,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img3').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_3,#img1,#img2,#img4,#img5,#img6,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img4').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_4,#img1,#img2,#img3,#img5,#img6,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img5').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_5,#img1,#img2,#img3,#img4,#img6,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img6').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_6,#img1,#img2,#img3,#img4,#img5,#img7,#img8,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img7').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_7,#img1,#img2,#img3,#img4,#img5,#img6,#img8,#ing9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img8').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_8,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img9,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });

        $('#img9').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_9,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img10,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });
        
        $('#img10').click(function() {
            $('main').toggleClass('center');
            $('#hd,#p_10,#img1,#img2,#img3,#img4,#img5,#img6,#img7,#img8,#img9,#ft').toggle();
            $('html').animate({scrollTop: 0}, 0);
        });
    });
}