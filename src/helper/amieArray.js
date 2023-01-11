// re-structure with map
const items = [
    { id: 0, name: 'apple', price: '650' },
    { id: 1, name: 'orange', price: '500' },
    { id: 2, name: 'yaman', price: '1500' },
    { id: 3, name: 'cake', price: '2400' },
];
const orders = [
    { id: 11, details: [{ item_id: 0, qty: 2 }, { item_id: 2, qty: 2 }] },
    { id: 12, details: [{ item_id: 1, qty: 2 }, { item_id: 3, qty: 2 }] }
];
const resignOrders = orders.map(({ id, details }) => {
    const resignDetails = details.map(({ item_id, qty }) => {
        const filteredItems = items.filter(({ id }) => id === item_id);
        const { name, price } = filteredItems[0];
        return { qty, name, price };
    });
    return {
        id,
        details: resignDetails
    }
})
console.log(resignOrders);
/* 
[
    { id: 11, details: [ {qty: 2, name: 'apple', price: '650}, {qty: 2, name: 'yaman', price: '1500'} ] },
    { id: 12, details: [ {qty: 2, name: 'orange', price: '500'},{qty: 2, name: 'cake', price: '2400'} ] }
]
*/

const helloWorld = [['amie', 23], ['arkar', 26], ['khaing zar oo', 0]];
const newWorld = helloWorld.map(([name, age]) => {
    return {
        name, age
    }
});
// [ {name: 'amie', age: 23},{name: 'arkar', age: 26},{name: 'khaing zar oo', age:0}]
const users = [{ name: 'amie', age: 23 }, { name: 'arkar', age: 26 }, { name: 'khaing zar oo', age: 0 }];
const newUsers = users.map(({ name, age }) => {
    return [
        name, age
    ]
});




class Amie {
    constructor(array) {
        this.array = array;
    }
    filter(filterFunc = () => true) {
        let filtered = [];
        for (let i = 0; i < this.array.length; i++) {
            if (filterFunc(this.array[i])) {
                filtered = [...filtered, this.array[i]];
            }
        }
        return filtered;
    }
    map(mapFunc = () => { }) {
        let responses = [];
        for (let i = 0; i < this.array.length; i++) {
            const response = mapFunc(this.array[i]);
            if (response) {
                responses = [...responses, response];
            }
        }
        return responses;
    }
}

export default Amie;

/*
const amie = new Amie(['one','two','three']);
        const one = amie.filter( (item)=>item === 'one' );
        // console.log(one[0]);

        const users = new Amie([
            {name: 'arkar mann aung',age: 26, gender: 'M'},
            {name: 'a mie mie lwin',age: 23, gender: 'F'},
        ]);
        const males = users.filter( ({gender})=>gender==='M' );
        // console.log(males[0]);

        // js default map func
        ['one','two','three'].map((item)=>{
            console.log(item," default map func");
        })
        // custom map func
        amie.map((item)=>{
            console.log(item," custom map func");
        })

        // test on re-format with other object
        // default
        const numbers = ['one','two','three'].map((item)=>{
            [{num:'one'},{num:'two'},{num:'three'}]
            return {num: item};
        })
        console.log(numbers);

        // my custom map
        const numbers2 = amie.map((item)=>{
            return {num: item};
        })
        console.log(numbers2);
        const user = [
            {
                id: 1,
                product_name: 'apple',
                product_qty: 2,
                product_price: 1300,
            },
            {
                id: 1,
                product_name: 'orange',
                product_qty: 12,
                product_price: 2300,
            },
            {
                id: 1,
                product_name: 'coffee',
                product_qty: 24,
                product_price: 1200,
            },
            {
                id: 1,
                product_name: 'love',
                product_qty: 1,
                product_price: 1500,
            }
        ]
        const newUser = user.map(({
            id,
            product_name: name,
            product_qty: qty,
            product_price: price
        })=>{
            return {id,name,amount: qty * price};
        })
        console.log(newUser)
*/