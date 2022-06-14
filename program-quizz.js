if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded',ready)
}else{
  ready()
}
function ready(){
  /*document.getElementsByClassName('submit')[0].addEventListener('click',submit_clicked);*/
      var start_time, end_time,reset_start_time;
      var start_s, start_m;
      var user_answer=new Array();
      var user_tags=new Array();
      var score=0;
      var ans_clicked=document.getElementsByClassName('one-answer');
      for(var i=0;i<ans_clicked.length;i++){
        var ans_sel=ans_clicked[i];
        ans_sel.addEventListener('click',function(){selection(event,user_answer,user_tags);});
      }
      const start_button=document.getElementsByClassName('begin-quizz')[0];
      document.getElementsByClassName('submit')[0].addEventListener('click',function(){correction(user_answer,user_tags,score);});
      document.getElementsByClassName('reset')[0].addEventListener('click',function(){reset_quiz(user_answer,user_tags);});
      start_button.addEventListener('click',start_quiz)
}
function start_quiz(){
  var remove_begin=document.getElementsByClassName('begining-of-quiz')[0];
  var show_quiz=document.getElementsByClassName('whole-container')[0];
  show_quiz.style.display='block';
  remove_begin.remove();
  show_quiz.style.height='3800px';
  show_quiz.style.padding='50px 100px';
  show_quiz.style.background= 'white';
  show_quiz.style.boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
//  body.style.background='linear-gradient(#ffffff, #eeccff)';
  start_time= new Date();
  start_m=start_time.getMinutes();
  start_s=start_time.getSeconds();
  //console.log(start_s);
  set_time();
}
function set_time(){
  time_now=new Date();
  var m=time_now.getMinutes();
  var s=time_now.getSeconds();
  var minutes=m-start_m;
  var sec=s-start_s;
  //console.log(minutes,sec);
  var current_time= minutes+' : '+sec;
  var content_inside=`<div>Time used : ${current_time}</div>`
  document.getElementsByClassName('display-time')[0].innerHTML=content_inside;
  var show_time=document.getElementsByClassName('display-time')[0];
  var show_time_text=document.getElementsByClassName('display-time')[0].children[0];
  show_time.style.position='fixed';
  show_time.style.left='0px';
  show_time.style.top='0';
  show_time.style.height='50px';
  show_time.style.width='100%';
  show_time.style.paddingLeft='300px';
  show_time_text.style.paddingTop='15px';
  show_time_text.style.fontSize='25px';
  show_time.style.background='rgba(0, 0, 0, 0.5)';
  show_time.style.color='white';
  setTimeout(set_time,500);
}
function selection(event,user_answer,user_tags){
  var ans_type=event.target;
  console.log(ans_type);
  var got_type=ans_type.innerHTML;
  var got_value=ans_type.value;
  user_answer.push(got_type);
  user_tags.push(got_value);
  ans_type.style.background='#e6b3ff';
    double_clicks(user_tags,user_answer);
  //console.log(i);
//  console.log(got_type.parent);
}
function correction(user_answer,user_tags,score){
//  document.getElementsByClassName('display-time')[0].clearTimeout();
  end_time=new Date();
  console.log(end_time);
  console.log('lods');
  for(var j=0;j<user_answer.length;j++){
  var x=document.createElement('span');
  x.classList.add('add-c-symbol');
  var y=document.createElement('span');
  y.classList.add('add-w-symbol');
  var correct_symbol=`<i class="far fa-check-circle"></i>`
  var wrong_symbol=`<i class="far fa-times-circle"></i>`
  x.style.padding='0 0 0 40px';
  y.style.padding='0 0 0 40px';
  var value_list=user_answer[j];
  var tag_list=user_tags[j];
  var selected_tag=document.getElementsByClassName('one-answer')[tag_list];
  if(value_list=='Matale' || value_list=='King Kashyapa'|| value_list=='Lion'|| value_list=='200m' || value_list=='Frescoes'|| value_list=="King Kashyapa's concubines" ||
  value_list=="Mirror Wall"|| value_list=="In 1982" || value_list=="North East"|| value_list=="1500-2000"){
     x.innerHTML=correct_symbol;
    selected_tag.append(x);
    selected_tag.style.background=' #5cd65c';
    x.style.color='#003300';
    score+=2
      console.log('correct');
}else{
  y.innerHTML=wrong_symbol;
  selected_tag.append(y);
  selected_tag.style.background='#ff8080';
  y.style.color='#cc0000';
  score-=1
  console.log('incorrect');
     }
   }
  cal_score(score);
}
function double_clicks(user_tags,user_answer){
  for(j=0;j<user_tags.length-1;j++){
     var size=user_tags.length;
     console.log(user_tags);
     console.log(user_tags[size-1],user_tags[j]);
     console.log(j);
     if(user_tags[size-1]==user_tags[j]){
       alert('You can not choose the same answer twice!');
       user_tags.pop();
       user_answer.pop();
     }
     if(j==(size-2)){
        var lower_limit=(size-2)*4;
        console.log(size-2);
        console.log(lower_limit);
     if((lower_limit<=user_tags[size-1] && user_tags[size-1]<=(lower_limit+3)) && (lower_limit<=user_tags[j] && user_tags[j]<=(lower_limit+3))){
         var num=user_tags[j];
         user_tags.splice(j,1);
         user_answer.splice(j,1);
         console.log(num);
         var remove_color=document.getElementsByClassName('one-answer')[num];
         remove_color.style.background='white';
         console.log(remove_color);
         console.log(user_tags);

     }

   }
  }
}
function reset_quiz(user_answer,user_tags){
  reset_start_time=new Date();
  var limit=user_tags.length;
  for(m=0; m<limit;m++){
  var index=user_tags[0];
  console.log(index);
  var remove_style=document.getElementsByClassName('one-answer')[index];
  remove_style.style.background='white';
  console.log(remove_style);
  remove_style.children[0].remove();
  user_answer.splice(0,1);
  user_tags.splice(0,1);
  console.log(user_tags);
  console.log(user_answer);
}
var remove_score_board=document.getElementsByClassName('score-here')[0].children[0];
remove_score_board.remove();
}
function cal_score(score){
  var time_taken=(end_time-start_time)/1000;
  var round_time=Math.round(time_taken);
  var score_display=`<div><p><span style='color:white; font-size:40px;'>Your score is : </span><br></p>
                     <svg width='250'height='250'style='padding-top:50px;'><circle cx='125'cy='125'r='120'stroke='white'stroke-width='6'fill='#e0e0d1'/>
                     <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='white'>${score}/20</text></svg>
                     <p>Time taken for completion: ${round_time} seconds</p></div>`
  document.getElementsByClassName('score-here')[0].innerHTML=score_display;
  var score_board= document.getElementsByClassName('score-here')[0].children[0];
  score_board.style.width='500px'
  score_board.style.color='white';
  score_board.style.fontSize='80px';
  score_board.style.padding='50px 75px 125px 270px';
  score_board.style.fontWeight='bold';
  score_board.style.marginBottom='20px';
//  score_board.style.borderRadius='15px';
  var access_svg= score_board.children[1];
  console.log(access_svg);
  var access_circle=access_svg.children[0];
  if (score<=11){
    score_board.style.background='#ff3333';
    access_circle.style.fill='#ff3333';
  }
  else if(score>=12){
    score_board.style.background='#00b300';
    access_circle.style.fill='#00b300';
  }
  console.log(time_taken);
}
