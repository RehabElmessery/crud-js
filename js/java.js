
   var productContainer;
   let inps = document.getElementsByClassName("form-control");
   if (localStorage.getItem("productsData") == null) {
       productContainer = [];
   }
   else {
       productContainer = JSON.parse(localStorage.getItem("productsData"));
       displayproducts();
   }
   function validDateForm(userName)
   {
       var userNameRegex = /^[A-Z]{3,8}/;
       if(userNameRegex.test(userName) !=false){
           return false;
       }
       else
       {
           return true;
       }
   }
   function addProduct() {
       var productName = document.getElementById("productNameInp").value;
       var productPrice = document.getElementById("productPriceInp").value;
       var productCategory = document.getElementById("productCategoryInp").value;
   
       var productDesc = document.getElementById("productDescInp").value;
   
       if(validDateForm(productName) ==true){
   
   
           var product =
           {
               name: productName,
               price: productPrice,
               category: productCategory,
               desc: productDesc,
           }
       
           productContainer.push(product);
           localStorage.setItem("productsData", JSON.stringify(productContainer))
           displayproducts();
           clearform();
       }
       else
       {
           window.alert("userName not valid")
       }
   }
   
   function displayproducts() {
   
       var temp = "";
   
       for (var i = 0; i < productContainer.length; i++) {
   
           temp += `  <div class="col-md-3">
       <img class="img-fluid" src="images/work-1.jpg">
       <h4>`+ productContainer[i].name + ` <span class="badge badge-secondary ml-3">` + productContainer[i].category + `</span></h4>
       <p>`+ productContainer[i].desc + `</p>
       <div class="price">`+ productContainer[i].price + `</div>
       <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm mb-3">delete</button>
       <button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm mb-3">update</button>
   
       </div>`;
   
       }
   
       document.getElementById("productsRow").innerHTML = temp;
   
   }
   
   
   
   
   function searchproducts(term) {
       var temp = ``;
       for (var i = 0; i < productContainer.length; i++) {
   
   
           if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
               temp += `  <div class="col-md-3"> <div class="product">
                   <img class="img-fluid" src="images/work-1.jpg">
                   <h4>`+ productContainer[i].name + ` <span class="badge badge-secondary ml-3">` + productContainer[i].category + `</span></h4>
                   <p>`+ productContainer[i].desc + `</p>
                   <div class="price">`+ productContainer[i].price + `</div>
                   </div>
                </div>`;
           }
   
       }
       document.getElementById("productsRow").innerHTML = temp;
   
   }
   
   function deleteProduct(indx)
   {
       var deleted = productContainer.splice(indx ,1);
       localStorage.setItem("productsData", JSON.stringify(productContainer))
       displayproducts();
   
   
   }
   
   function updateProduct(index2)
   {

     document.getElementById("productNameInp").value = productContainer[index2].name;
     document.getElementById("productPriceInp").value= productContainer[index2].price;
     document.getElementById("productCategoryInp").value= productContainer[index2].category;
     document.getElementById("productDescInp").value= productContainer[index2].desc;
    
        
        productContainer.splice(index2 ,1);
        localStorage.setItem("product", JSON.stringify(productContainer));
        
        $("#btndown").click(function() {
            
            $("body,html").animate({scrollTop:'0'},1000);
        
        })
        displayproducts();
        
   }
   


function removeInputs(){
    
}

function clearform()
{
    for(var i=0;i<inps.length;i++)
    {
        inps[i].value="";
    }
}
