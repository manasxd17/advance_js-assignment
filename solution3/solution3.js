const request = new XMLHttpRequest
request.open('GET','http://api.nobelprize.org/v1/prize.json')
request.send()

request.addEventListener('load',function(){
    const data = JSON.parse(this.responseText)
    const main_data = data.prizes
    console.log(`Length of json array is ${main_data.length}`)
    const year_wise = main_data.filter(el => el['year'] >= "2000" && el['year'] <= "2019")
    console.log(year_wise)     //all entries between year 2000 - 2019

    const chem = main_data.filter(el => el.category === "chemistry").forEach((element) => {
        if(element.laureates){
            element.laureates.forEach((detail) => {
                console.log(`${detail.firstname} ${detail.surname}`)    //names of all scientists with nobel in chemistry.
            })
        }
    })
})
    
    
