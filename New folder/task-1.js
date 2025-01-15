function task1(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET',
    })
    .then(function(response) {
        if(response.status === 200){
        return response.json()
    }}
    )
    .then(function(data) {
        console.log('1-task kodlari');
        data.forEach(element => {
            console.log(element.title);
            console.log(element.body);
            
            
        });
        
    })
    .catch(error => console.error('Error:', error))
}export{task1}