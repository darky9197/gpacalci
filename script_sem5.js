function add(arr){
    res = 0;
    arr.forEach(element => {
        res = res + element
    });

    return res
}

function run(){
    const devops = document.getElementById('devops').value
    const ba = document.getElementById('ba').value
    const dc = document.getElementById('dc').value
    const cn = document.getElementById('cn').value
    const esiot = document.getElementById('esiot').value
    const fswd = document.getElementById('fswd').value
    const fswdlab = document.getElementById('fswdlab').value
    const drrm = document.getElementById('drrm').value
    const nmlab = document.getElementById('nmlab').value


    let arr = [(devops*3),(ba*3),(dc*3),(cn*4),(esiot*4),(fswd*3),(fswdlab*2),(drrm*0),(nmlab*2)]
    console.log(arr);
    let gpa = add(arr) / 24

    const output = document.getElementById('output').textContent = `GPA : ${gpa.toFixed(2)}`
}
