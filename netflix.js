var title = document.querySelector('.mainView .title');
var actionsRow = document.querySelector('#pane-Overview .myListWrapper');
var imdbLink = document.createElement('a');
var imdbSpan = document.createElement('span');

var titleText = '';

if (title === null) {
    throw new Error('No title found');
}

if (title.textContent) {
    titleText = title.textContent;
} else {
    var imageDiv = document.createElement('div');

    imageDiv.innerHTML = title.innerHTML;
    titleText = imageDiv.childNodes[0].getAttribute('alt');
}

imdbLink.href = 'http://us.imdb.com/find?type=substring&q=' +
    encodeURIComponent(titleText) +
    '&sort=smart;tt=1';
imdbLink.className = 'nf-icon-button nf-flat-button';
imdbLink.setAttribute('target', '_blank');

imdbSpan.className = 'nf-flat-button-text';
imdbSpan.textContent = 'IMDB Search';

imdbLink.appendChild(imdbSpan);

actionsRow.appendChild(imdbLink);

