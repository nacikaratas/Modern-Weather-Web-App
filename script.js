document.addEventListener('DOMContentLoaded', () => {
    const citySelect = document.getElementById('city-select');
    const weatherCard = document.getElementById('weather-card');

    if (typeof lucide === 'undefined') {
        console.error('Lucide kütüphanesi yüklenemedi!');
        window.lucide = {
            createIcons: function() {
                console.warn('Lucide ikonu oluşturulamıyor.');
            }
        };
    }

    const cityCoordinates = {
        "Adana": { lat: 37.00, lon: 35.32 }, "Adıyaman": { lat: 37.76, lon: 38.28 }, "Afyonkarahisar": { lat: 38.75, lon: 30.53 }, "Ağrı": { lat: 39.72, lon: 43.05 }, "Amasya": { lat: 40.65, lon: 35.83 }, "Ankara": { lat: 39.92, lon: 32.85 }, "Antalya": { lat: 36.89, lon: 30.71 }, "Artvin": { lat: 41.18, lon: 41.82 }, "Aydın": { lat: 37.84, lon: 27.84 }, "Balıkesir": { lat: 39.65, lon: 27.89 }, "Bilecik": { lat: 40.14, lon: 29.98 }, "Bingöl": { lat: 38.88, lon: 40.50 }, "Bitlis": { lat: 38.40, lon: 42.11 }, "Bolu": { lat: 40.74, lon: 31.61 }, "Burdur": { lat: 37.72, lon: 30.28 }, "Bursa": { lat: 40.18, lon: 29.06 }, "Çanakkale": { lat: 40.15, lon: 26.41 }, "Çankırı": { lat: 40.60, lon: 33.61 }, "Çorum": { lat: 40.55, lon: 34.95 }, "Denizli": { lat: 37.78, lon: 29.09 }, "Diyarbakır": { lat: 37.91, lon: 40.24 }, "Edirne": { lat: 41.67, lon: 26.57 }, "Elazığ": { lat: 38.68, lon: 39.22 }, "Erzincan": { lat: 39.75, lon: 39.49 }, "Erzurum": { lat: 39.90, lon: 41.27 }, "Eskişehir": { lat: 39.77, lon: 30.52 }, "Gaziantep": { lat: 37.07, lon: 37.38 }, "Giresun": { lat: 40.91, lon: 38.39 }, "Gümüşhane": { lat: 40.46, lon: 39.48 }, "Hakkâri": { lat: 37.57, lon: 43.74 }, "Hatay": { lat: 36.20, lon: 36.16 }, "Isparta": { lat: 37.76, lon: 30.55 }, "Mersin": { lat: 36.81, lon: 34.64 }, "İstanbul": { lat: 41.01, lon: 28.98 }, "İzmir": { lat: 38.42, lon: 27.14 }, "Kars": { lat: 40.60, lon: 43.09 }, "Kastamonu": { lat: 41.38, lon: 33.78 }, "Kayseri": { lat: 38.72, lon: 35.48 }, "Kırklareli": { lat: 41.73, lon: 27.22 }, "Kırşehir": { lat: 39.14, lon: 34.16 }, "Kocaeli": { lat: 40.77, lon: 29.92 }, "Konya": { lat: 37.87, lon: 32.48 }, "Kütahya": { lat: 39.42, lon: 29.98 }, "Malatya": { lat: 38.35, lon: 38.33 }, "Manisa": { lat: 38.61, lon: 27.42 }, "Kahramanmaraş": { lat: 37.57, lon: 36.92 }, "Mardin": { lat: 37.31, lon: 40.73 }, "Muğla": { lat: 37.21, lon: 28.36 }, "Muş": { lat: 38.73, lon: 41.49 }, "Nevşehir": { lat: 38.62, lon: 34.71 }, "Niğde": { lat: 37.96, lon: 34.68 }, "Ordu": { lat: 40.98, lon: 37.88 }, "Rize": { lat: 41.02, lon: 40.52 }, "Sakarya": { lat: 40.77, lon: 30.40 }, "Samsun": { lat: 41.28, lon: 36.33 }, "Siirt": { lat: 37.93, lon: 41.94 }, "Sinop": { lat: 42.02, lon: 35.15 }, "Sivas": { lat: 39.75, lon: 37.01 }, "Tekirdağ": { lat: 40.98, lon: 27.51 }, "Tokat": { lat: 40.32, lon: 36.55 }, "Trabzon": { lat: 41.00, lon: 39.72 }, "Tunceli": { lat: 39.10, lon: 39.54 }, "Şanlıurfa": { lat: 37.16, lon: 38.79 }, "Uşak": { lat: 38.68, lon: 29.40 }, "Van": { lat: 38.50, lon: 43.37 }, "Yozgat": { lat: 39.82, lon: 34.80 }, "Zonguldak": { lat: 41.45, lon: 31.79 }, "Aksaray": { lat: 38.37, lon: 34.03 }, "Bayburt": { lat: 40.25, lon: 40.22 }, "Karaman": { lat: 37.18, lon: 33.21 }, "Kırıkkale": { lat: 39.84, lon: 33.51 }, "Batman": { lat: 37.88, lon: 41.13 }, "Şırnak": { lat: 37.52, lon: 42.46 }, "Bartın": { lat: 41.63, lon: 32.34 }, "Ardahan": { lat: 41.11, lon: 42.70 }, "Iğdır": { lat: 39.92, lon: 44.04 }, "Yalova": { lat: 40.65, lon: 29.27 }, "Karabük": { lat: 41.20, lon: 32.62 }, "Kilis": { lat: 36.72, lon: 37.12 }, "Osmaniye": { lat: 37.07, lon: 36.25 }, "Düzce": { lat: 40.84, lon: 31.16 }
    };

    function populateCities() {
        const availableCities = Object.keys(cityCoordinates).sort();
        availableCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    function setCardState(state) {
        weatherCard.className = 'weather-card card-base';
        weatherCard.classList.add(`state-${state}`);
    }

    async function getWeather(city) {
        if (!city) {
            setCardState('initial');
            weatherCard.innerHTML = `
                <div class="card-placeholder">
                    <i data-lucide="cloud-sun"></i>
                    <p>Hava durumu bilgisi için bir şehir seçiniz.</p>
                </div>`;
            safeCreateIcons();
            return;
        }

        const coords = cityCoordinates[city];
        if (!coords) {
            displayError(`'${city}' için koordinat bilgisi bulunamadı.`);
            return;
        }

        setCardState('loading');
        weatherCard.innerHTML = `
            <div class="card-loader">
                <div class="spinner"></div>
                <p>Yükleniyor...</p>
            </div>`;

        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,apparent_temperature,weather_code&timezone=auto`;

        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                const errorText = await response.text();
                let errorMessage = `API Hatası ${response.status}: ${response.statusText}`;
                
                try {
                    const errorData = JSON.parse(errorText);
                    if (errorData.reason) {
                        errorMessage = `API Hatası: ${errorData.reason}`;
                    }
                } catch (e) {
                    if (errorText) {
                        errorMessage = `API Hatası: ${errorText}`;
                    }
                }
                
                throw new Error(errorMessage);
            }
            
            const data = await response.json();

            if (!data || !data.current || typeof data.current.temperature_2m === 'undefined') {
                throw new Error('API yanıtında geçerli hava durumu verisi bulunamadı.');
            }

            displayWeather(data, city);

        } catch (error) {
            console.error('Hava durumu alınırken hata:', error);
            displayError(error.message);
        }
    }

    function getWeatherConditionClass(wmoCode) {
        if (wmoCode === 0) return 'clear';
        if (wmoCode === 1) return 'partly-cloudy';
        if ([2, 3].includes(wmoCode)) return 'cloudy';
        if ([45, 48].includes(wmoCode)) return 'foggy';
        if ([51, 53, 55, 56, 57].includes(wmoCode)) return 'drizzle';
        if ([61, 63, 65, 66, 67, 80, 81, 82].includes(wmoCode)) return 'rainy';
        if ([71, 73, 75, 77, 85, 86].includes(wmoCode)) return 'snowy';
        if ([95, 96, 99].includes(wmoCode)) return 'stormy';
        return 'default';
    }

    function getWeatherIconName(wmoCode) {
        if (wmoCode === 0) return 'sun';
        if (wmoCode === 1) return 'cloud-sun';
        if (wmoCode === 2) return 'cloud';
        if (wmoCode === 3) return 'cloud';
        if ([45, 48].includes(wmoCode)) return 'cloud-fog';
        if ([51, 53, 55, 56, 57].includes(wmoCode)) return 'cloud-drizzle';
        if ([61, 63, 65, 66, 67].includes(wmoCode)) return 'cloud-rain';
        if ([80, 81, 82].includes(wmoCode)) return 'cloud-rain-wind';
        if ([71, 73, 75, 77, 85, 86].includes(wmoCode)) return 'cloud-snow';
        if ([95, 96, 99].includes(wmoCode)) return 'cloud-lightning';
        return 'cloud';
    }

    function getWeatherDescription(wmoCode) {
        if (wmoCode === 0) return 'Açık';
        if (wmoCode === 1) return 'Az Bulutlu';
        if (wmoCode === 2) return 'Parçalı Bulutlu';
        if (wmoCode === 3) return 'Çok Bulutlu';
        if ([45, 48].includes(wmoCode)) return 'Sisli';
        if ([51, 53, 55].includes(wmoCode)) return 'Çiseleme';
        if ([56, 57].includes(wmoCode)) return 'Donan Çiseleme';
        if (wmoCode === 61) return 'Hafif Yağmurlu';
        if (wmoCode === 63) return 'Yağmurlu';
        if (wmoCode === 65) return 'Şiddetli Yağmurlu';
        if ([66, 67].includes(wmoCode)) return 'Donan Yağmur';
        if (wmoCode === 71) return 'Hafif Kar Yağışlı';
        if (wmoCode === 73) return 'Kar Yağışlı';
        if (wmoCode === 75) return 'Yoğun Kar Yağışlı';
        if (wmoCode === 77) return 'Kar Taneleri';
        if ([80, 81, 82].includes(wmoCode)) return 'Sağanak Yağışlı';
        if ([85, 86].includes(wmoCode)) return 'Kar Sağanakları';
        if (wmoCode === 95) return 'Gök Gürültülü Fırtına';
        if ([96, 99].includes(wmoCode)) return 'Gök Gürültülü Dolu Fırtınası';
        return 'Bilinmiyor';
    }

    function displayWeather(data, cityName) {
        const { temperature_2m, relative_humidity_2m, wind_speed_10m, apparent_temperature, weather_code } = data.current;
        const units = data.current_units || {
            temperature_2m: '°C',
            relative_humidity_2m: '%',
            wind_speed_10m: 'km/h',
            apparent_temperature: '°C'
        };
        
        const tempUnit = units.temperature_2m || '°C';
        const humidityUnit = units.relative_humidity_2m || '%';
        const windUnit = units.wind_speed_10m || 'km/h';
        const apparentTempUnit = units.apparent_temperature || '°C';

        const conditionClass = getWeatherConditionClass(weather_code);
        const iconName = getWeatherIconName(weather_code);
        const description = getWeatherDescription(weather_code);
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

        setCardState(conditionClass);

        weatherCard.innerHTML = '';
        
        const weatherContent = document.createElement('div');
        weatherContent.className = 'weather-content';
        weatherContent.innerHTML = `
            <div class="weather-header">
                <h2>${cityName}</h2>
                <p>${formattedDate}</p>
            </div>
            <div class="weather-body">
                <i data-lucide="${iconName}" class="main-icon"></i>
                <div class="temperature">${Math.round(temperature_2m)}<span class="unit">${tempUnit}</span></div>
                <div class="description">${description}</div>
            </div>
            <div class="weather-details">
                <div class="detail-item">
                    <i data-lucide="thermometer"></i>
                    <span class="label">Hissedilen:</span>
                    <span class="value">${Math.round(apparent_temperature)}${apparentTempUnit}</span>
                </div>
                <div class="detail-item">
                    <i data-lucide="droplet"></i>
                    <span class="label">Nem:</span>
                    <span class="value">${relative_humidity_2m}${humidityUnit}</span>
                </div>
                <div class="detail-item">
                    <i data-lucide="wind"></i>
                    <span class="label">Rüzgar:</span>
                    <span class="value">${wind_speed_10m.toFixed(1)} ${windUnit}</span>
                </div>
                <div class="detail-item">
                    <i data-lucide="gauge"></i>
                    <span class="label">Rakım:</span>
                    <span class="value">${data.elevation !== undefined && data.elevation !== null ? `${data.elevation} m` : 'Bilinmiyor'}</span>
                </div>
            </div>
        `;
        
        weatherCard.appendChild(weatherContent);
        
        safeCreateIcons();
    }

    function displayError(message) {
        setCardState('error');
        
        weatherCard.innerHTML = '';
        
        const errorElement = document.createElement('div');
        errorElement.className = 'card-error-message';
        errorElement.innerHTML = `
            <i data-lucide="alert-circle"></i>
            <p>${message}</p>
        `;
        
        weatherCard.appendChild(errorElement);
        
        safeCreateIcons();
    }

    function safeCreateIcons() {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            try {
                lucide.createIcons();
            } catch (e) {
                console.error('Lucide ikonları oluşturulurken hata:', e);
            }
        } else {
            console.warn('Lucide objesi bulunamadı, ikonlar oluşturulamıyor.');
        }
    }

    function displayTestWeather(testCity) {
        const testData = {
            'TEST-GÜNEŞLI': {
                current: {
                    temperature_2m: 28.5,
                    relative_humidity_2m: 35,
                    wind_speed_10m: 2.7,
                    apparent_temperature: 27.8,
                    weather_code: 0
                },
                current_units: {
                    temperature_2m: '°C',
                    relative_humidity_2m: '%',
                    wind_speed_10m: 'km/h',
                    apparent_temperature: '°C'
                },
                elevation: 45
            },
            'TEST-YAĞMURLU': {
                current: {
                    temperature_2m: 14.2,
                    relative_humidity_2m: 85,
                    wind_speed_10m: 8.4,
                    apparent_temperature: 11.5,
                    weather_code: 63
                },
                current_units: {
                    temperature_2m: '°C',
                    relative_humidity_2m: '%',
                    wind_speed_10m: 'km/h',
                    apparent_temperature: '°C'
                },
                elevation: 120
            },
            'TEST-P.BULUTLU': {
                current: {
                    temperature_2m: 22.7,
                    relative_humidity_2m: 55,
                    wind_speed_10m: 5.1,
                    apparent_temperature: 21.9,
                    weather_code: 2
                },
                current_units: {
                    temperature_2m: '°C',
                    relative_humidity_2m: '%',
                    wind_speed_10m: 'km/h',
                    apparent_temperature: '°C'
                },
                elevation: 85
            },
            'TEST-SİSLİ': {
                current: {
                    temperature_2m: 18.3,
                    relative_humidity_2m: 90,
                    wind_speed_10m: 1.8,
                    apparent_temperature: 17.5,
                    weather_code: 45
                },
                current_units: {
                    temperature_2m: '°C',
                    relative_humidity_2m: '%',
                    wind_speed_10m: 'km/h',
                    apparent_temperature: '°C'
                },
                elevation: 210
            },
            'TEST-FIRTINALI': {
                current: {
                    temperature_2m: 12.8,
                    relative_humidity_2m: 75,
                    wind_speed_10m: 19.5,
                    apparent_temperature: 8.9,
                    weather_code: 95
                },
                current_units: {
                    temperature_2m: '°C',
                    relative_humidity_2m: '%',
                    wind_speed_10m: 'km/h',
                    apparent_temperature: '°C'
                },
                elevation: 65
            }
        };
        
        if (testData[testCity]) {
            displayWeather(testData[testCity], testCity);
        } else {
            displayError(`Hatalı test şehri: ${testCity}`);
        }
    }

    function addTestCities() {
        const testCities = [
            'TEST-GÜNEŞLI', 
            'TEST-YAĞMURLU', 
            'TEST-P.BULUTLU', 
            'TEST-SİSLİ', 
            'TEST-FIRTINALI'
        ];
        
        const optGroup = document.createElement('optgroup');
        optGroup.label = '--- Test Şehirleri ---';
        
        testCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            optGroup.appendChild(option);
        });
        
        citySelect.appendChild(optGroup);
    }

    citySelect.addEventListener('change', (event) => {
        const selectedCity = event.target.value;
        
        if (selectedCity.startsWith('TEST-')) {
            displayTestWeather(selectedCity);
        } else {
            getWeather(selectedCity);
        }
    });

    populateCities();
    addTestCities();
    setCardState('initial');
    safeCreateIcons();
});
