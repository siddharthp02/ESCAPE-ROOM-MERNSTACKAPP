window.onload = function(){

		room1 = document.getElementById("room1")
		room2 = document.getElementById("room2")
		toggleRoom = document.getElementById("b1")
		bg1 = document.getElementById("bg1")

		toggleRoom.addEventListener("click", toggle)

		function toggle()
		{
			if(room1.style.display == "none")
			{
				room1.style.display = "block"
				room2.style.display = "none"
			}
			else
			{
				room1.style.display = "none"
				room2.style.display = "block"
			}
		}

	}

