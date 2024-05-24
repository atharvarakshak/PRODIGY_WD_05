const resultContainer = document.getElementById('result');
const actionBtn = document.getElementById('action-btn');

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    resultContainer.textContent = decodedText;
    actionBtn.style.visibility = 'visible';
    actionBtn.onclick = function() {
        if (decodedText.startsWith('http')) {
            window.open(decodedText, '_blank');
        } else {
            alert("Scanned content: " + decodedText);
        }
    };
}

function onScanError(errorMessage) {
    // handle on error condition, with error message
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
