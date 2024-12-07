document.getElementById('generate').addEventListener('click', async () => {
    try {
        // Get the active tab's URL
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url) {
            const url = tab.url;

            // Generate QR code using QRious
            const qr = new QRious({
                element: document.getElementById('qrcode'),
                value: url,
                size: 200
            });
        } else {
            console.error("No active tab found or tab has no URL.");
        }
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
});