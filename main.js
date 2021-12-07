var canvas = new fabric.Canvas('myCanvas');

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 20;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if (e.shiftkey == true && key_pressed == '80'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10; 
        block_image_height = block_image_height + 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftkey == true && key_pressed == '77'){
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (key_pressed == '37'){
        left();
        console.log("left");
    }

    if (key_pressed == '38'){
        up();
        console.log("up");
    }

    if (key_pressed == '39'){
        right();
        console.log("right");
    }

    if (key_pressed == '40'){
        down();
        console.log("down");
    }

    if (key_pressed == '87'){
        new_image('wall.jpg');
        console.log("W");
    }

    if (key_pressed == '71'){
        new_image('ground.png');
        console.log("G");
    }

    if (key_pressed == '68'){
        new_image('dark_green.png');
        console.log("D");
    }

    if (key_pressed == '76'){
        new_image('light_green.png');
        console.log("L");
    }

    if (key_pressed == '84'){
        new_image('trunk.jpg');
        console.log("T");
    }

    if (key_pressed == '82'){
        new_image('roof.jpg');
        console.log("R");
    }

    if (key_pressed == '89'){
        new_image('yellow_wall.png');
        console.log("Y");
    }

    if (key_pressed == '85'){
        new_image('unique.png');
        console.log("U");
    }

    if (key_pressed == '67'){
        new_image('cloud.jpg');
        console.log("C");
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_image_height;
        console.log("Block Image Height =" + block_image_height);
        console.log("When up arrow key is pressed - X =" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if (player_y <= 500 ){
        player_y = player_y + block_image_height;
        console.log("Block Image Height =" + block_image_height);
        console.log("When down arrow key is pressed - X =" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("Block Image Width =" + block_image_width);
        console.log("When left arrow key is pressed - X =" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("Block Image Width =" + block_image_width);
        console.log("When right arrow key is pressed - X =" + player_x + ", Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

