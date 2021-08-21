const memoryEightgbValue = parseFloat(memoryEightgb);
    console.log(memoryEightgbValue);

    const aa = document.getElementById("best-price");
    const aaa = parseFloat(aa.innerText);

    const a = parseFloat(document.getElementById("best-price").innerText);
    b = a + memoryEightgbValue;
    aa.innerText = b;
    console.log(aa);