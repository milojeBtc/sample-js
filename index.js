 const outputDiv = document.getElementById('output');

        async function fetchData() {
            try {
                const response = await fetch('https://server.membula.io/api/portfolio/getBTCPrice');

                if (!response.ok) {
                    throw new Error('Error:'+ response.status + " " + response.statusText);
                }

                const data = await response.json();
                console.log("data ==> ", data);
                outputDiv.textContent = "Rune: " + data.payload;
            } catch (error) {
                outputDiv.textContent = 'Failed to fetch data: ' + error.message;
            }
        }

        // Fetch data initially and then every 1 minute
        fetchData();
        setInterval(fetchData, 6000);
