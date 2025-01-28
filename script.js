var confirmContainer = confirm("Do You Know Coding?") 

if (confirmContainer == true) {
    
    var promptBox = prompt("var a = '12'; var b = 12; var sum = a+b; console.log(sum);    what is the answer of that?");

    if(promptBox == 1212){

        alert("Yes it is! You can use it")
        var input = document.querySelector(".search-bar").disabled = false;

        searchItem();
    }

    else {

        alert("Unless you don't know coding, you cannot use it.")
        var input = document.querySelector(".search-bar").disabled = true;
    }
}

else {

    alert("You have to learn coding at first");
}

function searchItem(){
    var form = document.querySelector(".form");
    form.addEventListener("submit",()=>{
        
    var searchBarValue = document.querySelector(".search-bar").value;

    if (searchBarValue.trim()!=="") {
        
        var googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchBarValue)}`;
        window.open(googleURL,"_blank")
    }

    else {

        alert("Enter a search query")
    }

})
}

// searchItem()





var hour = document.querySelector(".hour")
var minute = document.querySelector(".minute")
var second = document.querySelector(".second")

function time() {

    var ctime = new Date()
    var hrs = ctime.getHours();
    var min = ctime.getMinutes();
    var sec = ctime.getSeconds()

    hour.innerHTML = hrs;
    minute.innerHTML = min;
    second.innerHTML = sec;
}

setInterval(time, 1000)