$(document).ready(function () {
  $(window).scroll(function () {
    //Da se button za povratak pojavi na 500px
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  //Da nas button vrati na vrh
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    $('html').css("scrollBehavior", "auto");
  });
});
//Fade
$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 1100) {
    $('.bottomMenu1').fadeIn();
  } else {
    $('.bottomMenu1').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 2000) {
    $('.bottomMenu2').fadeIn();
  } else {
    $('.bottomMenu2').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 2900) {
    $('.bottomMenu3').fadeIn();
  } else {
    $('.bottomMenu3').fadeOut();
  }
});


//zmijuga loma

$(document).ready(function () {
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');
  var max = 0;
  var grid = 16;
  var count = 0;
  var brojac = 0;
  var snake = {
    x: 160,
    y: 160,

    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,

    // keep track of all grids the snake body occupies
    cells: [],

    // length of the snake. grows when eating an apple
    maxCells: 4
  };
  var apple = {
    x: 320,
    y: 320
  };

  // get random whole numbers in a specific range
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // game loop
  function loop() {
    requestAnimationFrame(loop);

    // slow game loop to 15 fps instead of 60 (60/15 = 4)
    if (++count < 4) {
      return;
    }

    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);

    // move snake by it's velocity
    snake.x += snake.dx;
    snake.y += snake.dy;

    // wrap snake position horizontally on edge of screen
    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
      snake.x = 0;
    }

    // wrap snake position vertically on edge of screen
    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
      snake.y = 0;
    }

    // keep track of where snake has been. front of the array is always the head
    snake.cells.unshift({ x: snake.x, y: snake.y });

    // remove cells as we move away from them
    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }

    // draw apple
    context.fillStyle = 'grey';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

    // draw snake one cell at a time
    context.fillStyle = '#ff003f';
    snake.cells.forEach(function (cell, index) {

      // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
      context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

      // snake ate apple
      if (cell.x === apple.x && cell.y === apple.y) {
        snake.maxCells++;
        brojac++;
        document.getElementById("s").innerHTML = brojac;
        if (brojac > max) {
          max = brojac;
          document.getElementById("hs").innerHTML = max;
        }


        // canvas is 400x400 which is 25x25 grids 
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }

      // check collision with all cells after this one (modified bubble sort)
      for (var i = index + 1; i < snake.cells.length; i++) {

        // snake occupies same space as a body part. reset game
        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          snake.x = 160;
          snake.y = 160;
          snake.cells = [];
          snake.maxCells = 4;
          snake.dx = grid;
          snake.dy = 0;
          brojac = 0;
          document.getElementById("s").innerHTML = brojac;
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }
      }
    });
  }

  // listen to keyboard events to move the snake
  document.addEventListener('keydown', function (e) {
    // prevent snake from backtracking on itself by checking that it's 
    // not already moving on the same axis (pressing left while moving
    // left won't do anything, and pressing right while moving left
    // shouldn't let you collide with your own body)

    // a key
    if (e.which === 65 && snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    }
    // w key
    else if (e.which === 87 && snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
    // d key
    else if (e.which === 68 && snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
    // s key
    else if (e.which === 83 && snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  });

  // start the game
  requestAnimationFrame(loop);

});

