document.getElementById('btn').addEventListener('click', () => {
  main()
})
document.getElementById("comm").textContent = "Your Idea"
document.getElementById("user").textContent = "Username"
document.getElementById("ucontact").textContent = "Email"

async function main(){
const idea = document.getElementById('data').value 
const username = document.getElementById('uname').value
const email = document.getElementById('email').value
const buf = {idea, username, email}

  const data = {buf}
  var settings = {
     method: 'POST',
     headers: {
         'Content-Type':'application/json' 
   },
   body: JSON.stringify(data)
  }
    
  const response = await fetch('/api', settings)
  const json = await response.json()
  console.log(json)
}