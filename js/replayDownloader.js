const BASE_URL = "https://replay.faforever.com";

async function downloadReplay(replayId) {
  const url = `${BASE_URL}/${replayId}`;
  
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const blob = await response.blob();
      return blob;
    } else if (response.status === 404) {
      console.log(`Replay ${replayId} not found.`);
      return null;
    } else {
      throw new Error(`Failed to download replay ${replayId}. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error downloading replay ${replayId}:`, error);
    throw error;
  }
}

async function loadReplayFromFAF() {
  const replayIdInput = document.getElementById('replayIdInput');
  const replayId = replayIdInput.value.trim();
  
  if (!replayId) {
    alert('Please enter a valid replay ID.');
    return;
  }
  
  try {
    const replayBlob = await downloadReplay(replayId);
    if (replayBlob) {
      // Here, you would call the existing replay parsing and visualization functions
      // For example: parseAndVisualizeReplay(replayBlob);
      console.log(`Replay ${replayId} downloaded successfully. Size: ${replayBlob.size} bytes`);
      alert(`Replay ${replayId} downloaded successfully. Implement parsing and visualization here.`);
    } else {
      alert(`Replay ${replayId} not found or couldn't be downloaded.`);
    }
  } catch (error) {
    alert(`Error downloading replay: ${error.message}`);
  }
}

// Expose the function globally so it can be called from HTML
window.loadReplayFromFAF = loadReplayFromFAF;
