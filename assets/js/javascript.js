const $Share_click = document.querySelector('#Share_click');

const $Display_Text = document.querySelector('#display-text');

const $Image_set = document.querySelector('#image-seta');

let checkClick = false;

$Share_click.addEventListener('click',()=>{

    
    if(!checkClick){
    $Image_set.style.filter = 'brightness(1000%)';

    $Share_click.style.backgroundColor = 'var(--VD-grayish-blue)'

    $Display_Text.style.display = 'flex';
    }else {
        $Image_set.style.filter = 'brightness(100%)';

        $Share_click.style.backgroundColor = ''
    
        $Display_Text.style.display = 'none';
    }

    checkClick === true ? checkClick = false : checkClick =true;

});

