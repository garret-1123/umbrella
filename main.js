img = ""
 objects = [];
  function preload(){ 
    img = loadImage('monikapfp.png'); 
  } function setup() { 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status: Detectando Objetos"; 
  }
   function modelLoaded() { 
    console.log("Modelo Carregado!") 
    status = true; objectDetector.detect(img, gotResult); 
  } function gotResult(error, results) { 
    if (error) { console.log(error); } 
    console.log(results); objects = results; 
  } 
    function draw() { 
      image(img,0,0,640,420)
      if (status != "") { 
      for (var i = 0; i < objects.length; i++) {
        obj = objects[i]
        document.getElementById("status").innerHTML = "Dos 1 objeto na image, o COCOSSD identificou " + obj.label
        fill("#FF0000")
        text(objects[i].label + "       " + floor(obj.confidence) + "%", obj.x, obj.y)
        noFill()
        stroke("#FF0000")
        rect(obj.x,obj.y,obj.width,obj.height)
        
       


            }      }}