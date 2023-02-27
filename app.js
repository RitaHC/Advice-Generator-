console.log('Hello')

const getAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data.slip)

    // Grab element from DOM
    const advice_id = document.getElementById('advice_id')
    const advice = document.getElementById('advice')

    advice_id.innerText = `Advice# ${data.slip.id}`
    advice.innerText = data.slip.advice
}

getAdvice()

