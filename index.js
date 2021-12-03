const prompt = require('prompt-sync')({sigint: true});
const QuestionGenerator = require('./QuestionGenerator');
var t1=" ";
var t2=" ";

console.log("Generate Question Paper...");
console.log("Which subject do you want?");
var sub = prompt('press 1 for science or 2 for history: ');
  if(sub==1){
      t1 ="plants";
      t2 ="animals";
  }else{
      t1 ="ancient";
      t2 ="medieval";
  }
  console.log("Which topic do you want? ");
  var top = prompt('Press 1 for'+" "+ t1 +' or 2 for'+" "+ t2 +': ');
  var mark = prompt('Total how many marks of paper do you want to create? ');
  var lev1 = prompt('How many questions of easy level, do you want? (in percentage): ');
  var lev2 = prompt('How many questions of medium level, do you want? (in percentage): ');
  var lev3 = prompt('How many questions of hard level, do you want? (in percentage): ');

  const eq = (lev1/100)*mark;
  const mq = (lev2/100)*mark;
  const dq = (lev3/100)*mark;

 var options = prompt('Do you want MCQ questions, press 1 for YES or 2 for NO: ');

 if(options==1){
   const pG = new QuestionGenerator().createPaperWithOptions(sub-1,top-1,mark,eq,mq,dq);
   console.log("generated");
 }else{
    const pG = new QuestionGenerator().createPaperWithoutOptions(sub-1,top-1,mark,eq,mq,dq);
    console.log("generated");
 }





