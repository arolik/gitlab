
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3,
        arrows:true,
        responsive: [
            {
                breakpoint:992,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });
    $('.slider').on('afterChange', function(event, slick, currentSlide){
        console.log($('.slider').slick('slickCurrentSlide'));
        mennageGoods.setCurrentSlide($('.slider').slick('slickCurrentSlide'), event.target);
    })
});

class MennageGoods {
    constructor(){
        this.men = document.querySelector('#men'); // чекбокс
        this.women = document.querySelector('#women'); // чекбокс
        this.children = document.querySelector('#children'); // чекбокс
        this.showGoodsBtn = document.querySelector('#showGoods'); //кнопка
        this.blockOfMen = document.querySelector('#goodsMen'); // блок муж
        this.blockOfWomen = document.querySelector('#goodsWomen'); // блок жен
        this.isShowMens = true; // показ муж слайдера
        this.isShowWomens = true; // показ жен слайдера
        this.mensSliderWrapper = document.querySelector('.goods-for-men'); //муж слайдер
        this.mensSlides = this.mensSliderWrapper.querySelectorAll('.goods-for-men_item');
        this.womensSliderWrapper = document.querySelector('.goods-for-women');
        // жен слайдер
        this.womensSlides = document.querySelectorAll('.goods-for-women_item');
        /* свойства для текущих слайдов  */
        this.mensCurentIndex = document.querySelector('#mensCurentIndex');
        this.mensAllIndexes = document.querySelector('#mensAllIndexes');
        this.womensCurentIndex = document.querySelector('#womensCurentIndex');
        this.womensAllIndexes = document.querySelector('#womensAllIndexes');
        /* методы */ 
        this.men.addEventListener('change', this.hanldeMensGoods.bind(this));
        this.women.addEventListener('change', this.handleWomensGoods.bind(this));
        this.showGoodsBtn.addEventListener('click', this.applyFilter.bind(this));
        this.createIndexForMensElements();
        this.createIndexForWomensElements();
    }

    hanldeMensGoods(event){
        if(event.target.checked == false){
            this.isShowMens = false;
        } else if (event.target.checked == true){
            this.isShowMens = true;
        }
    }
    handleWomensGoods(event){
        if(event.target.checked == false){
            this.isShowWomens = false;
        } else if (event.target.checked == true){
            this.isShowWomens = true;
        }
    }
    applyFilter(){
        if(this.isShowMens == false){
            this.blockOfMen.style = "display:none";
        }
        if(this.isShowMens == true){
            this.blockOfMen.style = "display:flex";
        }
        if(this.isShowWomens == false){
            this.blockOfWomen.style = "display:none";
        }
        if(this.isShowWomens == true){
            this.blockOfWomen.style = "display:flex";
        }
    }
    createIndexForMensElements(){
        let arr = this.mensSlides;
        for(let i=0; i<arr.length; i++){
            arr[i].setAttribute('elemIndex', i);
        }
        this.mensCurentIndex.innerHTML = 1;
        this.mensAllIndexes.innerHTML = this.mensSlides.length;
    }
    createIndexForWomensElements(){
        let arr = this.womensSlides;
        for(let i=0; i<arr.length; i++){
            arr[i].setAttribute('elemIndex', i);
        }
        this.womensCurentIndex.innerHTML = 1;
        this.womensAllIndexes.innerHTML = this.womensSlides.length;
    }
    setCurrentSlide(num, elem){
        
        if(elem.classList.contains('goods-for-men')){
            this.mensCurentIndex.innerHTML = num + 1;
        }
        if(elem.classList.contains('goods-for-women')){
            console.log(num);
            this.womensCurentIndex.innerHTML = num + 1;
        }
    }
}

let mennageGoods = new MennageGoods();





