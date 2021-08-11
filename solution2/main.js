const fetch = require('cross-fetch')

const call = async (address) => {
    try {
        const res = await fetch(address);
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        else{
            return res.json()
        }
    }
    catch (error) {
        console.log(error.message);
      }
}

const main = async (input) => {
    const data = await call(`https://api.github.com/search/repositories?q=${input}`)
    let results = []
    for(let i of data.items){
        const result = {
            'name':i['name'],
            'full_name':i.full_name,
            'private':i.private,
            'owner':{
                'login':i.owner.login,
                // 'name':call(i.owner.url)['name'] || null,
                // 'followersCount':call(i.owner.followers_url).length,      API Limitation 
                // 'followingCount':call(i.owner.following_url).length,
                    },
            'licenseName':i.license,        //license?.name is not working here
            'score':i.score,
            // 'numberOfBranches':i.branches_url.replace('{/branches}',' ').length
            }
        results.push(result)
    }
    console.log(results)
}

main('node')