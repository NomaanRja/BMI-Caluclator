let form = document.getElementById("formm")


form.addEventListener('submit' , function(e){
    e.preventDefault()
    let weight = document.getElementById("weight").value 
    parseInt(weight);
    let height = document.getElementById("height").value
    parseInt(height);
  var result = document.getElementById("result")
    let resultfinal = (weight/(height*height))
    console.log( typeof resultfinal , resultfinal)
    
    
    if(resultfinal<18.5){
      result.innerHTML = `Your BMI IS ${resultfinal.toFixed(1)}<br>  You are Underweight`
      console.log(`your BMI IS ${resultfinal.toFixed(1)}/n and you are Underweight`)
    }
      else if (resultfinal>=18.5 && resultfinal<=24.9){
    result.innerHTML = `Your BMI IS ${resultfinal.toFixed(1)} <br>  Your Weight is Normal`;
    console.log(`your BMI IS ${resultfinal.toFixed(1)} and your Weight is Normal`)
      }
      else if (resultfinal>=25&&resultfinal<=29.9){
    result.innerHTML = `your BMI IS ${resultfinal.toFixed(1)} <br> You are Overweight`;
    console.log(`your BMI IS ${resultfinal.toFixed(1)} and you are Overweight`)
      }
      else if(resultfinal>=30 && resultfinal<=35){
    result.innerHTML = `your BMI IS ${resultfinal.toFixed(1)} <br> You are Obse` ;
      console.log(`your BMI IS ${resultfinal.toFixed(1)} and you are Obse`)
      }
      else if(resultfinal>35){
    result.innerHTML = `your BMI IS ${resultfinal.toFixed(1)} <br> you are Morbid Obese`
    console.log(`your BMI IS ${resultfinal.toFixed(1)} and you are Morbid Obese`)
      }
      else{
        result.innerHTML = "there is en errord"
        ;
    }
    
    // result.innerHTML = `your BMI IS ${resultfinal.toFixed(1)}`
})
