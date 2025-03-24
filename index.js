const temp = document.querySelector(".weather1");
const loca = document.querySelector(".weather2 h3");
const date = document.querySelector(".weather2 p");
const image = document.querySelector(".weather3 p img");
const condition = document.querySelector(".weather3 span");
const enter = document.querySelector(".input");
const btn = document.querySelector(".button");

let target;

const fetchData = async(target) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=23b4f6192187435ca4d61222252303&q=${target}`;
    const response = await fetch(url);
    const data = await response.json();
    const {
        current : {temp_c,
            condition : {icon,text},
        },
        location : {name,localtime},
    } = data;
    updateDom(temp_c,name,icon,text,localtime);
};

function updateDom(tempa,name,icon,text,localtime){
    temp.innerText = tempa;
    loca.innerText = name;
    image.src = icon;
    condition.innerText = text;
    date.innerText = localtime;
}

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    target = enter.value;
    fetchData(target);
});