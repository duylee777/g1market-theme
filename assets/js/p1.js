let thisPage = 1;
let limit = 1;

function createNewElement(element, className) {
    let newElement = document.createElement(element);
    newElement.className = className;
    return newElement;
}

function getList(className) {
    let list = document.querySelectorAll(className);
    return list;
}

function prevBtn(btn) {
    let iconPrev = createNewElement('i','fa-solid fa-angle-left');
    let prev = createNewElement('li','');
    prev.appendChild(iconPrev);
    prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
    btn.appendChild(prev);
}

function nextBtn(btn) {
    let iconNext = createNewElement('i','fa-solid fa-angle-right');
    let next = createNewElement('li','');
    next.appendChild(iconNext);
    next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
    btn.appendChild(next);
}

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=> {
        if(key >= beginGet && key <= endGet) {
            item.style.display = display;
        }
        else {
            item.style.display = 'none';
        }
    });
    listPage();
}

function listPage() {
    let pageCount = Math.ceil(list.length / limit);
    let btn = document.querySelector('#paginate');
    btn.innerHTML = "";

    if(thisPage != 1) {
        prevBtn(btn);
    }

    for(i = 1; i <= pageCount; i++) {
        let newPage = document.createElement('li');
        newPage.innerHTML = i;
        if(i == thisPage) {
            newPage.classList.add('page--active');
        }
        newPage.setAttribute('onclick', "changePage("+ i +")");
        btn.appendChild(newPage);
    }

    if(thisPage != pageCount) {
        nextBtn(btn);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}

let list = getList('.s-main .card');

// function runPaginate(listName, displayName) {
//     let list = listName;
//     let display = displayName;
//     loadItem(list, display);
// }

// runPaginate(listProduct, 'block');







