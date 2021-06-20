var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 510;
block_image_height = 510;
var player_object= "";
var block_image_object= "";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img) {
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_Height").innerHTML = block_image_height;   
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_Height").innerHTML = block_image_height;
}

if(e.shiftKey && keyPressed == '78')
{
    console.log("n and shift pressed together");
    block_image_width = block_image_width * 10;
    block_image_height = block_image_height * 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_Height").innerHTML = block_image_height;
}

if(e.shiftKey && keyPressed == '81')
{
    console.log("q and shift pressed together");
    block_image_width = block_image_width / 10;
    block_image_height = block_image_height / 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_Height").innerHTML = block_image_height;
}





if (keyPressed == '38')
{
up();
console.log("up");
}
if (keyPressed == '40')
{
down();
console.log("down");
}
if (keyPressed == '37')
{
left();
console.log("left");
}
if (keyPressed == '39')
{
right();
console.log("right");
}
if (keyPressed == '65')
{
new_image('dad 1 a.jpg');
console.log("a");
}
if (keyPressed == '66')
{
new_image('dad 2b.jpg');
console.log("b");
}
if (keyPressed == '67')
{
new_image('dad 3c.jpg');
console.log("c");
}
if (keyPressed == '68')
{
new_image('dad 4d.jpg');
console.log("d");
}
if (keyPressed == '69')
{
new_image('dad 5e.jpg');
console.log("e");
}
if (keyPressed == '70')
{
new_image('dad 6f.jpg');
console.log("f");
}
if (keyPressed == '71')
{
new_image('dad 7g.jpg');
console.log("g");
}
if (keyPressed == '72')
{
new_image('dad 8h.jpg');
console.log("h");
}
if (keyPressed == '73')
{
new_image('dad 9i.jpg');
console.log("i");
}
if (keyPressed == '74')
{
new_image('dad 10j.jpg');
console.log("j");
}
if (keyPressed == '75')
{
new_image('dad image 11k.jpg');
console.log("k");
}
}
function up()
{
if(player_y >=0)
{
player_y = player_y - block_image_height;
console.log("block image height =" + block_image_height);
console.log("When Up Key is pressed", x = + player_x + " , Y = "+player_y);
canvas.remove(player_object);
player_update();
}
}

function down ()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left ()
{
if(player_x >0)
{
player_x = player_x - block_image_width;
console.log("block image width = "+ block_image_width);
console.log("When Left arrow key is pressed, x = "+ player_x +" , x ="+player_x);
canvas.remove(player_object);
player_update()
}
}
function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}