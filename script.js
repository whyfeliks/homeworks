'use strict'
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const $goodslist = document.querySelector('.goods-list');

class GoodsList {
  getSum(goods) {
    return `Итоговая стоимость корзины: ${goods.reduce((sum, item) => sum + item.price, 0)}`;
  }
}

class GoodsListButton {
  renderGoodsItem({ title, price }) {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  }
  renderGoodsList(list = goods) {
    let goodsList = list.map(item => this.renderGoodsItem(item)).join('');
    $goodslist.insertAdjacentHTML('beforeend', goodsList);
  }
}

let goodsList = new GoodsList();
console.log(goodsList.getSum(goods));

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         (item) => {
//             return renderGoodsItem(item)
//         }
//     ).join('');

//     $goodslist.insertAdjacentHTML('beforeend', goodsList);
// }

const goodsListButton = new GoodsListButton();
goodsListButton.renderGoodsList();

// 3 задание
const menu = {
  size: {
    small: {
      price: 50,
      calories: 20
    },
    big: {
      price: 100,
      calories: 40
    }
  },
  stuffing: {
    cheese: {
      price: 10,
      calories: 20
    },
    salad: {
      price: 20,
      calories: 5
    },
    potato: {
      price: 15,
      calories: 10
    }
  },
  topping: {
    seasoning: {
      price: 15,
      calories: 0
    },
    mayo: {
      price: 20,
      calories: 5
    }
  }
};

class Order {
  constructor(size, stuffing, topping) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = 0 || topping;
  }
  
  getTotalPrice() {
    let toppingPrice = this.topping ? menu.topping[this.topping]['price'] : 0;
    return `Итоговая стоимость бургера: ${menu.size[this.size]['price'] + menu.stuffing[this.stuffing]['price'] + toppingPrice}`;
  }

  getTotalCalories() {
    let toppingCalories = this.topping ? menu.topping[this.topping]['calories'] : 0;
    return `Итого калорий: ${menu.size[this.size]['calories'] + menu.stuffing[this.stuffing]['calories'] + toppingCalories}`;
  }
}

let golodniy = new Order('big', 'cheese', 'mayo');
let dieta = new Order('small', 'salad');
let hochuBurger = new Order('big', 'potato', 'mayo');

console.log(golodniy.getTotalPrice());
console.log(golodniy.getTotalCalories());

console.log(dieta.getTotalPrice());
console.log(dieta.getTotalCalories());

console.log(hochuBurger.getTotalPrice());
console.log(hochuBurger.getTotalCalories());