Calculate = () => {
    let amount = document.getElementById('amount').value
    let time = document.getElementById('time').value
    let rate = document.getElementById('rate').value

    let result = (amount * time * rate) / 100

    document.getElementById('ysi').innerHTML = "Votre interet simplet: " + result + " FCFA calculé sur une durée de "+ time + " ans."
}