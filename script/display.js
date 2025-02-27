const elements = document.querySelectorAll('.hide');
for(const element of elements){
    element.style.display="none"
}
document.getElementById('log-out').addEventListener('click', function(){
    window.location.href = "../index.html"
})

