'use strict';

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
        // getParks(numRet,StateI)
    }}

    function renderError (err){
        $('.errorsec').html(`<div>${err}</div>`)
    }

    function getParks (maxNumber,stateInput){

    }


$(start())