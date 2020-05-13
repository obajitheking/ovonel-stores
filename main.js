var button = document.querySelector('.btn');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=fd2128ba33dcee916d081709714e5519')
    .then(response => response.json())
    .then(data =>  {
        var nameValue = data['name'];
        var temValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        var teamValue = temValue - 273.15;

        var tempValue = (Math.round(teamValue * 100) / 100).toFixed(2);

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue + '&deg' + 'C'
        desc.innerHTML = descValue;
    })

.catch(err => alert('Wrong city name!'))
})