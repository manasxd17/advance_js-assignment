const fetch = require('cross-fetch')

const getCall = async (address) => {
    try{
        const res = await fetch(address)
        if(res.status != 200){
            throw new Error(`Something is wrong!`)
        }
        else{
            const data = await res.json()
            return data
        }
    }
    catch(error){
        console.log(error.message)
    }
}

let totalData ={
    actors : [],
    genres : []
}
const mainFunc = async () => {
    const data = await getCall(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json`)
    data.forEach(el => {
        if (el['cast'] != []) {
            el['cast'].forEach(element => {
                if (!totalData['actors'].find(actor => actor['name'] == element)) {
                    let x = {
                        'name': element,
                        'Movies': [el['title']]
                    }
                    totalData['actors'].push(x);
                } else {
                    for (const [i, x] of totalData['actors'].entries()) {
                        if (x['name'] == element) {
                            totalData['actors'][i]['Movies'].push(el['title']);
                        }
                    }
                }
            });
        }
        if (el['genres'] != []) {
            el['genres'].forEach(type => {
                if (!totalData['genres'].find(genre => genre['type'] == type)) {
                    let val = {
                        'Type':type,
                        'Movies': [el['title']]
                    }
                    totalData['genres'].push(val);
                } else {
                    for (const [i, val] of totalData['genres'].entries()) {
                        if (val['type'] == type) {
                            totalData['genres'][i]['Movies'].push(el['title']);
                        }
                    }
                }
            });
        }
    });
    console.log(totalData)
}

mainFunc()