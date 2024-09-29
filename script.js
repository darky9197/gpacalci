function run(){
    const ios = document.getElementById('ios').value
    const toc = document.getElementById('toc').value
    const oslab = document.getElementById('oslab').value
    const dbmslab = document.getElementById('dbmslab').value
    const aiml = document.getElementById('aiml').value
    const dbms = document.getElementById('dbms').value
    const ess = document.getElementById('ess').value
    const we = document.getElementById('we').value
    const nmlab = document.getElementById('ios').value

    let gpa = ((Number(ios)*3)+(Number(toc)*3)+(Number(oslab)*1.5)+(Number(dbmslab)*1.5)+(Number(aiml)*4)+(Number(dbms)*3)+(Number(ess)*2)+(Number(we)*4)+(Number(nmlab)*2)) / (24)


    console.log(gpa.toFixed(2));
    console.log(typeof(Number(ios.value)));
    const output = document.getElementById('output').textContent = gpa.toFixed(2)
}
