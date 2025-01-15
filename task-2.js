function task2(){
    fetch('https://randomuser.me/api/',{
        method: 'GET',
    })
    .then(function(response) {
        if(response.status === 200){
        return response.json()
    }}
    )
    .then(function(data){
        console.log('2-dars kodlari ');
        data.results.forEach(user=>{
            console.log(user.name.first); 
            console.log(user.location.city);
            console.log(user.email);
        })
        
    })
    .catch(function(err){
        console.log(err);
    })
}
export { task2}