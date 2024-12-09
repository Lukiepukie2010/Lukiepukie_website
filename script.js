let sentence = document.querySelector('#sentence');
let lukie = document.querySelector('em');

lukie.addEventListener("click", () => {
  sentence.textContent += 'You clicked on my  username. Do you have a problem with that? Go visit my Github page!!! '
});
