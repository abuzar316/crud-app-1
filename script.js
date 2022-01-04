const data = [ 
    {ename: "Abuzar", rollN : 120, tech : "UI"},
    {ename: "Kaleem", rollN : 122, tech : "CAD"},
    {ename: "Asif", rollN : 125, tech : "php"},
    {ename: "Alam", rollN : 126, tech : "php"}
]

const ename = document.querySelector("#name"),
rollNumber = document.querySelector("#r-number"),
tech = document.querySelector("#tech"),
search = document.querySelector("#search"),
searchBy = document.querySelector("#select"),
arrIndex = document.querySelector("#addindex"),
saveBtn = document.querySelector("#save-data"),
submitBtn = document.querySelector("#submit");

function showdata(){
    tbl = `<table border='1' class="table table-striped table-hover">
        <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Technology</th>
            <th>Delete</th>
            <th>Rename</th>
        </tr>`;
    data.forEach((e , y)=>{
        tbl+=   `<tr>
                    <th>${e.ename}</th>
                    <th>${e.rollN}</th>
                    <th>${e.tech}</th>
                    <th> <button class="btn btn-danger" onclick="del(${y})">Del</button> </th>
                    <th> <button class="btn btn-danger" onclick="rename(${y})">rename</button> </th>
                </tr>`
    })
    document.querySelector("#bind").innerHTML = tbl
}
showdata();
function rename(x){
    ename.value = data[x].ename;
    rollNumber.value = data[x].rollN;
    tech.value = data[x].tech;
    submitBtn.style.display = "none";
    saveBtn.style.display = "block";
    arrIndex.value = x;
}
saveBtn.onclick = ()=>{
    dataval =  parseInt(arrIndex.value);
    data[dataval] = {ename: ename.value ,rollN : rollNumber.value , tech : tech.value}
    showdata();
    submitBtn.style.display = "block";
    saveBtn.style.display = "none";
    ename.value = ""
    rollNumber.value = ""
    tech.value = ""
}

submitBtn.onclick = ()=>{
    data.push({ename: ename.value ,rollN : rollNumber.value , tech : tech.value})
    console.log(data)
    tbl = `<table border='1' class="table table-striped table-hover">
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Technology</th>
                <th>Delete</th>
                <th>Rename</th>
            </tr>`;
    data.forEach((e , y)=>{
        tbl+=   `<tr>
                    <th>${e.ename}</th>
                    <th>${e.rollN}</th>
                    <th>${e.tech}</th>
                    <th> <button  class="btn btn-danger" onclick="del(${y})">Del</button> </th>
                    <th> <button class="btn btn-danger" onclick="rename(${y})">rename</button> </th>
                </tr>`

        
    })
    document.querySelector("#bind").innerHTML = tbl
    ename.value = ""
    rollNumber.value = ""
    tech.value = ""
}

document.querySelector("#search-data").onclick = ()=>{

    console.log(searchBy.value)
    filterdata = data.filter((fil)=>{
        if("ename" == searchBy.value){
            if(fil.ename == search.value){
                return fil
            }
        }
        else if("rollN" == searchBy.value){
            if(fil.rollN == search.value){
                return fil
            }
        }
        else if("tech" == searchBy.value){
            if(fil.tech == search.value){
                return fil
            }
        }
    })
    tbl = `<table border='1' class="table table-striped table-hover">
            <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Technology</th>
                <th>Delete</th>
                <th>Rename</th>
            </tr>`;
    filterdata.forEach((x , y)=>{
        tbl+=   `<tr>
                    <th>${x.ename}</th>
                    <th>${x.rollN}</th>
                    <th>${x.tech}</th>
                    <th> <button class="btn btn-danger" onclick="del(${y})">Del</button> </th>
                    <th> <button class="btn btn-danger" onclick="rename(${y})">rename</button> </th>
                </tr>`

        
    })
    document.querySelector("#bind").innerHTML = tbl
}

function del(del){
    data.splice(del , 1)
        tbl = `<table border='1' class="table table-striped table-hover">
        <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Technology</th>
            <th>Delete</th>
            <th>Rename</th>
        </tr>`;
        data.forEach((e , y)=>{
            tbl+=   `<tr>
                        <th>${e.ename}</th>
                        <th>${e.rollN}</th>
                        <th>${e.tech}</th>
                        <th> <button  class="btn btn-danger" onclick="del(${y})">Del</button> </th>
                        <th> <button class="btn btn-danger" onclick="rename(${y})">rename</button> </th>
                    </tr>`
    })
    
    document.querySelector("#bind").innerHTML = tbl ;
}
