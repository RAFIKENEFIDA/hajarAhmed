function changeParag(){
  const prg=document.getElementsByTagName("input");
  console.log(prg);
  document.querySelector(".paragraph").innerHTML=prg[0].value
}

const arrayName=[

{ marque:"audi",
  color:"red"
},
{
  marque:"dacia",
  color:"red"
}

];

let x=arrayName[1].marque;


