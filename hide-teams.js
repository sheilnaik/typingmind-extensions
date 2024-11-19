// Extension to hide Teams button in Typing Mind
const hideTeamsButton = () => {
  const teamsButton = document.querySelector('[data-element-id="workspace-tab-teams"]');
  if (teamsButton) {
    teamsButton.style.display = 'none';
  }
};

// Run immediately
hideTeamsButton();

// Also run after a short delay to ensure UI is loaded
setTimeout(hideTeamsButton, 1000);