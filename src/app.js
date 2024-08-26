/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  const bios = [];

  for (let index = 0; index < pronoun.length; index++) {
    for (let secondIndex = 0; secondIndex < adj.length; secondIndex++) {
      for (let thirdIndex = 0; thirdIndex < noun.length; thirdIndex++) {
        for (
          let fourthIndex = 0;
          fourthIndex < extension.length;
          fourthIndex++
        ) {
          bios.push(
            `${pronoun[index]}${adj[secondIndex]}${noun[thirdIndex]}${extension[fourthIndex]}`
          );
        }
      }
    }
  }

  //write your code here
  const domainList = document.getElementById("domain-list");
  for (const bio of bios) {
    const p = document.createElement("p");
    p.textContent = bio;
    domainList.appendChild(p);
  }
};
