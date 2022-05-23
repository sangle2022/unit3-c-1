function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let container=document.getElementById("all_products")
    container.innerHTML=null;

    data.forEach(function (element,index){
        let div= document.createElement("div")
     
     let img=document.createElement("img")
     img.src=element.image;
     let type=document.createElement("p")
     type.innerText=element.type;
   
     let desc=document.createElement("p")
     desc.innerText=element.desc;
     let price=document.createElement("p")
     price.innerText=element.price;
    
     let btn=document.createElement("button")
     btn.innerText="Remove Product";
     btn.addEventListener("click", function() {
         remove(index)
        });

     div.append(img,type,desc,price,btn)
     container.append(div);
    });
   
}
append()  

function remove(index)
{
    let data=JSON.parse(localStorage.getItem("products"))||[];

    let newData=data.filter(function(el,i){
       
            return i!=index;
        
    });
    localStorage.setItem("products",JSON.stringify(newData));
    append();
    location.reload();
}

