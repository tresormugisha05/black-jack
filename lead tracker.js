let loc=[]
let idEl=document.getElementById("id-el")
let nameEl=document.getElementById("name-el")
let depEl=document.getElementById("dep-el")
let saveEl=document.getElementById("save-btn")
let deleteEl=document.getElementById("delete-btn")
let ulEl= document.getElementById("ul-el")
let webEl=document.getElementById("url-el")
let render=localStorage.getItem(JSON.parse("loc"))
if(render){
    loc=render
    save()
}
saveEl.addEventListener("click",function(){
    loc.push(webEl.value)
     localStorage.setItem("loc",JSON.stringify(loc))
    save()
})
function save(){
    
    for(let i=0; i<loc.length;i++){
 ulEl.innerHTML +=`<li><a href="${loc[i]}" target="_blank">${loc[i]}</a></li>`
}
    idEl.value=""
     nameEl.value=""
     depEl.value=""
     webEl.value=""
     
}
deleteEl.addEventListener("dblclick",function(){
    localStorage.clear
    loc=[]
    ulEl.innerHTML=""
     idEl.value=""
     nameEl.value=""
     depEl.value=""
     webEl.value=""
})


