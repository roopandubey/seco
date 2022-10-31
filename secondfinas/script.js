const superAob = (data, victim) => {

    const obj = {};
  
    data.forEach((data) => {
        if(data.hasOwnProperty(victim)){
            if(obj[data[victim]]){
                obj[data[victim]]++;
            }
            else{
                obj[data[victim]] = 1;
            }
        }
    })
  
    let superArrayOfObjects = [];
  
    for (const key in obj) {
        superArrayOfObjects = [...superArrayOfObjects, { victim: key, count: obj[key]}];
    }
    return superArrayOfObjects;
}

let

aob = 
[
    { language: 'JavaScript' },{ language: 'JavaScript' },{ language: 'TypeScript' },{language:'c++'}
]

console.log(superAob(aob, 'language'));