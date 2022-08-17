function viewsArrayInput(){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName('datoInput'),
    namesValues = [].map.call(inputsValues,function(dataInput) {
        arrayInput.push (dataInput.value);
     }) ;
    arrayInput.forEach(function(inputsValuesData){
        console.log("EL DATO ES :" + inputsValuesData);
    });
}
