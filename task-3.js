function task3(){
    fetch('https://disease.sh/v3/covid-19/all',{
        method: 'GET',
    })
    .then(function(response) {
        if(response.status === 200){
        return response.json()
    }}
    )
    .then(function(data) {
        console.log('3-task  kodlari');
        
        console.log(data.cases);
        console.log(data.deaths);
        console.log(data.recovered);
        
       
        
    })
    .catch(error => console.error('Error:', error))
}export{task3}