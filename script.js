function sem4(arr){
    res = 0;
    arr.forEach(element => {
        res = res + element
    });

    return res
}

function run(){
    const ios = document.getElementById('ios').value
    const toc = document.getElementById('toc').value
    const oslab = document.getElementById('oslab').value
    const dbmslab = document.getElementById('dbmslab').value
    const aiml = document.getElementById('aiml').value
    const dbms = document.getElementById('dbms').value
    const ess = document.getElementById('ess').value
    const we = document.getElementById('we').value
    const nmlab = document.getElementById('nmlab').value



    console.log(ios*3);
    console.log(we*4);
    let arr = [(ios*3),(toc*3),(oslab*1.5),(dbmslab*1.5),(aiml*4),(dbms*3),(ess*2),(we*4),(nmlab*2)]
    console.log(arr);
    let gpa = add(arr) / 24

    const output = document.getElementById('output').textContent = `GPA : ${gpa.toFixed(2)}`
}


function sem5(arr){
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
