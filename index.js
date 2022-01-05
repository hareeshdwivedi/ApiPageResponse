// api url
const api_url =
	"https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// // Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Company</th>
		</tr>`;
	
// 	// Loop to access all rows
	for (let r of data.clients) {
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.company}</td>
		
</tr>`;
	}
// 	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
