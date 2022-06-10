const range = document.querySelector('input[type=range]');
const pageviews = document.querySelector('.pageviews');
const price = document.querySelector('.price');
const switchBtn = document.querySelector('.switch');

window.addEventListener('load', () => {
    range.value = 3;
})

range.addEventListener('change', (e) => {
    let pageviewsNum = '';
    let priceNum = '';
    switch (e.target.value) {
        case '1':
            pageviewsNum = '10K';
            priceNum = '8';
            break;
        case '2':
            pageviewsNum = '50K';
            priceNum = '12';
            break;
        case '3':
            pageviewsNum = '100K';
            priceNum = '16';
            break;
        case '4':
            pageviewsNum = '500K';
            priceNum = '24';
            break;
        case '5':
            pageviewsNum = '1M';
            priceNum = '36';
            break;
    }
    if (switchBtn.checked == true) {
        pageviews.innerText = `${pageviewsNum} PAGEVIEWS`;
        price.innerText = `$${priceNum - priceNum * 0.25}.00`;
    } else if (switchBtn.checked == false) {
        pageviews.innerText = `${pageviewsNum} PAGEVIEWS`;
        price.innerText = `$${priceNum}.00`;
    }
    switchBtn.addEventListener('change', (e) => {
        if (e.target.checked == true) {
            pageviews.innerText = `${pageviewsNum} PAGEVIEWS`;
            price.innerText = `$${priceNum - priceNum * 0.25}.00`;
        } else if (e.target.checked == false) {
            pageviews.innerText = `${pageviewsNum} PAGEVIEWS`;
            price.innerText = `$${priceNum}.00`;
        }
    })
})


