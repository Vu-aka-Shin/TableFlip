const boxes = document.querySelectorAll(".box")
const zoom_container = document.querySelector(".zoom_container")

const shrink = (e) => {
  const el = e.target
  
  // Remove cloned element from DOM after animation is over
  el.addEventListener("animationend", (e) => e.target.remove())

  // Trigger browser reflow to start animation
  el.style.animation = 'none';
  el.offsetHeight
  el.style.animation = ''
  el.classList.add("shrink-down")
}

const toggleFullScreen = (e) => {
  // Get position values for element
  const {
    top,
    left
  } = e.target.getBoundingClientRect()

  // Clone the element and its children
  let fullScreen = e.target.cloneNode(true)

  // Set top and left with custom property
  fullScreen.style.setProperty("--inset", `${top}px auto auto ${left}px`)

  // Add class with animation and position
  fullScreen.classList.add("full-screen")

  // Listen for click to close full screen
  fullScreen.addEventListener("click", shrink)

  // Place in zoom_container over element to expand
  zoom_container.appendChild(fullScreen)
}

// Add click listeners on all boxes
boxes.forEach(box => {
  box.addEventListener("click", toggleFullScreen)
})