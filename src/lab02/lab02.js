console.log("Lab 02")

let x = 10;
let y = 8;
let z=8.2;

let diemTb = (x,y,z) =>{
    return (x+y+z)/3 ;
}

let xepLoai = (diemTb) => {
    if(diemTb >= 8) {
        return "Gioi";
    }
    else if(diemTb>=6 && diemTb<8){
        return "Kha";
    }
    else
    {
        return "TB";
    }
}

const myfinalTb = diemTb(x,y,z)
console.log(`
    Diem trung binh: ${myfinalTb}
    Xep loai: ${xepLoai(myfinalTb)}`)

// console.log(diemTb(x,y,z))