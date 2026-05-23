// function to get liked number as integer
function getLike() {
  const like = document.getElementById("like-count").innerText;
  return parseInt(like);
}

// toggle function for like & unlike
function toggleHeart(id) {
  const heart = document.getElementById(id);
  // let count = 0;
  if (heart.classList.contains("fa-regular")) {
    heart.classList.remove("fa-regular");
    heart.classList.add("fa-solid", "text-red-500");
    return 1;
  } else {
    heart.classList.remove("fa-solid", "text-red-500");
    heart.classList.add("fa-regular");
    return -1;
  }
}

// National Emergency
document.getElementById("emergency-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("emergency-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Police
document.getElementById("police-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("police-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Fire Service
document.getElementById("fire-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("fire-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Ambulance
document.getElementById("ambulance-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("ambulance-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Women & Child Helpline
document.getElementById("child-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("child-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Anti-Corruption
document.getElementById("anti-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("anti-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Electricity Outage
document.getElementById("electricity-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("electricity-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Brac
document.getElementById("brac-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("brac-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})

// Bangladesh Railway
document.getElementById("rail-heart").addEventListener('click', function(event){
  event.preventDefault();
  const emergency = toggleHeart("rail-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
})
