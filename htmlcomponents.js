const htmlExpression = (<div>
    <h1>HTML!!!</h1>
    <h2>Look everyone, it's our old friend HTML!</h2>
  </div>);
  
  ReactDOM.render(htmlExpression, document.getElementById('root'))

  /*

  HTML Components
There are more environments in which we can use React (like React-Native),
but in the browser, we want to use React to manipulate DOM. 
One of the things that ReactDOM does is allows you to write 
HTML-like syntax, and those HTML tags will be rendered to the page. 
So if we write the following syntax above.

*/