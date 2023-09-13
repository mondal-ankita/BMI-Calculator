const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#ht').value)
    const weight = parseInt(document.querySelector('#wt').value)
    const results = document.querySelector('#results')
    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Enter valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Enter valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height * height)/10000)).toFixed(2)
        results.innerHTML = `<div>${bmi}</div>`
        if(bmi<18.5){
            results.innerHTML = `${bmi} :- Under weight`
        }
        else if(bmi>18.5 && bmi<24.9){
           results.innerHTML = `${bmi} :- Normal weight`
        }
        else{
           results.innerHTML = `${bmi} :- Over weight`
        }
    }
})

// form.addEventListener('submit',function(mg){
//     const msgs = Document.querySelector('#msg')
//     console.log(msgs);
// })