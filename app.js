let button=document.querySelector('button');
let input=document.querySelector('input');
let ul=document.querySelector('ul');
button.addEventListener('click',function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
        input.value = "";
 
});

  ul.addEventListener("click",function(event){
    if(event.target.nodeName =="BUTTON"){
        let itemrem=event.target.parentElement;
        itemrem.remove();
        console.log("deleted")
    }
    
  });
