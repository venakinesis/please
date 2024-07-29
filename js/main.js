let a = ''
let b = ''
let sign = ''
let finish = false

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const actions = ['-', '+', 'x', '/']
const out = document.querySelector('.total-value p')


function allClear() {
	a = ''
	b = ''
	sign = ''
	finish = false
	out.textContent = 0
}
document.querySelector('.ac').onclick = allClear

const buttons = document.querySelector('.buttons')
buttons.addEventListener('click', clickHandler)

function clickHandler(event) {
	if (!event.target.classList.contains('button')) return
	if (event.target.classList.contains('ac')) return

	out.textContent = ''
	const equal = event.target.textContent

	if (numbers.includes(equal)) {
		if (b === '' && sign === '') {
			a += equal
			out.textContent = a
		}
		else if (a !== '' && b !== '' && finish) {
			b = equal
			finish = false
			out.textContent = b
		}
		else {
			b += equal
			out.textContent = b
		}
		console.table(a, b, sign)
		return
	}
	if (actions.includes(equal)) {
		sign = equal
		out.textContent = sign
		console.table(a, b, sign)
		return
	}
	if (equal === '=') {
		switch (sign) {
			case "-":
				a = a - b
				break
			case "+":
				a = (+a) + (+b)
				break
			case "x":
				a = a * b
				break
			case "/":
				if (b === '0') {
					out.textContent = 'ошибка'
					a = ''
					b = ''
					sign = ''
					return
				}
				a = a / b
				break
		}
		finish = true
		out.textContent = a
		console.table(a, b, sign)
	}
}
