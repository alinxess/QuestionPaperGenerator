# QuestionPaperGenerator
A node.js based application which generates question paper in pdf format.

In this project, two open source packages are used:
1)prompt-sync
2)pdfkit

Promp-sync is used for getting inputs from user.It is a synchronous prompt.

Pdfkit is used for generating pdf file.It also provides various methods for content decorations.

A data.json file is used for getting inputs for questions. This file contains only two subjects:
1)science - {plants, animals}
2)history- {ancient, medieval}

In this project, index.js files works on getting input from user about which subject & topic ,they want to create question paper, and call createPaper() method through QuestionGenerator class. And QuestionGenerator class creates paper with MCQ pattern or without it(only questions) according to the user choice.

To run this project, use " node index.js"




