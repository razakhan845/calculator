var display = document.getElementById("displayinput");
function getButtonvalue(btnvalue){
    display.value += btnvalue;

}
function calculate(){
    var a = display.value;
    var ans = eval(a);
    display.value = ans;
}
function clearAll(){
    display.value = "";
}