let inpt = document.querySelector('.Inpt')
let err = document.querySelector('.error')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function (e) {
	e.preventDefault()
	mainError()
})

function mainError() {
	const data = inpt.value.trim().toLowerCase()
	try {
		if (!data) throw new EmptyError('Пустое поле')
		console.log(1)

		if (isNaN(+data)) throw new NanError('Необходимо написать число')

		console.log(2)
		if (+data > 10 || +data < 5)
			throw new NumberError('Число слишком большое или слишком маленькое')

		console.log(3)
	} catch (e) {
		err.innerHTML = e.message
	}
}
/////////////////////first
