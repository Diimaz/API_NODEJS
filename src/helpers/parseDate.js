const parsearDates = (date) => {
    const meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const dias = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    //const dateParse = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() + 2} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
    const dateParse = `${dias[date.getDate()]}-${meses[date.getMonth()]}-${date.getFullYear()} ${date.toLocaleTimeString()}.${date.getMilliseconds()}`;   
    return dateParse;
}

module.exports = {
    parsearDates
}