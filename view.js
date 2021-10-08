show();
function show() {
    let app = document.getElementById("app");
    
    let html = `
    <div class="container"> 
    <h2>Passord generator</h2>
    <span></span>
    <button class="btn"> 
    <i class="fas fa-copy"></i>
    </button>
    <div class="settings"> 
    <label for="length"> Passord lengde</label>
    <input type="number" id="length" min="1" max="4" value="4">
    </div>
    <div class="includeSettings"> 
    <label for="lowerCase">Små bokstaver
    </label>
    <input type="checkbox" id="lowercase" checked />

    <label for="upperCase">store bokstaver
    </label>
    <input type="checkbox" id="uppercase" checked />

    <label for="numbers">Tall
    </label>
    <input type="checkbox" id="numbers" checked />

    <label for="signs">Tegn
    </label>
    <input type="checkbox" id="lowercase" checked />
    </div>
    <button class="generatebtn">Generer passord</button>

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