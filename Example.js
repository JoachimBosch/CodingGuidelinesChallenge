//Spaghetti code

<html
<body>
<div>
  /* Title goes here */
<h1>Welcome to 
  My Website</h1>
    <p>Hello, this is a paragraph.
    <div class="styled-div">
        <p class="italic-green-text">This is some styled text.</p>
        <p class="italic-green-text">This is another paragraph with a class.</p> //additional comments
    </div>
    <div>
        <p class="bold-text">Bold text here!</p>
    </div>
        <ul class="no-padding yellow-bg"> //this is an unordered list which means it has no numbers but bullet points
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
</div>
</body>
</html>

//Not so much spaghetti code

<html>
  <body>
    <div>
      <div>
        <h1>Welcome to My Website</h1>
        <p>Hello, this is a paragraph.</p>
      </div>
      <div class="styled-div">
        <p class="italic-green-text">This is some styled text.</p>
        <p class="italic-green-text">This is another paragraph with a class.</p> //additional comments
      </div>
      <div>
          <p><strong>Bold text here!</strong></p>
      </div>
      <div>
          <ul class="no-padding yellow-bg">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
          </ul>
      </div>
    </div>
  </body>
</html>
