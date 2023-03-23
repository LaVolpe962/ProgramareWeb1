let phones = [];


fetch(
    "http://localhost:1337/api/phones",
    {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc5NjAzMzE1LCJleHAiOjE2ODIxOTUzMTV9.RlsTCpTGbN1nXniLA1z6MrjHTi3iBI0Pl4-pWUlmgoM"
        }
    }
)
  .then((response) => response.json())
  .then((data) => {
    
    phones = [...data.data];
    console.log(phones);

   
  });


