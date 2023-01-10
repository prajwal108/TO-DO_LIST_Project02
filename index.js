function update(){
    if(localStorage.getItem("itemsJson")==null){
        itemsJsonArr = []; 
            localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArr));
    }
    else{
        itemsJsonArrStr = localStorage.getItem("itemsJson");
        itemsJsonArr = JSON.parse(itemsJsonArrStr);
    }
    //Populate the table
    let tableBody = document.getElementById("tableBody");
    let str="";
    itemsJsonArr.forEach((element,index) => {
          str+=`  <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-primary del" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
}
function getAndUpdate(){
    tt = document.getElementById("title").value;
    td = document.getElementById("w3review").value;
    let itemsJsonArr = []; 
    if(localStorage.getItem("itemsJson")==null){
        
        itemsJsonArr.push([tt,td]);
        localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArr));
    }
    else{
        itemsJsonArrStr = localStorage.getItem("itemsJson");
        itemsJsonArr = JSON.parse(itemsJsonArrStr);
        itemsJsonArr.push([tt,td]);
        localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArr));
    }
    update();
}

add = document.getElementById('add');
add.addEventListener("click",getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemsJsonArrStr = localStorage.getItem("itemsJson");
    itemsJsonArr = JSON.parse(itemsJsonArrStr);
    // Deleting element from the Array
    itemsJsonArr.splice(itemIndex,1);
    localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArr));
    update();
}


function clearAL(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage');
    localStorage.clear();
    console.log(localStorage);
    update();   
    }
}

// var searchBox = document.getElementById("searchBox").value;
// function searchList(searchBox){
    
//     searchBox = searchBox.toLowerCase();
//     var l = itemsJsonArr.length;

//     }

