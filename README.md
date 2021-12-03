# QuestionPaperGenerator
A node.js based application which generates question paper in pdf format.

In this project, two open source packages are used:

1)**prompt-sync**

2)**pdfkit**

**promp-sync** is used for getting inputs from user.It is a synchronous prompt.

**pdfkit** is used for generating pdf file.It also provides various methods for content decorations.

A data.json file is used for getting inputs for questions. This file contains only two subjects:

1)science - topics {plants, animals}

2)history- topics {ancient, medieval}

In this project, index.js files works on getting input from user about which subject & topic and percentage marks for {easy, medium, hard} questions ,they want to create question paper, and call createPaper() method through QuestionGenerator class. And QuestionGenerator class creates paper with MCQ pattern or without it(only questions) according to the user choice.

To run this project, use "**node index.js**"

**NOTE:-** Output pdf will be generated on the same folder where all the above files exists.




