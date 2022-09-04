const count = document.querySelector(".count-char");
const input = document.querySelector(".form-control");

input.addEventListener("keyup",()=>{
    count.innerHTML = input.value.length;
})