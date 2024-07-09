document.getElementById('btn').addEventListener('click', () => {
  promise1()
      .then(promise2)
      .then(promise3)
      .catch((error) => console.error('Error fetching data:', error));
});
function promise1(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        fetch('https://dummyjson.com/posts').then((response)=>response.json()) 
        .then((data)=>{
          displaydata('API1',data.posts);
          resolve();
        })
        .catch((error)=>console.error('Error fetching API 1:', error));  
      },1000);
    });
}
function promise2(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      fetch('https://dummyjson.com/products').then((response)=>response.json()) 
      .then((data)=>{
        displaydata('API2',data.products);
        resolve();
      })
      .catch((error)=>console.error('Error fetching API 2:', error));  
    },2000);
  });
}
function promise3(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      fetch('https://dummyjson.com/todos').then((response)=>response.json()) 
      .then((data)=>{
        displaydata('API3',data.todos);
        resolve();
      })
      .catch((error)=>console.error('Error fetching API 3:', error));  
    },3000);
  });
}
function displaydata(apiName, data) {
  const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = apiName;
  cell2.textContent = JSON.stringify(data, null, 2);
}