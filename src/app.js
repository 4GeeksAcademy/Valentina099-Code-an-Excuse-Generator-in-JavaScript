window.onload = function() {
  let who = ["The dog", "My grandma", "My sister", "My cat"];
  let action = [" ate", " peed", " smash", " broke"];
  let what = [" my homework", " my phone", " the car", " my computer"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was at the mall",
    " during my lunch",
    " while I was with my mom"
  ];

  let parte1 = Math.floor(Math.random() * who.length);
  let parte2 = Math.floor(Math.random() * action.length);
  let parte3 = Math.floor(Math.random() * what.length);
  let parte4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[parte1] + action[parte2] + what[parte3] + when[parte4];
};
