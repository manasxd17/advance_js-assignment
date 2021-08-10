const getInput =  async function(input){
    await fetch(`https://api.github.com/search/repositories?q=${input}`)
    .then((response) => response.json())
    .then((data) =>{
        let results = []
        const main_data = data.items
        for(let i of main_data){
            const result = {
                'name':i.name,
                'full_name':i.full_name,
                'private':i['private'],
                'owner':{
                    'login':i.owner.login,
                    'name':"",
                    'followersCount':"",
                    'followingCount':"",
                },
                'licenseName':i.license?.name,
                'score':i.score
            }
            results.push(result)
        }
        console.log(results)
    })
}

getInput('node')