let copy = document.getElementById("copy");
let para = document.getElementById("para");

copy.addEventListener('click',function(){
    para.select();
    document.execCommand('copy');
});