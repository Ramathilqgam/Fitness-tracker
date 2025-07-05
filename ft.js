<<<<<<< SEARCH
        // Heart rate animation
        let heartRate = 72;
=======
        // GPS Tracking functionality
        let workoutActive = false;
        let workoutStartTime;
        let totalDistance = 0;
        let positions = [];
        
        const startWorkoutBtn = document.getElementById('startWorkoutBtn');
        const gpsStats = document.getElementById('gpsStats');
        const mapContainer = document.getElementById('mapContainer');
        const gpsIndicator = document.getElementById('gpsIndicator');
        
        startWorkoutBtn.addEventListener('click', function() {
            workoutActive = !workoutActive;
            
            if (workoutActive) {
                startWorkoutBtn.innerHTML = `
                    <i class="fas fa-stop-circle text-4xl text-red-500 mb-2"></i>
                    <p class="text-gray-600">Stop GPS tracking</p>
                `;
                gpsStats.classList.remove('hidden');
                workoutStartTime = new Date();
                simulateGPSTracking();
                
                // Show GPS indicator as active
                gpsIndicator.innerHTML = `
                    <span class="text-xs mr-1">GPS</span>
                    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                `;
            } else {
                startWorkoutBtn.innerHTML = `
                    <i class="fas fa-play-circle text-4xl text-indigo-600 mb-2"></i>
                    <p class="text-gray-600">Start workout with GPS tracking</p>
                `;
                mapContainer.classList.add('hidden');
                
                // Show GPS indicator as inactive
                gpsIndicator.innerHTML = `
                    <span class="text-xs mr-1">GPS</span>
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                `;
            }
        });
        
        function simulateGPSTracking() {
            if (!workoutActive) return;
            
            // Simulate position updates
            const timeElapsed = Math.floor((new Date() - workoutStartTime) / 1000);
            totalDistance += Math.random() * 0.01;
            
            // Update stats
            document.querySelector('#gpsStats .text-indigo-600').textContent = totalDistance.toFixed(2);
            
            // Format elapsed time
            const hours = Math.floor(timeElapsed / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((timeElapsed % 3600) / 60).toString().padStart(2, '0');
            const seconds = Math.floor(timeElapsed % 60).toString().padStart(2, '0');
            document.querySelector('#gpsStats .text-green-600').textContent = `${hours}:${minutes}:${seconds}`;
            
            // Show map after 5 seconds
            if (timeElapsed > 5 && !mapContainer.classList.contains('leaflet-container')) {
                mapContainer.classList.remove('hidden');
                initMap();
            }
            
            setTimeout(simulateGPSTracking, 1000);
        }
        
        function initMap() {
            // Initialize Leaflet map if not already done
            if (!window.L) {
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
                script.onload = function() {
                    const map = L.map('mapContainer').setView([51.505, -0.09], 13);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
                    
                    // Add sample route
                    const route = L.polyline([
                        [51.5, -0.1],
                        [51.51, -0.1],
                        [51.52, -0.09],
                        [51.515, -0.085]
                    ]).addTo(map);
                };
                document.head.appendChild(script);
                
                // Add Leaflet CSS
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
                document.head.appendChild(link);
            }
        }
        
        // Heart rate animation
        let heartRate = 72;
>>>>>>> REPLACE
