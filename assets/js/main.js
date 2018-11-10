// /* ========================================================================= */
// /*  Preloader Script
// /* =========================================================================

// window.onload = function () {
//     document.getElementById('loading-mask').style.display = 'none';
// } */

// animateInClasses = [
//     'bounceIn',
//     'bounceInDown',
//     'bounceInLeft',
//     'bounceInRight',
//     'bounceInUp',
//     'fadeIn',
//     'fadeInDown',
//     'fadeInDownBig',
//     'fadeInLeft',
//     'fadeInLeftBig',
//     'fadeInRight',
//     'fadeInRightBig',
//     'fadeInUp',
//     'fadeInUpBig',
//     'flipInX',
//     'flipInY',
//     'rotateIn',
//     'rotateInDownLeft',
//     'rotateInDownRight',
//     'rotateInUpLeft',
//     'rotateInUpRight',
//     'lightSpeedIn',
//     'rollIn',
//     'zoomIn',
//     'zoomInDown',
//     'zoomInLeft',
//     'zoomInRight',
//     'zoomInUp',
//     'slideInDown',
//     'slideInLeft',
//     'slideInRight',
//     'slideInUp'
// ]

// animateOutClasses = [
//     'bounceOut',
//     'bounceOutDown',
//     'bounceOutLeft',
//     'bounceOutRight',
//     'bounceOutUp',
//     'fadeOut',
//     'fadeOutDown',
//     'fadeOutDownBig',
//     'fadeOutLeft',
//     'fadeOutLeftBig',
//     'fadeOutRight',
//     'fadeOutRightBig',
//     'fadeOutUp',
//     'fadeOutUpBig',
//     'flipOutX',
//     'flipOutY',
//     'lightSpeedOut',
//     'rotateOut',
//     'rotateOutDownLeft',
//     'rotateOutDownRight',
//     'rotateOutUpLeft',
//     'rotateOutUpRight',
//     'rollOut',
//     'zoomOut',
//     'zoomOutDown',
//     'zoomOutLeft',
//     'zoomOutRight',
//     'zoomOutUp',
//     'slideOutDown',
//     'slideOutLeft',
//     'slideOutRight',
//     'slideOutUp'
// ]

// animationClasses = [
//     'bounce',
//     'flash',
//     'pulse',
//     'rubberBand',
//     'shake',
//     'headShake',
//     'swing',
//     'tada',
//     'wobble',
//     'jello',
//     'bounceIn',
//     'bounceInDown',
//     'bounceInLeft',
//     'bounceInRight',
//     'bounceInUp',
//     'bounceOut',
//     'bounceOutDown',
//     'bounceOutLeft',
//     'bounceOutRight',
//     'bounceOutUp',
//     'fadeIn',
//     'fadeInDown',
//     'fadeInDownBig',
//     'fadeInLeft',
//     'fadeInLeftBig',
//     'fadeInRight',
//     'fadeInRightBig',
//     'fadeInUp',
//     'fadeInUpBig',
//     'fadeOut',
//     'fadeOutDown',
//     'fadeOutDownBig',
//     'fadeOutLeft',
//     'fadeOutLeftBig',
//     'fadeOutRight',
//     'fadeOutRightBig',
//     'fadeOutUp',
//     'fadeOutUpBig',
//     'flipInX',
//     'flipInY',
//     'flipOutX',
//     'flipOutY',
//     'lightSpeedIn',
//     'lightSpeedOut',
//     'rotateIn',
//     'rotateInDownLeft',
//     'rotateInDownRight',
//     'rotateInUpLeft',
//     'rotateInUpRight',
//     'rotateOut',
//     'rotateOutDownLeft',
//     'rotateOutDownRight',
//     'rotateOutUpLeft',
//     'rotateOutUpRight',
//     'hinge',
//     'rollIn',
//     'rollOut',
//     'zoomIn',
//     'zoomInDown',
//     'zoomInLeft',
//     'zoomInRight',
//     'zoomInUp',
//     'zoomOut',
//     'zoomOutDown',
//     'zoomOutLeft',
//     'zoomOutRight',
//     'zoomOutUp',
//     'slideInDown',
//     'slideInLeft',
//     'slideInRight',
//     'slideInUp',
//     'slideOutDown',
//     'slideOutLeft',
//     'slideOutRight',
//     'slideOutUp'
// ];

// // console.log($.fn.hasOwnProperty('slick'));

// (function($) {
//     if (typeof $ === 'undefined') {
//         throw new Error("You need to include jQuery library ");
//         return false;
//     }
//     var jq = $.fn.jquery.split(" ")[0].split(".");
//     if ((jq[0] < 1 && jq[1] < 11) || (1 == jq[0] && 11 == jq[1] && jq[2] < 1))
//         throw new Error("Requires minimum jQuery version of 1.11.1 or higher");

//     if (!$.fn.hasOwnProperty('slick')) {
//         throw new Error("You need to include slick slider plugin for jQuery");
//         return false;
//     }

//     _slicker = function(selector) {
//         return new Slicker(selector);
//     }

//     function Slicker(selector) {
//         this.selector = selector;
//     }

//     core_ = {

//         currSlide: null,
//         nSlide: null,
//         slick: $.fn.slick,

//         removeAnimationClass: function(slick, currentSlide, nextSlide) {
//             currSlide = $('.slick-slide[data-slick-index="' + currentSlide + '"]');
//             nSlide = $('.slick-slide[data-slick-index="' + nextSlide + '"]');

//             for (var i = 0; i < animationClasses.length; i++) {
//                 var currentClass = 'animated ' + animationClasses[i];

//                 if (currSlide.hasClass(currentClass)) {
//                     currSlide.removeClass(currentClass);
//                 } else if (nSlide.hasClass(currentClass)) {
//                     nSlide.removeClass(currentClass)
//                 }
//             }
//         },

//         getAnimationClass: function(type) {
//             if (type === 'in') {
//                 return this.animateInClass[this.animateClassIndex];
//             }

//             if (type === 'in') {
//                 return this.animateOutClass[this.animateClassIndex];
//             }

//             return false;
//         },

//         reloadAnimationClassIndex: function() {
//             max = animateInClasses.length - 1;
//             min = 0;
//             this.animateClassIndex = getRandomNumber(min, max);
//             return this.animateClassIndex;
//         },

//         getRandomNumber: function(min, max) {
//             if (typeof arguments[0] !== 'undefined' && typeof arguments[1] !== 'undefined') {
//                 return Math.floor(Math.random() * (max - min) + min);
//             }
//             if (arguments[0] && !arguments[1]) {
//                 return Math.random() * min
//             }
//             return Math.floor(Math.random());
//         },

//         animateInClasses: [
//             'bounceIn',
//             'bounceInDown',
//             'bounceInLeft',
//             'bounceInRight',
//             'bounceInUp',
//             'fadeIn',
//             'fadeInDown',
//             'fadeInDownBig',
//             'fadeInLeft',
//             'fadeInLeftBig',
//             'fadeInRight',
//             'fadeInRightBig',
//             'fadeInUp',
//             'fadeInUpBig',
//             'flipInX',
//             'flipInY',
//             'rotateIn',
//             'rotateInDownLeft',
//             'rotateInDownRight',
//             'rotateInUpLeft',
//             'rotateInUpRight',
//             'lightSpeedIn',
//             'rollIn',
//             'zoomIn',
//             'zoomInDown',
//             'zoomInLeft',
//             'zoomInRight',
//             'zoomInUp',
//             'slideInDown',
//             'slideInLeft',
//             'slideInRight',
//             'slideInUp'
//         ],

//         animateOutClasses: [
//             'bounceOut',
//             'bounceOutDown',
//             'bounceOutLeft',
//             'bounceOutRight',
//             'bounceOutUp',
//             'fadeOut',
//             'fadeOutDown',
//             'fadeOutDownBig',
//             'fadeOutLeft',
//             'fadeOutLeftBig',
//             'fadeOutRight',
//             'fadeOutRightBig',
//             'fadeOutUp',
//             'fadeOutUpBig',
//             'flipOutX',
//             'flipOutY',
//             'lightSpeedOut',
//             'rotateOut',
//             'rotateOutDownLeft',
//             'rotateOutDownRight',
//             'rotateOutUpLeft',
//             'rotateOutUpRight',
//             'rollOut',
//             'zoomOut',
//             'zoomOutDown',
//             'zoomOutLeft',
//             'zoomOutRight',
//             'zoomOutUp',
//             'slideOutDown',
//             'slideOutLeft',
//             'slideOutRight',
//             'slideOutUp'
//         ],

//         animationClasses: [
//             'bounce',
//             'flash',
//             'pulse',
//             'rubberBand',
//             'shake',
//             'headShake',
//             'swing',
//             'tada',
//             'wobble',
//             'jello',
//             'bounceIn',
//             'bounceInDown',
//             'bounceInLeft',
//             'bounceInRight',
//             'bounceInUp',
//             'bounceOut',
//             'bounceOutDown',
//             'bounceOutLeft',
//             'bounceOutRight',
//             'bounceOutUp',
//             'fadeIn',
//             'fadeInDown',
//             'fadeInDownBig',
//             'fadeInLeft',
//             'fadeInLeftBig',
//             'fadeInRight',
//             'fadeInRightBig',
//             'fadeInUp',
//             'fadeInUpBig',
//             'fadeOut',
//             'fadeOutDown',
//             'fadeOutDownBig',
//             'fadeOutLeft',
//             'fadeOutLeftBig',
//             'fadeOutRight',
//             'fadeOutRightBig',
//             'fadeOutUp',
//             'fadeOutUpBig',
//             'flipInX',
//             'flipInY',
//             'flipOutX',
//             'flipOutY',
//             'lightSpeedIn',
//             'lightSpeedOut',
//             'rotateIn',
//             'rotateInDownLeft',
//             'rotateInDownRight',
//             'rotateInUpLeft',
//             'rotateInUpRight',
//             'rotateOut',
//             'rotateOutDownLeft',
//             'rotateOutDownRight',
//             'rotateOutUpLeft',
//             'rotateOutUpRight',
//             'hinge',
//             'rollIn',
//             'rollOut',
//             'zoomIn',
//             'zoomInDown',
//             'zoomInLeft',
//             'zoomInRight',
//             'zoomInUp',
//             'zoomOut',
//             'zoomOutDown',
//             'zoomOutLeft',
//             'zoomOutRight',
//             'zoomOutUp',
//             'slideInDown',
//             'slideInLeft',
//             'slideInRight',
//             'slideInUp',
//             'slideOutDown',
//             'slideOutLeft',
//             'slideOutRight',
//             'slideOutUp'
//         ],

//         animateClassIndex: getRandomNumber(0, animateInClasses.length),

//         animateInClass: this.animateInClasses[this.animateClassIndex],
//         animateOutClass: this.animateOutClasses[this.animateClassIndex],

//         Slicker: $.fn.slick,


//     }
// })($)

// function getRandomNumber(min, max) {
//     if (typeof arguments[0] !== 'undefined' && typeof arguments[1] !== 'undefined') {
//         return Math.floor(Math.random() * (max - min) + min);
//     }
//     if (arguments[0] && !arguments[1]) {
//         return Math.random() * min
//     }
//     return Math.floor(Math.random());
// }

// animateClassIndex = getRandomNumber(0, animateInClasses.length);
// animateInClass = animateInClasses[animateClassIndex];
// animateOutClass = animateOutClasses[animateClassIndex];

// $(document).ready(function() {
//     $('.owl-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
//         currSlide = $('.slick-slide[data-slick-index="' + currentSlide + '"]');
//         nSlide = $('.slick-slide[data-slick-index="' + nextSlide + '"]');

//         for (var i = 0; i < animationClasses.length; i++) {
//             var currentClass = 'animated ' + animationClasses[i];

//             if (currSlide.hasClass(currentClass)) {
//                 currSlide.removeClass(currentClass);
//             } else if (nSlide.hasClass(currentClass)) {
//                 nSlide.removeClass(currentClass)
//             }

//         }

//         animateClassIndex = getRandomNumber(0, animateInClasses.length);
//         animateInClass = animateInClasses[animateClassIndex];
//         animateOutClass = animateOutClasses[animateClassIndex];

//         $('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('animated ' + animateOutClass);
//         $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass('animated ' + animateInClass);
//         // console.log($('.slick-slide[data-slick-index="'+nextSlide+'"]').attr('class'));
//         // console.log($('.slick-slide[data-slick-index="'+currentSlide+'"]').attr('class'));



//     }).on('afterChange', function(event, slick, currentSlide, nextSlide) {

//         currSlide = $('.slick-slide[data-slick-index="' + currentSlide + '"]');
//         nSlide = $('.slick-slide[data-slick-index="' + nextSlide + '"]');

//         for (var i = 0; i < animationClasses.length; i++) {
//             var currentClass = 'animated ' + animationClasses[i];

//             if (currSlide.hasClass(currentClass)) {
//                 currSlide.removeClass(currentClass);
//             } else if (nSlide.hasClass(currentClass)) {
//                 nSlide.removeClass(currentClass)
//             }

//         }

//     });


//     $('.owl-carousel').slick({
//         dots: true,
//         fade: true,
//         autoplay: true,
//         arrows: true,
//         useCss: false,
//         useTransform: false,
//         nextArrow: '<div class="slick-arrow-right slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span></div>',
//         prevArrow: '<div class="slick-arrow-left slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></span></div>',
//     });
//     // On before slide change

// });


// // alert('Whats up')