
Submit = () =>{
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const salary = document.getElementById('salary').value;
    const age = document.getElementById('age').value;
    

    const cardData =[
     {
        name: name ,
        address: address,
        salary: salary,
        age: age,
      },
    ] 

const mainDiv = document.getElementById('container');

for(let i=0 ; i<cardData.length ; i++){
  const div =document.createElement('div');

   div.style.width = '260px';
   div.style.padding = '15px';
   div.style.margin = '15px 15px';
   div.style.borderRadius = '10px';
   div.style.backgroundColor = '#f5f7fa';
   div.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
   div.style.fontFamily = 'Arial, sans-serif';
   

  const etf = (cardData[i].salary/100)*8;
  const epf = (cardData[i].salary/100)*12;
  div.innerText = "name : "+cardData[i].name +"\n"+"address : "+cardData[i].address +"\n"+"age : "+cardData[i].age+"\n"+"salary : "+cardData[i].salary+"\n"+"etf : "+etf+"\n"+"epf : "+epf+"\n\n\n"
  mainDiv.appendChild(div);
}
}
