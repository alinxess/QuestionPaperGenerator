const pdfG = require('pdfkit');
const fs = require('fs');
const model =require('./data');

class QuestionGenerator{


  createHeading(doc,sub,top,mark){
     const heading = model[sub].subject;
     const tname = model[sub].topic[top].topicname;

     doc.text(`Question Paper 2021-2022 \nSubject- ${heading}\nTopic- ${tname} \nTotal: ${mark}marks`,
     {
       bold:true,
       underline:true,
       align:'center'
     }
     );
  }



  fetchQuestions(sub,top,lev){
    var earray =[];
    earray = model[sub].topic[top].level[lev].ques;
    return earray;
   }



   fetchAnswers(sub,top,lev,q){
       var earray =[];
       earray =model[sub].topic[top].level[lev].ans[q].answer;
       return earray;
      }



  createFooter(doc){
    doc.text('end of questions').fontSize(10);
  }



  createPaperWithoutOptions(sub,top,mark,eq,mq,dq){
       let content = new pdfG();
       content.pipe(fs.createWriteStream('QuestionPaper.pdf'));
       this.createHeading(content,sub,top,mark);
       content.moveDown();
       var marr=[eq,mq,dq];
       var quesarray=[];
       var s=1;

       for(let k=0; k<3; k++){
          quesarray= this.fetchQuestions(sub,top,k);
          var mar = marr[k]/quesarray.length;
          for(let i=0;i<quesarray.length; i++){
             content.text(`\nQ${s++}. ${quesarray[k]}       ${mar}marks \n`);
          }
          quesarray=[];
          }
       content.moveDown();
       this.createFooter(content);
       content.end();

    }



  createPaperWithOptions(sub,top,mark,eq,mq,dq){
     let content = new pdfG();
     content.pipe(fs.createWriteStream('QuestionPaper.pdf'));
     this.createHeading(content,sub,top,mark);
     content.moveDown();
     var marr=[eq,mq,dq];
     var quesarray=[];
     var ansy=[];
     var s=1;
     for(let k=0; k<3; k++){
        quesarray= this.fetchQuestions(sub,top,k);
        var mar = marr[k]/quesarray.length;
        for(let i=0;i<quesarray.length; i++){
           ansy=this.fetchAnswers(sub,top,k,i)
           content.text(`\nQ${s++}. ${quesarray[k]}       ${mar}marks \n`);
           content.list(ansy,{listType:"numbered"});
        }
        quesarray=[];
        }
     content.moveDown();
     this.createFooter(content);
     content.end();

  }
}

module.exports=QuestionGenerator;