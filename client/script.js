//Chnage to button event
document.getElementById("submit").addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Gather input values
    const num_bed = document.getElementById("bed-selection").value;
    const num_bath = document.getElementById("bath-selection").value;
    const lot_size = document.getElementById("lot-size").value;
    const square_footage = document.getElementById("square-footage").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state-selection").value;
    const zip_code = document.getElementById("zip").value;
  
    // Prepare the data to send to the FastAPI server
    const inputData = {
      num_bed: parseInt(num_bed),
      num_bath: parseInt(num_bath),
      lot_size: parseFloat(lot_size),
      square_footage: parseFloat(square_footage),
      address: address,
      city: city,
      state: state,
      zip_code: zip_code
    };
  
    try {
        fetch("http://127.0.0.1:5500/predict")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
        
    }
    catch{
        console.log("error")
    }

   // Send the data to the API server
      
      
      /*const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputData)
      });
  
      // Parse the response from the server
      const data = await response.json();
  
      // Display the prediction or error message
      const resultDiv = document.getElementById("output");
      if (data.error) {
        resultDiv.innerHTML = `<strong>Error:</strong> ${data.error}`;
      } else {
        resultDiv.innerHTML = `
          <strong>Predicted Price (Normalized):</strong> $${data.prediction}<br>
          <strong>Predicted Price (Original):</strong> $${data.price}
        `;
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("output").innerHTML = `<strong>Error:</strong> Unable to fetch data from server.`;
    }
  });*/
})