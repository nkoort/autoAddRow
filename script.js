let grid = document.querySelector('.grid'),
    button = document.getElementsByTagName('button')[0],
    inputName = document.querySelectorAll('.name');

function addRow() {
    let id = document.createElement('input'),
        name = document.createElement('input');
    grid.appendChild(id).classList.add('grid-input', 'id');
    grid.appendChild(name).classList.add('grid-input', 'name');
};

function count() {
    let countRow = document.querySelectorAll('.name').length,
        input = document.querySelectorAll('.name'),
        inputId = document.querySelectorAll('.id');
    let countLast = countRow - 1;

    if (countLast < 1) {
        input[countLast].classList.add('last');
        inputId[countLast].classList.add('last');
    } else {
        let countPrev = countRow - 2;
        let countPunitem = countRow - 3;
        input[countPunitem].classList.remove('punitem');
        input[countPrev].classList.replace('last', 'punitem');
        input[countLast].classList.add('last');
        inputId[countPunitem].classList.remove('punitem');
        inputId[countPrev].classList.replace('last', 'punitem');
        inputId[countLast].classList.add('last');
        inputId[countLast].value = countLast + 1;
    };
};

function autoRow() {
    let  grid = document.querySelector('.grid');
    grid.addEventListener('change', function (event) {
        target = event.target;
        if (target && target.classList.contains('last') && target.value > '') {
            addRow();
            count();
        };
    });
};
autoRow();
