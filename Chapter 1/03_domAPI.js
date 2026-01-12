let name = prompt("What is your name?")
document.getElementById("name").textContent = name;

let text = document.createElement('p');
text.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet repudiandae consequuntur ad incidunt possimus fugiat nulla aperiam, exercitationem itaque temporibus reiciendis sunt, sequi rerum quas doloremque unde. Adipisci, fuga ipsa.";
document.body.appendChild(text);