const headre__burger = document.querySelector('.headre__burger');
if (headre__burger){
  const nav = document.querySelector('.nav');
  const tel = document.querySelector('.tel');
  headre__burger.addEventListener("click", function(e){
    headre__burger.classList.toggle('_active');
    nav.classList.toggle('_active');
    tel.classList.toggle('_active');
    document.body.classList.toggle('_luck')
  });
}