// const formUpper = document.querySelectorAll('.listHeading'); 
// const formLower = document.querySelectorAll('.formLowerContainer');
// for(let i = 0; i < formUpper.length; i++) {
//     formUpper[i].addEventListener('click', () => {
//         formLower[i].classList.toggle('hidden');

//     });
// }

// const ele = document.querySelectorAll('.formUpperContainer'); 
// const history = document.querySelectorAll('i');
// for(let i = 0; i < history.length; i++) {
//     history[i].addEventListener('click', () => {
//         ele[i].submit();
//         console.log("sd")

//     });
// }


// const lowerButton = document.querySelectorAll(".formLowerContainer button");
// for(let i = 0 ; i<lowerButton.length ; i++){
//     lowerButton[i].addEventListener("click",()=>{
//         alert("Your data is submitted succesfully");
//     })
// }

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("historyButton")) {
    console.log("clicked");
    const formId = event.target.getAttribute("data-form-id");
    const form = document.getElementById(formId);

    if (form) {
      form.submit();
    }
  }
});

// const myForm = document.getElementById("myForm");
// document.querySelector(".submit").addEventListener("click", function(){

//   myForm.submit();

// });




















// const lowerElement = document.querySelectorAll('.lower'); 
// const editButton = document.querySelectorAll('.edit');
// for(let i = 0; i < editButton.length; i++) {
//     editButton[i].addEventListener('click', () => {
//         lowerElement[i].classList.toggle('hidden');
//         if(lowerElement[i].classList.contains('hidden'))
//         {
//             editButton[i].innerHTML = 'Edit';
//         }
//         else
//         {
//             editButton[i].innerHTML = 'save';
//         }

//         if(editButton[i].innerHTML == 'save')
//         {
//             editButton[i].addEventListener('click', () => {
//                 const form = document.querySelector('#list-des-form');
//                 form.submit();
//             });
//         }
//     });
// }








// function jsonToUrlEncoded(json) {
//     const urlParams = [];
  
//     for (let key in json) {
//       if (json.hasOwnProperty(key)) {
//         const encodedKey = encodeURIComponent(key);
//         const encodedValue = encodeURIComponent(json[key]);
//         urlParams.push(`${encodedKey}=${encodedValue}`);
//       }
//     }
  
//     return urlParams.join('&');
//   }










// // Get the H1 element
// const fiberHeading = document.querySelectorAll('.fiber-heading');

// // Add a click event listener to the H1
// for(let i =0;i<fiberHeading.length;i++){
//     fiberHeading[i].addEventListener('click', () => {
//         const clickedText = fiberHeading[i].innerHTML;
//         const dataObj = { heading: clickedText };
//         // const sendData = new URLSearchParams(dataObj).toString();
//         const sendData = encodeURIComponent(JSON.stringify(dataObj));
//         console.log(dataObj);
//         const urlEncoded = jsonToUrlEncoded(dataObj);
//         // Send a POST request to the backend with the clicked text
//         fetch('/click', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: urlEncoded,
//         });


//     //           fetch('/click', {
// //             method: 'POST',
// //             headers: {
// //               'Content-Type': 'application/json'
// //             },
// //             // body: JSON.stringify({ des: clickedText })
// //             body: querystring.stringify({ des: clickedText })

// //           })
// //             .then(response => {
// //               if (response.ok) {
// //                 console.log('POST request sent successfully!');
// //               } else {
// //                 console.error('Error sending POST request:', response.status);
// //               }
// //             })
// //             .catch(error => {
// //               console.error('Error sending POST request:', error);
// //             });


// //       });
// // };

// ///////////////////////////
//     });
// }