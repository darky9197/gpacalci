function sum(arr){
    sum = 0;
    arr.forEach(element => {
        sum = sum + element
    });
    return sum
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
    let gpa = sum(arr) / 24
    const output = document.getElementById('output').textContent = `GPA : ${gpa.toFixed(2)}`
}
