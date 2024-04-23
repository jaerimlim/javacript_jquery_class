//갤러리 스크립트 gallery.js

//변수 페이지번호, 좌,우 버튼 서식
let n = 1; //페이지 초기값
let img_n = document.querySelectorAll('.list_photo > li');
let l_btn = document.querySelectorAll('.fa-angle-left');
let r_btn = document.querySelectorAll('.fa-angle-right');

document.getElementById('img_num').innerHTML = n + '/17';


//썸네일 이미지 목록(li)태그 클릭시 해당 인덱스 번호를 구하여
for(let i=0; i<img_n.length;i++){
  img_n[i].addEventListener('click', function(){
    // console.log(i+1); //선택한 목록이 i값 출력 1~17
    n = i+1;

    imgChange(n); //함수야 받아라!!!!!!!!

  });
}
//이미지 변경하기 위한 함수로 넘기기

/* 사용자 정의함수 imgChange()
  1. 숫자변경
  2. 이미지변경
 */

function imgChange(){
  console.log(n);
  
  //li목록에 적용된 테두리 서식 모두 제거
  for(let j=0; j<img_n.length; j++){
    img_n[j].style.border ='none';
    img_n[j].style.box_sizing = 'border-box';
  }
  //현재 번호에 맞는 목록에 테두리 적용
  img_n[n-1].style.border = '3px solid orange';

  document.getElementById('img_num').innerHTML = n + '/17';
  document.getElementById('main').src = './images01/movie_image' +n+'.jpg';

}
//forEach함수는 배열에서만 사용가능 한 메서드이다.
/*
  문법
    객체 .forEach((매개변수, index)){
      각각실행할 함수 내용을 적는다.
    }
*/
//좌, 우버튼 클릭시 n값을 imgChange함수에 넘기기
l_btn.forEach((el)=>{
  el.addEventListener('click', ()=>{
    if(n==1){
      n=17;
    }else{
      n--;
    }
    imgChange(n); //숫자를 함수에 넘겨준다.
  });
});

r_btn.forEach((el)=>{  // => function 과 동일한 문법
  el.addEventListener('click', ()=>{
    if(n==17){
      n=1;
    }else{
      n++;
    }
    imgChange(n); //숫자를 함수에 넘겨준다.
  });
});

