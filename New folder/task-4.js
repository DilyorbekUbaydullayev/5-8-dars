function task4(){
    fetch(' https://api.coindesk.com/v1/bpi/currentprice.json',{
        method: 'GET',
    })
    .then(function(response) {
        if(response.status === 200){
        return response.json()
    }}
    )
    .then(function(data) {
        console.log('4-task kodlari');
        
        console.log(`bitcoin narxi ${data.bpi.USD.rate}`);
        
    })
    .catch(error => console.error('Error:', error))
}export{task4}