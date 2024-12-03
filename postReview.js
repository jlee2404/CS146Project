 function handleFormSubmit(event) {
    // This next line prevents the reload of the form
    event.preventDefault();
    // Get values of inputs
    let reviewUsername = document.getElementById("reviewUsername").value;
    let reviewCaption = document.getElementById("reviewCaption").value;
    let reviewLocation = document.getElementById("reviewLocation").value;
    // Pass values to addNewPost()
    addNewPost(reviewUsername, reviewCaption, reviewLocation);
 }

 function addNewPost(username, caption, location) {
   // Create the parent post div
   const parDiv = document.createElement('div');
   parDiv.className = 'review';
   // Create a div for the user
   const profileDiv = document.createElement('div');
   profileDiv.className = 'profile';
   // Create image element for pfp
   const imgElement = document.createElement('img');
   imgElement.className = 'pfp';
   imgElement.src = "https://media.istockphoto.com/id/1687018104/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=PDi0AqXTtZ6d2Y7ahkMJEraVrC_fYCvx0HW508OWg-4=";
   // Create an element to display the user's name
   const displayName = document.createElement('h4');
   displayName.textContent = username;
   // Append profile picture and name to profile div
   profileDiv.appendChild(imgElement);
   profileDiv.appendChild(displayName);
   // Create an element to display the caption
   const review = document.createElement('p');
   review.textContent = caption;
   // Create an image element for the review image
   const reviewImg = document.createElement('img');
   reviewImg.className = 'review-image';
   // reviewImg.src =
   // Add all child elements (order matters)
   parDiv.appendChild(profileDiv);
   parDiv.appendChild(review);
   parDiv.appendChild(reviewImg);
   // Add post element to post list
   const postList = document.getElementById('postList');
   postList.appendChild(parDiv);
}
 
 window.onload = () => {
    // Once our window is loaded, we add the event listener for our post form
    post.addEventListener('submit', handleFormSubmit);
 };