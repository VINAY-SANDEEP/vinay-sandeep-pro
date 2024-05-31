function intro() {
    let name = document.getElementById('name').value;
    document.getElementById('welcome').innerHTML = `welcome ${name} garu`;
    document.getElementById('lover_name').innerHTML = `i love you ${name} garu`;
    document.getElementById('Adding').innerHTML = `numbers chesko please ${name} garu `;
    document.getElementById('age_ne').innerHTML = `Enter your age  ${name} garu`;
    document.getElementById('super').innerHTML = `Enter your email ${name} garu`;
    document.getElementById('temp_name').innerHTML = `Enter here temperature ${name} garu`;
}
function addNumbers() {
    let x = document.getElementById('num1').value;
    x = Number(x);
    let y = document.getElementById('num2').value;
    y = Number(y);
    let z = x + y;
    document.getElementById('answer').textContent = z;
}
function subtract() {
    let x = document.getElementById('num1').value;
    x = Number(x);
    let y = document.getElementById('num2').value;
    y = Number(y);
    let z = x - y;
    document.getElementById('answer').textContent = z;
}
function multiple() {
    let x = document.getElementById('num1').value;
    x = Number(x);
    let y = document.getElementById('num2').value;
    y = Number(y);
    let z = x * y;
    document.getElementById('answer').textContent = z;
}
function divide() {
    let x = document.getElementById('num1').value;
    x = Number(x);
    let y = document.getElementById('num2').value;
    y = Number(y);
    let z = x / y;
    document.getElementById('answer').textContent = z;
}
 let count = 0;
  let increase = document.getElementById('increase');
  let decrease = document.getElementById('decrease');
  let label =  document.getElementById('label');
  increase.onclick = function(){
    count++;
    label.textContent = count;
  }
  decrease.onclick = function(){
    count--;
    label.textContent = count;
  }
  function loves() {
    let x = Math.floor(Math.random() * 6) + 1;
    switch (x) {
        case 1:
             lover_name.textContent = "i love you priya";
            break;
            case 2:
             lover_name.textContent = "i love you keerthi";
            break;
            case 3:
             lover_name.textContent = "i love you sudha";
            break;
            case 4:
             lover_name.textContent = "i love you surekha";
            break;
            case 5:
             lover_name.textContent = "i love you begam";
            break;
        default:
        lover_name.textContent = "ni lovada ra puka";
            break;
    }
  }
    function video() {

        let age = document.getElementById('age').value;
         age = Number(age);
         if (age > 18) {
            view_result.textContent = "watch video bro";
    }
    else if(age >= 18 && age <= 28){
        view_result.textContent = `niku andhuku ra videolu ${name}` ;
    }
    else {
        view_result.textContent = "don't videos bro";
    } 
}
function email() {
let email = document.getElementById('email').value;
vachamu.textContent = email.slice(0,email.indexOf("@"));
}
function acoe() {
let roll = document.getElementById('roll').value;
let roll2 = document.getElementById('roll2').value;
roll = roll.toUpperCase();
roll2 = roll2.toUpperCase();
if (roll == roll2) {
attend.textContent = "you entered correctly";
}
else{
attend.textContent = "you entered wrong";
}
} 
function game_number() {
let number_game = document.getElementById('number_game').value;
number_game = Number(number_game);
let generate =  Math.floor(Math.random() * 6) + 1;
let attempt = 0;
if (isNaN(number_game)) {
    end.textContent = "dengue "
}
else {
attempt++;
 if (number_game < generate) {
    end.textContent = "too low!";
 }
else if (number_game > generate) {
    end.textContent = "too high";
 }
 else{
    end.textContent = `you are excuted ${generate} . it took ${attempt}`;
 }
}
}
function temperature() {
let just_num = document.getElementById('just_num').value;
just_num = Number(just_num);
if (celsius.checked) {
temp_check.textContent = just_num-32 * (5/9) +"°C";
}
else{
temp_check.textContent = just_num * (9/5) + 32 +"°F";
}
}
function dice() {
    let row = Math.floor(Math.random()*6)+1;
    switch (row) {
        case 1:
                 var img = document.getElementById("image-element");
                 img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SS_Rajamouli.jpg/330px-SS_Rajamouli.jpg";
                 img.width = 250;
                 img.height = 250;
            break;
            case 2:
                var img = document.getElementById("image-element");
                img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Trivikram-srinivas-director.jpg/330px-Trivikram-srinivas-director.jpg";
                img.width = 250;
                img.height = 250;
                break;
            case 3:
                    var img = document.getElementById("image-element");
                    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Puri_Jagannadh_at_Ek_Niranjan_audio_release_event_%28cropped%29.jpg/330px-Puri_Jagannadh_at_Ek_Niranjan_audio_release_event_%28cropped%29.jpg";
                    img.width = 250;
                        img.height = 250;
                  break;
            case 4:
                    var img = document.getElementById("image-element");
                    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Shekhar_Kammula.jpg/330px-Shekhar_Kammula.jpg";
                    img.width = 250;
                        img.height = 250;
                    break;
             case 5:
                    var img = document.getElementById("image-element");
                    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/K_Raghavendra_Rao.png/330px-K_Raghavendra_Rao.png";
                    img.width = 250;
                    img.height = 250;
                    break;
        default:
            break;
    }
}
function adho() {  
    const begam1 =  () =>  numbers1.textContent = "1";
    const begam2 =  () =>  numbers1.textContent = "2";
    const begam3 =  () =>  numbers1.textContent = "3";
    const begam4 =  () =>  numbers1.textContent = "4";
    const begam5 =  () =>  numbers1.textContent = "5";
    setTimeout(begam1,1000);
    setTimeout(begam2,2000);
    setTimeout(begam3,3000);
    setTimeout(begam4,4000);
    setTimeout(begam5,5000); 
}
function lets_run() {
    function time(){
        const x = new Date();
        let hours =String(x.getHours()).padStart(2,"0");
        let min = String(x.getMinutes()).padStart(2,"0");
        let sec = x.getSeconds();
        const content =  `${hours} : ${min} : ${sec}`
        document.getElementById("clock").textContent =content;
    }
    time();
    setInterval(time,1000);
  }