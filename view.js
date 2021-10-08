show();
function show() {
    let app = document.getElementById("app");
    
    let html = `
    <div class="container">
	<h2>Passord-generatoren</h2>
	<div class="result-container">
		<span id="result">${passwordResult || ""}</span>
	</div>
	<div class="settings">
		<div class="setting">
			<label>Passord lengde</label>
			<input type="number" id="length" min='4' max='20' value='20' oninput="desiredPasswordLength = this.value"/>
		</div>
		<div class="setting">
			<label>Ta med store bokstaver</label> 
			<input type="checkbox" id="uppercase" ${uppercaseChecked ? "checked" : "unchecked"} onclick="uppercaseChecked = this.checked" />
		</div>
		<div class="setting">
			<label>Ta med små bokstaver</label> 
			<input type="checkbox" id="lowercase" ${lowercaseChecked ? "checked" : "unchecked"} onclick="lowercaseChecked = this.checked, console.log(this.checked)" />
		</div>
		<div class="setting">
			<label>Ta med tall</label> 
			<input type="checkbox" id="numbers" ${numbersChecked ? "checked" : "unchecked"} onclick="numbersChecked = this.checked"/>
		</div>
		<div class="setting">
			<label>Ta med symboler</label> 
			<input type="checkbox" id="symbols" ${symbolsChecked ? "checked" : "unchecked"} onclick="symbolsChecked = this.checked"/>
		</div>
	</div>
	<button onclick="generatePassword()" class="btn btn-large" id="generate">
		Lag passord her
	</button>
</div>





    
    
    
    
    
    
    
    <!--// <div class="container"> 
    // <h2>Passord generator</h2>
    // <span id="result"></span>
    // <button class="btn" id"clipboard"> 
    // <i class="fas fa-copy"></i>
    // </button>
    // <div class="settings"> 
    // <label for="length"> Passord lengde</label>
    // <input type="number" id="length" min="1" max="4" value="4">
    // </div>
    
    
    
    
    
    
    
    
    // </div> -->
    
    
    

    
    
    `;
   app.innerHTML = html; 
}