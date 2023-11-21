var nopress = document.querySelectorAll(".mian").length;

for (var i =0; i<= nopress; i++){

document.querySelectorAll(".mian")[i].addEventListener("click", abc);

function abc() {
    console.log("hi");
}
}

