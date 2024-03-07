function calculateBhaskara() {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);
    const c = parseFloat(document.getElementById('inputC').value);

    const delta = (b * b) - 4 * a * c;
    const delta1 = b * b;
    const delta2 = 4 * a * c;
    const raiz = Math.sqrt(delta);
    const x1 = (-b + raiz) / (2 * a);
    const x2 = (-b - raiz) / (2 * a);

    const bX1 = -b + raiz;
    const bX2 = -b - raiz;
    const bX = 2 * a;

    const resultadoDiv = document.getElementById('resultado');

    if (delta < 0) {
        resultadoDiv.textContent = "Não existe raiz.";
    } else if (delta > 0 && b < 0) {

        resultadoDiv.innerHTML = "Δ = " + b + "² - 4 x " + a + " x " + c + "<br><br>" +
            "Δ = " + delta1 + " - " + delta2 + "<br>" + "Δ = " + delta + "<br><br>" +
            "x = (-(" + b + ") ± √" + delta + ") / " + bX + "<br><br>" +

            "x1 = (-(" + b + ") + √" + delta + ") / " + bX + "<br>" +
            "x1 = " + x1 + "<br><br>" +

            "x2 = (-(" + b + ") - √" + delta + ") / " + bX + "<br>" +
            "x2 = " + x2 + "<br>";
    } else if (delta > 0 && b > 0) {
        resultadoDiv.innerHTML = "Δ = " + b + "² - 4 x " + a + " x " + c + "<br>" +
            "Δ = " + delta1 + " - " + delta2 + "<br>" + "Δ = " + delta + "<br><br>" +
            "x = (-" + b + " ± √" + delta + ") / " + bX + "<br><br>" +

            "x1 = (-" + b + " + √" + delta + ") / " + bX + "<br>" +
            "x1 = " + x1 + "<br><br>" +

            "x2 = (-" + b + " - √" + delta + ") / " + bX + "<br>" +
            "x2 = " + x2 + "<br>";
    } else {
        resultadoDiv.innerHTML = "Delta é igual a zero, raízes iguais." +
            "x1 = x2 = " + x1;
    }
}
