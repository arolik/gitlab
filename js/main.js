$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3,
        arrows:true,
    });
    
});

class MennageGoods {
    constructor(){
        this.men = document.querySelector('#men');
        this.women = document.querySelector('#women');
        this.children = document.querySelector('#children'); 
        this.showGoodsBtn = document.querySelector('#showGoods');
        this.blockOfMen = document.querySelector('#goodsMen');
        this.blockOfWomen = document.querySelector('#goodsWomen');
        this.isShowMens = true;
        this.isShowWomens = true;

        this.men.addEventListener('change', this.hanldeMensGoods.bind(this));
        this.women.addEventListener('change', this.handleWomensGoods.bind(this));
        this.showGoodsBtn.addEventListener('click', this.applyFilter.bind(this));
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
}

new MennageGoods();





