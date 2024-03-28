export function toChineseNumber(num) {
  const numbers = [
    '0',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
    '十三',
    '十四',
    '十五',
    '十六',
    '十七',
    '十八',
    '十九',
    '二十',
  ];
  if (num >= 0 && num <= 20) {
    return numbers[num];
  }
  return '数字超出范围';
}
