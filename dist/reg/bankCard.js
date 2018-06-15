import createReg from './Reg';
function isBankCard(bankno) {
    if (!bankno)
        return false;
    let lastNum = bankno.substr(bankno.length - 1, 1);
    let first15Num = bankno.substr(0, bankno.length - 1);
    let newArr = [];
    for (let i = first15Num.length - 1; i > -1; i--) {
        newArr.push(first15Num.substr(i, 1));
    }
    let arrJiShu = [];
    let arrJiShu2 = [];
    let arrOuShu = [];
    for (let j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 === 1) {
            if (parseInt(newArr[j], 10) * 2 < 9)
                arrJiShu.push(parseInt(newArr[j], 10) * 2);
            else
                arrJiShu2.push(parseInt(newArr[j], 10) * 2);
        }
        else {
            arrOuShu.push(newArr[j], 10);
        }
    }
    let jishu_child1 = [];
    let jishu_child2 = [];
    for (let h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h], 10) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h], 10) / 10);
    }
    let sumJiShu = 0;
    let sumOuShu = 0;
    let sumJiShuChild1 = 0;
    let sumJiShuChild2 = 0;
    let sumTotal = 0;
    for (let m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m], 10);
    }
    for (let n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n], 10);
    }
    for (let p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p], 10);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p], 10);
    }
    sumTotal = sumJiShu + sumOuShu + sumJiShuChild1 + sumJiShuChild2;
    let k = sumTotal % 10 === 0 ? 10 : sumTotal % 10;
    let luhn = 10 - k;
    if (lastNum === luhn) {
        return true;
    }
    else {
        return false;
    }
}
export default createReg(isBankCard);
