//store the products array in localstorage as "products"
function storedata(e){
    event.preventDefault();
    // input.innertext="";
    let form=document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let img=form.image.value;

    var a=new student(type,desc,price,img);
    var data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(a);
    localStorage.setItem("products",JSON.stringify(data));
    location.reload();

}
function student(a,b,c,d)
{
    this.type=a;
    this.desc=b;
    this.price=c;
    this.image=d;
}