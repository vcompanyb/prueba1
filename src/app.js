/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("myButton").addEventListener("click", function() {
    const domainNames = generateDomainNames();

    appendDomainNames(
      document.querySelector(".domains_container"),
      domainNames,
      "p"
    );

    appendDomainNames(
      document.querySelector(".another_domains_container"),
      domainNames,
      "li"
    );
  });

  appendDomainNames(
    document.querySelector(".domains_container"),
    generateDomainNames(),
    "p"
  );
};

function generateDomainNames() {
  let domainNames = [];
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  for (let i = 0; i < pronouns.length; i++) {
    let pronoun = pronouns[i];

    for (let j = 0; j < adjs.length; j++) {
      let adj = adjs[j];

      for (let z = 0; z < nouns.length; z++) {
        let noun = nouns[z];

        domainNames.push(`${pronoun}${adj}${noun}.com`);
      }
    }
  }
  return domainNames;
}

function appendDomainNames(element, domainNames, tag) {
  console.log(domainNames.join(`</${tag}><${tag}>`));
  element.innerHTML =
    `<${tag}>` + domainNames.join(`</${tag}><${tag}>`) + `</${tag}>`;
}
