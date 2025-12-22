const h1 = document.getElementById("myh1");
const btn = document.getElementById("button");

btn.addEventListener('click', function() {
    h1.innerHTML = "Surprise!✨🎉";
    h1.classList.add('animate-bounce');
    h1.classList.remove('opacity-0')
})