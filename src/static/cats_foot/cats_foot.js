// document.addEventListener('key', function(event) {
//     if (event.key == 'c' && event.key == 'a' && event.key == 't') {
//     }
// });

let cf_block__width = 0;
let cf_block__height = 0;

let cat_foot__main_block = null;

// TODO: Кошачьи лапки
document.onkeydown = function(event) {
    // if (event.key == 'c') c_flag = true;
    // if (event.key == 'a') a_flag = true;
    // if (event.key == 't' && c_flag && a_flag)
    // {
    //     cat_foot__main_block = document.getElementsByClassName("cat_foot__main_block");
    //     if (cat_foot__main_block.length == 0)
    //         add_cats_foot();
    //     else
    //     {
    //         cat_foot__main_block[0].remove();
    //         document.getElementsByClassName("cat_paw_img")[0].remove();
    //     }
    //     c_flag = false;
    //     a_flag = false;
    // }
}

function cats_paw() {
    cat_foot__main_block = document.getElementsByClassName("cat_foot__main_block");
    if (cat_foot__main_block.length == 0)
        add_cats_foot();
    else
    {
        cat_foot__main_block[0].remove();
        document.getElementsByClassName("cat_paw_img")[0].remove();
    }
}

function add_cats_foot() {
    document.querySelector("body").insertAdjacentHTML("afterBegin", `<div class="cat_foot__main_block" onclick="create_cats_paw(event)" data-foot_count="0">
                                                                        <hr style="
                                                                            position: absolute;
                                                                            top: calc(932px / 2);
                                                                            width: 100%;
                                                                        ">
                                                                        <hr style="
                                                                            position: absolute;
                                                                            left: calc(1275px / 2);
                                                                            height: 100%;
                                                                        ">
                                                                    </div>`);
    document.getElementById('aTask').insertAdjacentHTML("afterEnd", `<div class="cat_paw_img"><img src="/static/cats_foot/paws/paw1.png" alt="" style="width: 30px; margin: 10px; opacity: 0.4;"></div>`);

    cat_foot__main_block = document.getElementsByClassName("cat_foot__main_block")[0];

    cf_block__width = cat_foot__main_block.clientWidth;
    cf_block__height = cat_foot__main_block.clientHeight;
}

function create_cats_paw(event) {
    let rotate = 0;
    x1 = Number(cf_block__width / 2);
    y1 = 0;
    x2 = event.x;
    y2 = event.y;
    x3 = Number(cf_block__width / 2);
    y3 = Number(cf_block__height / 2);
    const getAngle = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
        const dot = x1 * x2 + y1 * y2
        const det = x1 * y2 - y1 * x2
        const angle = Math.atan2(det, dot) / Math.PI * 180
        return (angle + 360) % 360
    }
    const angle = getAngle({
        x: x1 - x3,
        y: y1 - y3,
    }, {
        x: x2 - x3,
        y: y2 - y3,
    });

    rotate = angle + 180;
    soundClick();
    foot_moves(event.x, event.y, rotate);

    setTimeout(() => {
        paint_cats_paw(event.x, event.y, rotate);
    }, 800);
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function soundClick() {
    var audio = new Audio();
    audio.volume = 0.2;
    audio.src = `/static/cats_foot/sounds/sound${ randomIntFromInterval(1, 6) }.mp3`;
    audio.autoplay = true;
}

let new_food = []
function foot_moves(x, y, rotate) {
    foots_count = Number(cat_foot__main_block.dataset.foot_count);
    cat_foot__main_block.dataset.foot_count = foots_count + 1
    cat_foot__main_block.insertAdjacentHTML("afterBegin", `<img class="foots foot-${ foots_count+1 }" src="/static/cats_foot/foots/foot${ randomIntFromInterval(1, 6) }.png" alt="" style="transform: rotate(${ rotate }deg) translate(0px, 150%); top: ${ y - 45 }px; left: ${ x - 65 }px; z-index: 2; transition: all .8s ease; transform-origin: 65px 45px;" width="130"/>`);

    new_foot_elem = cat_foot__main_block.querySelector(`.foot-${ foots_count+1 }`);
    new_food.push(new_foot_elem);

    setTimeout(() => {
        new_food[new_food.length-1].style.transform = `rotate(${ rotate }deg) translate(0px, 0%)`;
        setTimeout(() => {
            new_food[new_food.length-1].style.width = `120px`;
            setTimeout(() => {
                new_food[new_food.length-1].style.width = `130px`;
                setTimeout(() => {
                    new_food[new_food.length-1].style.transform = `rotate(${ rotate }deg) translate(0px, 150%)`;
                    setTimeout(() => {
                        new_food[0].remove();
                        new_food.shift();
                    }, 800);
                }, 100)
            }, 200);
        }, 800);
    }, 1);




}

function paint_cats_paw(x, y, rotate) { //translate

    cat_foot__main_block.insertAdjacentHTML("afterBegin", `<img src="/static/cats_foot/paws/paw${ randomIntFromInterval(1, 10) }.png" alt="" style="transform: rotate(${ rotate }deg); top: ${ y }px; left: ${ x }px; opacity: 0.4;  z-index: 1;" width="70" height="70" />`);
    new_paw = cat_foot__main_block.lastChild;

    new_paw = cat_foot__main_block.querySelectorAll("img")[0];

    var new_paw__width = new_paw.clientWidth / 2;
    var new_paw__height = new_paw.clientHeight / 2;

    new_paw.style.top = `${Number(new_paw.style.top.replace('px', '')) - new_paw__width}px`;
    new_paw.style.left = `${Number(new_paw.style.left.replace('px', '')) - new_paw__height}px`;
}
