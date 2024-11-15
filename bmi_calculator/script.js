const form= document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const  weight=parseInt(document.querySelector('#weight').value)
    let bmi=null
    const results=document.querySelector('#results')
    const remark=document.querySelector('#remark')

    if(height==='' || height < 0 || isNaN(height)){
        results.innerHTML= `Please give a valid height ${height}`
    }else if(weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML= `Please give a valid height ${weight}`
    }else{
        bmi= (weight/((height*height)/10000)).toFixed(2)

       //show the result
       results.innerHTML=`<span>${bmi}</span>`
    }

    if (bmi) {
        const bmiValue = parseFloat(bmi); // Convert BMI to a number for comparisons

        // Determine remark based on BMI
        if (bmiValue < 18.6) {
            remark.innerHTML = 'You are underweight.';
        } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {
            remark.innerHTML = 'You are in the normal range.';
        } else if (bmiValue > 24.9) {
            remark.innerHTML = 'You are overweight.';
        }
    } else {
        // Fallback if BMI calculation failed
        remark.innerHTML = 'Could not calculate BMI.';
    }
    // if(bmi < 18.6){
    //     remark.innerHTML='You are under weight'
    // }else
    // if(bmi > 18.6 && bmi < 24.9){
    //     remark.innerHTML='You are in normal range'
    // }else
    // if(bmi>24.9){
    //     remark.innerHTML='Your are over weight'
    // }



})