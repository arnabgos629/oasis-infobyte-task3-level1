document.getElementById("convertBtn").addEventListener("click", function() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var output = document.getElementById("output");
  
    if (inputUnit === "celsius") {
      var fahrenheit = (inputValue * 9/5) + 32;
      output.innerHTML = inputValue + " degrees Celsius = " + fahrenheit.toFixed(2) + " degrees Fahrenheit";
    } else if (inputUnit === "fahrenheit") {
      var celsius = (inputValue - 32) * 5/9;
      output.innerHTML = inputValue + " degrees Fahrenheit = " + celsius.toFixed(2) + " degrees Celsius";
    }
  });
  