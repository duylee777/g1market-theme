// trang hiện tại
let thisPage = 1; 

//số phần tử trên 1 trang
let limit = 6;

//danh sách tất cả phần tử
let list = document.querySelectorAll('.section-content .posts');

function loadItem() {
    //vị trí lấy đầu tiên
    let beginGet = limit * (thisPage - 1);
    //vị trí lấy cuối cùng
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=> {
        if(key >= beginGet && key <= endGet) {
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    });
    listPage();
}

loadItem();

function listPage() {
    let pageCount = Math.ceil(list.length / limit);
    document.querySelector('.page-list').innerHTML = '';

    if(thisPage != 1) {
        let iconPrev = document.createElement('i');
        iconPrev.className = 'fa-solid fa-angle-left';

        let prev = document.createElement('li');
        prev.appendChild(iconPrev);
        prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
        document.querySelector('.page-list').appendChild(prev);
    }

    for(i = 1; i <= pageCount; i++) {
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if(i == thisPage) {
            newPage.classList.add('page--active');
        }
        newPage.setAttribute('onclick', "changePage("+ i +")");
        document.querySelector('.page-list').appendChild(newPage);
    }

    if(thisPage != pageCount) {
        let iconNext = document.createElement('i');
        iconNext.className = 'fa-solid fa-angle-right';

        let next = document.createElement('li');
        next.appendChild(iconNext);
        next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
        document.querySelector('.page-list').appendChild(next);
    }
    
}

function changePage(i) {
    thisPage = i;
    loadItem();
}