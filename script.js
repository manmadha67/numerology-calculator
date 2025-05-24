document.getElementById("numForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("fullName").value.trim();
    const date = document.getElementById("birthDate").value;
  
    if (!name || !date) {
      alert("Please enter all fields.");
      return;
    }
  
    const lifePath = calculateLifePathNumber(date);
    const expression = calculateExpressionNumber(name);
  
    document.getElementById("result").innerHTML = `
      <h3>Results</h3>
      <p><strong>Life Path Number:</strong> ${lifePath}</p>
      <p><strong>Expression Number:</strong> ${expression}</p>
    `;
  });
  
  function calculateLifePathNumber(dateStr) {
    const digits = dateStr.replace(/[^0-9]/g, '').split('').map(Number);
    return reduceToSingleDigit(digits.reduce((a, b) => a + b));
  }
  
  function calculateExpressionNumber(name) {
    const values = {
      A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,
      J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,
      S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8
    };
    const letters = name.toUpperCase().replace(/[^A-Z]/g, '');
    const sum = letters.split('').reduce((acc, char) => acc + values[char], 0);
    return reduceToSingleDigit(sum);
  }
  
  function reduceToSingleDigit(num) {
    while (num > 9 && ![11, 22, 33].includes(num)) {
      num = num.toString().split('').reduce((a, b) => +a + +b, 0);
    }
    return num;
  }
  