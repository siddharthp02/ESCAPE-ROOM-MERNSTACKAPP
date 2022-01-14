window.onload = function(){

		room1 = document.getElementById("room1")
		room2 = document.getElementById("room2")
		room3 = document.getElementById('room3')
		room4 = document.getElementById("room4")
		toggleRoom1 = document.getElementById("b1")
		toggleRoom2 = document.getElementById("b2")
		toggleRoom3 = document.getElementById("b3")
		toggleRoom4 = document.getElementById("b4")

		//bg1 = document.getElementById("bg1")

		toggleRoom1.addEventListener("click", toggle1)
		toggleRoom2.addEventListener("click", toggle2)
		toggleRoom3.addEventListener("click", toggle3)
		toggleRoom4.addEventListener("click", toggle4)


		function toggle1()
		{
			room1.style.display = "block"
			room2.style.display = "none"
			room3.style.display = "none"
			room4.style.display = "none"
		}

		function toggle2()
		{
			room1.style.display = "none"
			room2.style.display = "block"
			room3.style.display = "none"
			room4.style.display = "none"
		}

		function toggle3()
		{
			room1.style.display = "none"
			room2.style.display = "none"
			room3.style.display = "block"
			room4.style.display = "none"
		}

		function toggle4()
		{
			room1.style.display = "none"
			room2.style.display = "none"
			room3.style.display = "none"
			room4.style.display = "block"
		}

	}
