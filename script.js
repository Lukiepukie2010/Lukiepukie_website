let sentence = document.querySelector('#sentence');
let lukie = document.querySelector('em');

lukie.addEventListener("click", () => {
  sentence.textContent += 'You clicked on my  username. You like it??? Go visit my Github page!!! '
});
