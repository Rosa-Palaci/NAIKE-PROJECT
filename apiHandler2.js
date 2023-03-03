// Author: Moisés Adame-Aguilar
// Date: March 3, 2023
// Description: Api handling through POST requests.

// Handler that generates an image.
async function apiHandler(text){
    // Query and image generated.

    // Response from the Api.
    response = await fetch('http://20.234.7.9/generate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: text
        })
    })
    .then(response => response.json())
    .then(response => console.log(response.message))
}

apiHandler('Phone_Yellow Rabbit Rainbow')