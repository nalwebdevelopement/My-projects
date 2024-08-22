async function logJSONData() {
    window.alert("sdfsdf");
   // const response = await fetch("https://api.thecatapi.com/v1/breeds"); 
   const response = await fetch("https://api.thecatapi.com/v1/images/search"); 
    const jsonData = await response.json();
    console.log(jsonData);
    window.alert("sdfsdfzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    adddata();

}

document.getElementById("but-click").addEventListener('click', () =>{
    window.alert("click");
    logJSONData();
});

function adddata()
{
 window.alert("sdfsdf111");
const x = document.getElementById("breedSelect");
const option = document.createElement("option");
option.value = "name"
option.textContent= "Kiwi";
//x.add(option);
x.appendChild(option);
}