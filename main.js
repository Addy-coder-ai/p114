function preload() {
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  }

  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
  }

  function draw() {
      
  }

  function take_snapshot(){    
    save('Mustache_Img.png');
  }