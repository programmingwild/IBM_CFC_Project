document.addEventListener('DOMContentLoaded', () => {
    // Sample Data (Replace with your API calls)
    const temperatureData = {
        labels: ['1900', '1920', '1940', '1960', '1980', '2000', '2020'],
        datasets: [{
            label: 'Global Temperature Anomaly (°C)',
            data: [-0.2, -0.3, -0.1, 0, 0.3, 0.6, 1.1], // Example data
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    const co2Data = {
        labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020'],
        datasets: [{
            label: 'CO2 Concentration (ppm)',
            data: [320, 330, 340, 355, 370, 390, 410], // Example data
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false
        }]
    };

    // Create Charts
    createChart('temperatureChart', temperatureData, 'line');
    createChart('co2Chart', co2Data, 'line');

    function createChart(canvasId, data, chartType) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: chartType,
            data: data,
            options: { // Add Chart.js options for customization
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false // Adjust as needed
                    }
                }
            }
        });
    }
});
