
let timeout;

function debouncePopulateDiv(){

    clearTimeout(timeout);
    timeout = setTimeout(function(){
        populateDiv()
    },1000)
}

function populateDiv() {
    const a = document.getElementById("firstNumber").value
    const b = document.getElementById("secondNumber").value

    //  const element = document.getElementById("finalSum")

    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
        .then(function (responce) {
            responce.text()
                .then(function (ans) {
                    document.getElementById("finalSum").innerHTML = ans
                })
        })

    //  element.innerHTML = parseInt(a) + parseInt(b)

}

 async function populateDiv2(){
    const a = document.getElementById("firstNumber").value
    const b = document.getElementById("secondNumber").value

    
     const responce = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
     const ans = await responce.text();
     document.getElementById("finalSum").innerHTML = ans
       
}