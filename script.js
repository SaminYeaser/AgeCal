function ageInDays() {
    var birthYear = prompt("What year you were born?")
    var inDays = (new Date().getFullYear()-birthYear)*365;

    var h1 = document.createElement('h1');

    var textAnswer = document.createTextNode('You are '+ inDays +' days old');
    //h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}