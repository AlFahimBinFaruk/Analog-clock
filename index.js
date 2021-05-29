console.log("analog clock");;

setInterval(function () {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds()

    hro = 30 * h + m / 2;
    mro = 6 * m;
    sro = 6 * s
    //you have to use id for calling these element cannot use class..//
    hour.style.transform = `rotate(${hro}deg)`
    min.style.transform = `rotate(${mro}deg)`;
    sec.style.transform = `rotate(${sro}deg)`
}, 1000);