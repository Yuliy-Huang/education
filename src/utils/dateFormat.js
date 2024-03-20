export function getNowTime() {
    const date = new Date();
    //年 getFullYear()：四位数字返回年份
    const year = date.getFullYear(); //getFullYear()代替getYear()
    //月 getMonth()：0 ~ 11
    const month = date.getMonth() + 1;
    //日 getDate()：(1 ~ 31)
    const day = date.getDate();
    //时 getHours()：(0 ~ 23)
    let hour = date.getHours();
    let period = ''
    if (hour < 8) {
        period = "早上";
    } else if (hour < 12) {
        period = "上午";
    } else if (hour < 18){
        period = "下午";
        hour = hour - 12
    } else {
        period = "晚上";
        hour = hour - 12
    }
    //分 getMinutes()： (0 ~ 59)
    const minute = date.getMinutes();
    //秒 getSeconds()：(0 ~ 59)
    // const second = date.getSeconds();
    //周
    const currentWeek = "周" + "日一二三四五六".charAt(new Date().getDay());
    // console.log('resTime : ', resTime)
    return year + ' 年 ' + month.toString() + ' 月 ' + day.toString() + ' 日' + '\xa0\xa0' + currentWeek + period + '\xa0\xa0' + addZero(hour) + ':' + addZero(minute);
}
//小于10的拼接上0字符串
function addZero(s) {
    return s < 10 ? ('0' + s) : s;
}

export function traverseDaysInMonth(year, month) {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth(); // 注意：getMonth() 返回的月份是从0开始的
    let res = []
    const daysInMonth = new Date(year, month, 0).getDate(); // 获取当月天数
    for (let day = 1; day <= daysInMonth; day++) {
        // const date = new Date(year, month - 1, day);
        res.push(year + '.' + month + '.' + day); // 输出日期或者其他操作
    }
    return res
}
