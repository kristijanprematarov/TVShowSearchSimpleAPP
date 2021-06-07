const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    const row = document.querySelector('#showContainer');
    removeAllChildNodes(row);
    e.preventDefault();
    // const inputValue = form.elements.query.value; //isto e so dolnoto
    const inputValue = this.elements.query.value;
    const config = {params: {q:inputValue}}; //vaka bara samata tvmaze.com
    console.log(inputValue);
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config)
    makeImages(res.data);
    this.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            const row = document.querySelector('#showContainer');
            const col = document.createElement('div');
            col.classList.add('col', 'mt-3', 'text-center');
            col.append(img);
            row.append(col);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}