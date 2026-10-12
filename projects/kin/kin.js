// Get APK URL from environment or use default
const APK_URL = "YOUR_APK_URL_HERE" || "/Kin.apk";

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  // Set the download link href
  const downloadLink = document.getElementById("downloadLink");
  if (downloadLink) {
    downloadLink.href = APK_URL;
  }

  // Check URL parameters on page load
  checkUrlParams();

  // Listen for browser back/forward navigation
  window.addEventListener("popstate", checkUrlParams);
});

// URL parameter functions
function setUrlParam(name, state) {
  const params = new URLSearchParams(window.location.search);
  params.set(name, state);
  const newSearch = params.toString();
  const newUrl = `?${newSearch}`;
  history.pushState(null, "", newUrl);
  checkUrlParams();
}

function deleteUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  params.delete(name);
  const newSearch = params.toString();
  const newUrl = newSearch ? `?${newSearch}` : window.location.pathname;
  history.pushState(null, "", newUrl);
  checkUrlParams();
}

// Check URL parameters and show appropriate modal
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const download = params.get("download");
  const video = params.get("video");

  const overlay = document.getElementById("overlay");
  const downloadModal = document.getElementById("downloadModal");
  const videoModal = document.getElementById("videoModal");
  const tutorialVideo = document.getElementById("tutorialVideo");

  // Reset all modals
  overlay.style.display = "none";
  downloadModal.style.display = "none";
  videoModal.style.display = "none";

  // Remove show classes
  overlay.classList.remove("show");
  downloadModal.classList.remove("show");
  videoModal.classList.remove("show");

  // Pause video if it's playing
  if (tutorialVideo) {
    tutorialVideo.pause();
  }

  // Show appropriate modal based on params
  if (download === "true" && video === "true") {
    // Show video modal
    overlay.style.display = "block";
    videoModal.style.display = "flex";

    // Trigger reflow and add show class for animation
    setTimeout(() => {
      overlay.classList.add("show");
      videoModal.classList.add("show");
      if (tutorialVideo) {
        tutorialVideo.play();
      }
    }, 10);
  } else if (download === "true") {
    // Show download modal
    overlay.style.display = "block";
    downloadModal.style.display = "flex";

    // Trigger reflow and add show class for animation
    setTimeout(() => {
      overlay.classList.add("show");
      downloadModal.classList.add("show");
    }, 10);
  }
}

// Modal control functions
function openDownloadModal() {
  setUrlParam("download", "true");
}

function closeDownloadModal() {
  deleteUrlParam("download");
}

function openVideoModal() {
  setUrlParam("video", "true");
}

function closeVideoModal() {
  deleteUrlParam("video");
}

// Track download
async function trackDownload() {
  try {
    await fetch("/api/download", { method: "POST" });
  } catch (error) {
    console.error("Failed to track download:", error);
  }
}

// Close modal when clicking overlay
document.addEventListener("click", function (event) {
  const overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    const params = new URLSearchParams(window.location.search);
    if (params.get("video") === "true") {
      closeVideoModal();
    } else if (params.get("download") === "true") {
      closeDownloadModal();
    }
  }
});

// Handle escape key to close modals
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("video") === "true") {
      closeVideoModal();
    } else if (params.get("download") === "true") {
      closeDownloadModal();
    }
  }
});
