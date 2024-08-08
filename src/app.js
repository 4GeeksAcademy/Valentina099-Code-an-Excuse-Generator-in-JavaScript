window.onload = function() {
  let who = ["The dog", "My grandma", "My sister", "My cat!"];
  let action = [" ate", " peed", " smash", " broke"];
  let what = [" my homework", " my phone", " the car", " my computer"];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was at the mall",
    " during my lunch",
    " while I was with my mom"
  ];



   let WhoIndx = Math.floor(Math.random() * who.length);
   let ActionIndx = Math.floor(Math.random() * action.length);
   let WhatIndx = Math.floor(Math.random() * what.length);
   let WhenIndx = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
   who[WhoIndx] + action[ActionIndx] + what[WhatIndx] + when[WhenIndx];
};
