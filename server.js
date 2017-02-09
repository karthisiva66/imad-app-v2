var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article one|Karthik krish',
    heading: 'Article one',
    date: 'Feb 9,2017',
    content:
          ` <p>
                    This is the first content of the Article one Page
                </p>
                <p>
                    I am karthikeyan this is the first article that I created
                </p>
                <p>
                    Thank you IMAD
                </p>`
    
},
    'article-two': {
    title: 'Article Two|Karthik krish',
    heading: 'Article Two',
    date: 'Feb 10,2017',
    content:
          ` <p>
                    This is the first content of the Article 2nd Page
                </p>
                <p>
                    I am karthikeyan this is the 2nd article that I created
                </p>
                <p>
                    Thank you IMAD
                </p>`
},
    'article-three': {
    title: 'Article Three|Karthik krish',
    heading: 'Article Three',
    date: 'Feb 12,2017',
    content:
          ` <p>
                    This is the Third content of the Article Third Page
                </p>
                <p>
                    I am karthikeyan this is the Third article that I created
                </p>
                <p>
                    Thank you IMAD
                </p>`
},
};

function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = `
<html>
  <head>
      <title>
      ${title}
      </title>
        <meta name="viewport" contents="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
  </head>
      <body>
          <div class="container">
                <div>
                <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                  ${heading}
                </h3>
                <div>
                  ${date}
                </div>
                <div>
                ${content}
                </div>
          </div>
      </body>
</html>
       `;
       return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articlenName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
