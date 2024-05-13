function validtag(){
  const tagInput= document.getElementById('tag').value;
  const regex = /^<\w+(?:\s+\w+="[^"]*")*\ s*\/>$/;

  const result = document.getElementById('result');
  if(regex.test(tagInput)){
    result.style.color= 'green';
    result.textContent ='valid';

  }else {
    result.style.color='red';
    result.textContent= 'invalid';
}



}