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
    const resTime = year + ' 年 ' + month.toString() + ' 月 ' + day.toString() + ' 日' + '\xa0\xa0' + currentWeek + ' ' + period + '\xa0\xa0' + addZero(hour) + ':' + addZero(minute) ;
    console.log('resTime : ', resTime)
    return resTime;
}
//小于10的拼接上0字符串
function addZero(s) {
    return s < 10 ? ('0' + s) : s;
}