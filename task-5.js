function task5(){
    fetch('https://goweather.herokuapp.com/weather/london',{
        method: 'GET',
    })
    .then(function(response) {
        if(response.status === 200){
        return response.json()
    }}
    )
    .then(function(data) {
        console.log('5-task kodlari  api ishlamadi');
        
        console.log(data);
        
        
    })
    .catch(error => console.error('Error:', error))
}export{task5}