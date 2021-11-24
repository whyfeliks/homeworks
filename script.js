'use strict'
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const $goodslist = document.querySelector('.goods-list');
console.log($goodslist)

const renderGoodsItem = ({ title, price }) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        (item) => {
            return renderGoodsItem(item)
        }
    ).join('');

    $goodslist.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();


