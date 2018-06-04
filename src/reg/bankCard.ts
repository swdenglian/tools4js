import Reg from './Reg';

function isBankCard(bankno) {
  // 为空
  if (!bankno) return false;
  // 不为空
  let lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhn进行比较）
  let first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
  let newArr = [];
  for (let i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
    newArr.push(first15Num.substr(i, 1));
  }
  let arrJiShu = []; //奇数位*2的积 <9
  let arrJiShu2 = []; //奇数位*2的积 >9
  let arrOuShu = []; //偶数位数组
  for (let j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 === 1) { //奇数位
      if (parseInt(newArr[j], 10) * 2 < 9) arrJiShu.push(parseInt(newArr[j], 10) * 2);
      else arrJiShu2.push(parseInt(newArr[j], 10) * 2);
    } else {
      //偶数位
      arrOuShu.push(newArr[j], 10);
    }
  }

  let jishu_child1 = []; //奇数位*2 >9 的分割之后的数组个位数
  let jishu_child2 = []; //奇数位*2 >9 的分割之后的数组十位数
  for (let h = 0; h < arrJiShu2.length; h++) {
    jishu_child1.push(parseInt(arrJiShu2[h], 10) % 10);
    jishu_child2.push(parseInt(arrJiShu2[h], 10) / 10);
  }

  let sumJiShu = 0; //奇数位*2 < 9 的数组之和
  let sumOuShu = 0; //偶数位数组之和
  let sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
  let sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
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
  //计算总和
  sumTotal = sumJiShu + sumOuShu + sumJiShuChild1 + sumJiShuChild2;

  //计算luhn值
  let k = sumTotal % 10 === 0 ? 10 : sumTotal % 10;
  let luhn = 10 - k;

  if (lastNum === luhn) {
    // $("#banknoInfo").html("luhn验证通过");
    return true;
  } else {
    // $("#banknoInfo").html("银行卡号必须符合luhn校验");
    return false;
  }
}

export default new Reg(isBankCard);