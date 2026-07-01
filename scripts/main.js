// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
document.getElementById("emergency-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("emergency-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Police
document.getElementById("police-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("police-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Fire Service
document.getElementById("fire-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("fire-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Ambulance
document.getElementById("ambulance-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("ambulance-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Women & Child Helpline
document.getElementById("child-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("child-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Anti-Corruption
document.getElementById("anti-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("anti-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Electricity Outage
document.getElementById("electricity-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("electricity-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Brac
document.getElementById("brac-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("brac-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});

// Bangladesh Railway
document.getElementById("rail-heart").addEventListener("click", function (event) {
  event.preventDefault();
  const emergency = toggleHeart("rail-heart");

  const like = getLike();
  const allLike = emergency + like;
  document.getElementById("like-count").innerText = allLike;
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function to get coin as integer
function getCoin() {
  const coin = document.getElementById("total-coin").innerText;
  return parseInt(coin);
}

function call(id1, id2) {
  const service = document.getElementById(id1).innerText;
  const number = document.getElementById(id2).innerText;

  let coin = getCoin();
  if (coin < 20) {
    alert("You need at least 20 coins to make a call");
    return;
  } else {
    alert(`Calling ${service}  ${number}`);
    document.getElementById("total-coin").innerText = coin - 20;

    const div = document.getElementById("call-history");
    const newDiv = document.createElement("div");

    const now = new Date();
    const time = now.toLocaleTimeString()
    newDiv.innerHTML = `
    <div class="flex justify-between items-center bg-gray-100 px-3 py-4 rounded-lg mt-3">
            <div>
              <h3 class="">${service}</h3>
              <p class="text-sm text-black/50">${number}</p>
            </div>
            <div>
              <p class="text-sm">${time}</p>
            </div>
          </div>
    `
    div.prepend(newDiv);
  }
}
//  call national emergency
document.getElementById("emergency-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("emergency-service", "emergency-number");
});
// call police
document.getElementById("police-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("police", "police-number");
});
// call fire service
document.getElementById("fire-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("fire-service", "fire-number");
});
// call abmulance
document.getElementById("ambulance-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("ambulance-service", "ambulance-number");
});
// call Women & Child Helpline
document.getElementById("child-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("child-help", "child-number");
});
// call anti-corruption helpline
document.getElementById("anti-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("anti-service", "anti-number");
});
// call Electricity Helpline
document.getElementById("electricity-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("electricity-service", "electricity-number");
});
// call brac helpline
document.getElementById("brac-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("brac-service", "brac-number");
});
// call Bangladesh Railway Helpline
document.getElementById("railway-call").addEventListener("click", function (event) {
  event.preventDefault();
  call("railway-service", "railway-number");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function to get copy number as integer
function getCopy() {
  const copy = document.getElementById("copy-count").innerText;
  return parseInt(copy);
}

// function to copy
function copyNumber(id) {
  const getNumber = document.getElementById(id).innerText;
  navigator.clipboard.writeText(getNumber);
  alert("Number Copied");

  const copy = getCopy();
  const newCopy = copy + 1;
  document.getElementById("copy-count").innerText = newCopy;
}

// copy emergency number
document.getElementById("emergency-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("emergency-number");
});

// copy police number
document.getElementById("police-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("police-number");
});

// copy fire service number
document.getElementById("fire-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("fire-number");
});

// copy ambulance number
document.getElementById("ambulance-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("ambulance-number");
});

// copy women & child number
document.getElementById("child-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("child-number");
});

// copy anti-corruption number
document.getElementById("anti-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("anti-number");
});

// copy electricity number
document.getElementById("electricity-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("electricity-number");
});

// copy brac number
document.getElementById("brac-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("brac-number");
});

// copy railway number
document.getElementById("railway-copy").addEventListener("click", function (event) {
  event.preventDefault();
  copyNumber("railway-number");
});

// --------------------------------------------------------------------
// Call History Delete
document.getElementById("call-clear").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("call-history").innerHTML = "";
})
