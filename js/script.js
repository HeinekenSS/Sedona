var link = document.querySelector('.btn-search');
var modal = document.querySelector('.modal');
var Close = document.querySelector('.btn-search');
link.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.toggle('open')
});