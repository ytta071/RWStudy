var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');

var boxa = new Array();
    boxa[0] = "🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥";
    boxa[1] = "🟨🟨🟨🟨🟨🟨🟨🟨🟨";
    boxa[2] = "🟩🟩🟩🟩🟩🟩🟩";
    boxa[3] = "🟦🟦🟦🟦🟦";
    boxa[4] = "🟪🟪🟪";
    boxa[5] = "⬛";


function btnClick(){
    document.getElementById('box1').innerText='🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟨🟨🟨🟨🟨🟨🟨🟨🟨\n🟩🟩🟩🟩🟩🟩🟩\n🟦🟦🟦🟦🟦\n🟪🟪🟪\n⬛';
}