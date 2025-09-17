console.log("Lab 03")

const pd1 = {
    name : "ao thun",
    price : 200,
    inStock : true
}
const pd2 = {
    name : "ao tay dai",
    price : 300,
    inStock : true
}
const pd3 = {
    name : "ao khoac",
    price : 500,
    inStock : false
}
const pd4 = {
    name : "quan short",
    price : 200,
    inStock : true
}
const pd5 = {
    name : "quan jeans",
    price : 200,
    inStock : false
}

const listPd = [pd1,pd2,pd3,pd4,pd5];

console.log(listPd);

//1. In ra ten sp dau tien

console.log(listPd[0].name);

//2. thay doi gia t2 va in ra tat ca

listPd[1].price = 10000;
console.log(listPd);

//3. Them mot san pham moi vao cuoi bang

const pd6 = {
    name : "quan new",
    price : 100000,
    inStock : false
}

listPd[5] = pd6;

console.log(listPd);
//4. xoa san pham cuoi cung

delete listPd[5];
console.log(listPd);

//5. In ra tat ca ten san pham
listPd.forEach( (value, index) =>{
    console.log(listPd[index].name)
})

//6. dung map => chi lay gia san pham
const newListPricePd = listPd.map( (value, index) =>{
    return listPd[index].price;
})

console.log(newListPricePd);
//7. dung filter de lay cac san pham con hang

listPd.filter( (value, index) =>{
    if(listPd[index].inStock == true){
        console.log(listPd[index].name);
    }
})
//8. dung for in

for (let key in pd1){
    console.log(`${key} : ${pd1[key]}`)
}