'use strict';

const apiKey = 'Iolbzt3EEKrNe6ZZRBsa3BPUFP2GCIzENWCBI51W'

function start(){
    watchForm()
}

function watchForm() {
    $('form').submit(function(evt) {
      evt.preventDefault()
      let maxResults = $(evt.currentTarget).find('input[name="maximum number of results returned"]').val()
      let state = $(evt.currentTarget).find('input[name="state you want to visit"]').val()
      checkNumber(maxResults,state)
    })
  }

  function checkNumber(numberI,stateI){
    $('.errorsec').empty()
    let numRet = 10
    if(numberI === false || numberI<=0 || numberI>300){}else{numRet = numberI}
    if(stateI === ''||stateI === false){
        renderError(`State cannot be blank`)
        throw new Error("State cannot be blank")
    }else{
    getParks(numRet,stateI)
    }}

    function renderError (err){
        $('.errorsec').html(`<div>${err}</div>`)
    }

    function getParks (maxNumber,stateInput){
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateInput}&api_key=${apiKey}&limit=${maxNumber}`)
          .then(response => response.json())
          .then(responseJson => displayResults(responseJson))
          .catch(error => alert('Something went wrong. Try again later.'))
      }

    function displayResults(response){
        $('.result').empty()
        let resultReturn = ``
        for (let i=0; i<response.data.length; i++){
            resultReturn += `<h2>${response.data[i].fullName}</h2><p>${response.data[i].description}</p><p>URL: ${response.data[i].url}</p><br>`
        }
        $('.results').html(resultReturn)
    }


$(start())