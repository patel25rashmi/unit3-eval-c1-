append();

function append(){
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let all_products = document.getElementById("all_products");
    all_products.innerHTML = null;

    data.forEach(function (el,index) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;

        let pt = document.createElement("p");
        pt.innerText = el.type;

        let pd = document.createElement("p");
        pd.innerText = el.desc;

        let pri = document.createElement("p");
        pri.innerText = el.price;

        let remove_product = document.createElement("button");
        remove_product.innerText = "Remove Product";
        remove_product.addEventListener("click", function() {
            remove(index);
        });

        div.append(img, pt, pd, pri, remove_product);
        all_products.append(div);
    });
}

function remove(index) {
    let data = JSON.parse(localStorage.getItem("products")) || [];

    let newData = data.filter(function (el, i){
       if(i===index) {
           let trash = JSON.parse(localStorage.getItem("trash")) || [];
           trash.push(el);
           localStorage.setItem("trash", JSON.stringify(trash));
       }
       else 
       {
           return i !==index;
       }
    });

    localStorage.setItem("products", JSON.stringify(newData));
    append();
    
}


// function remove(index) {
//     let data = JSON.parse(localStorage.getItem("products")) || [];

//     let newData = data.filter(function (el, i){
//         return i !==index;
//     });

//     console.log(newData);
// }