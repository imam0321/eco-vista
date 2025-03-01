const data = [
  { location: "New York", latitude: 40.712776, longitude: -74.005974 },
  { location: "Los Angeles", latitude: 34.052235, longitude: -118.243683 },
  { location: "Chicago", latitude: 41.878113, longitude: -87.629799 },
  { location: "Houston", latitude: 29.760427, longitude: -95.369804 },
  { location: "Phoenix", latitude: 33.448376, longitude: -112.074036 },
  { location: "Philadelphia", latitude: 39.952583, longitude: -75.165222 },
  { location: "San Antonio", latitude: 29.424122, longitude: -98.493629 },
  { location: "San Diego", latitude: 32.715736, longitude: -117.161087 },
  { location: "Dallas", latitude: 32.776665, longitude: -96.796989 },
  { location: "Afghanistan", latitude: 33.93911, longitude: 67.709953 },
  { location: "Australia", latitude: -25.274398, longitude: 133.775136 },
  { location: "Brazil", latitude: -14.235004, longitude: -51.92528 },
  { location: "Canada", latitude: 56.130366, longitude: -106.346771 },
  { location: "China", latitude: 35.86166, longitude: 104.195397 },
  { location: "Egypt", latitude: 26.820553, longitude: 30.802498 },
  { location: "France", latitude: 46.603354, longitude: 1.888334 },
  { location: "Germany", latitude: 51.165691, longitude: 10.451526 },
  { location: "India", latitude: 20.593684, longitude: 78.96288 },
  { location: "Indonesia", latitude: -0.789275, longitude: 113.921327 },
  { location: "Italy", latitude: 41.87194, longitude: 12.56738 },
  { location: "Kenya", latitude: -1.292066, longitude: 36.821946 },
  { location: "Mexico", latitude: 23.634501, longitude: -102.552784 },
  { location: "Nigeria", latitude: 9.081999, longitude: 8.675277 },
  { location: "Pakistan", latitude: 30.375321, longitude: 69.345116 },
  { location: "Russia", latitude: 61.52401, longitude: 105.318756 },
  { location: "Saudi Arabia", latitude: 23.885942, longitude: 45.079162 },
  { location: "South Africa", latitude: -30.559482, longitude: 22.937506 },
  { location: "South Korea", latitude: 35.907757, longitude: 127.766922 },
  { location: "Spain", latitude: 40.463667, longitude: -3.74922 },
  { location: "Thailand", latitude: 15.870032, longitude: 100.992541 },
  { location: "Turkey", latitude: 38.963745, longitude: 35.243322 },
  { location: "Ukraine", latitude: 48.379433, longitude: 31.16558 },
  { location: "United Kingdom", latitude: 55.378051, longitude: -3.435973 },
  { location: "United States", latitude: 37.09024, longitude: -95.712891 },
  { location: "Argentina", latitude: -38.416097, longitude: -63.616672 },
  { location: "Chile", latitude: -35.675147, longitude: -71.542969 },
  { location: "Colombia", latitude: 4.570868, longitude: -74.297333 },
  { location: "Vietnam", latitude: 14.058324, longitude: 108.277199 },
  { location: "Kabul", latitude: 34.5553, longitude: 69.2075 },
  { location: "Tirana", latitude: 41.3275, longitude: 19.8189 },
  { location: "Algiers", latitude: 36.7372, longitude: 3.086 },
  { location: "Andorra la Vella", latitude: 42.5078, longitude: 1.5211 },
  { location: "Luanda", latitude: -8.8383, longitude: 13.2344 },
  { location: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
  { location: "Yerevan", latitude: 40.1833, longitude: 44.5167 },
  { location: "Canberra", latitude: -35.282, longitude: 149.128 },
  { location: "Vienna", latitude: 48.2064, longitude: 16.3614 },
  { location: "Baku", latitude: 40.3777, longitude: 49.892 },
  { location: "Nassau", latitude: 25.0343, longitude: -77.3963 },
  { location: "Manama", latitude: 26.225, longitude: 50.5775 },
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Bridgetown", latitude: 13.0975, longitude: -59.6167 },
  { location: "Minsk", latitude: 53.9, longitude: 27.5667 },
  { location: "Brussels", latitude: 50.8503, longitude: 4.3517 },
  { location: "Belmopan", latitude: 17.25, longitude: -88.7667 },
  { location: "Porto-Novo", latitude: 6.4969, longitude: 2.6296 },
  { location: "Thimphu", latitude: 27.4661, longitude: 89.6419 },
  { location: "Sucre", latitude: -19.0333, longitude: -65.2627 },
  { location: "Sarajevo", latitude: 43.8563, longitude: 18.4131 },
  { location: "Gaborone", latitude: -24.6581, longitude: 25.9122 },
  { location: "Brasília", latitude: -15.7797, longitude: -47.9297 },
  { location: "Sofia", latitude: 42.6975, longitude: 23.3242 },
  { location: "Ouagadougou", latitude: 12.3686, longitude: -1.5275 },
  { location: "Gitega", latitude: -3.4281, longitude: 29.9246 },
  { location: "Praia", latitude: 14.933, longitude: -23.5128 },
  { location: "Phnom Penh", latitude: 11.565, longitude: 104.921 },
  { location: "Yaoundé", latitude: 3.848, longitude: 11.5021 },
  { location: "Ottawa", latitude: 45.4215, longitude: -75.6972 },
  { location: "Bangui", latitude: 4.3622, longitude: 18.5873 },
  { location: "N'Djamena", latitude: 12.1348, longitude: 15.0557 },
  { location: "Santiago", latitude: -33.4691, longitude: -70.641 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Bogotá", latitude: 4.711, longitude: -74.0721 },
  { location: "Moroni", latitude: -11.7022, longitude: 43.2551 },
  { location: "Kinshasa", latitude: -4.325, longitude: 15.3222 },
  { location: "Brazzaville", latitude: -4.2634, longitude: 15.2429 },
  { location: "San José", latitude: 9.9281, longitude: -84.0907 },
  { location: "Zagreb", latitude: 45.815, longitude: 15.9819 },
  { location: "Havana", latitude: 23.1136, longitude: -82.3666 },
  { location: "Nicosia", latitude: 35.1856, longitude: 33.3823 },
  { location: "Prague", latitude: 50.0755, longitude: 14.4378 },
  { location: "Copenhagen", latitude: 55.6761, longitude: 12.5683 },
  { location: "Djibouti", latitude: 11.8251, longitude: 42.5903 },
  { location: "Roseau", latitude: 15.2994, longitude: -61.39 },
  { location: "Santo Domingo", latitude: 18.4861, longitude: -69.9312 },
  { location: "Quito", latitude: -0.2299, longitude: -78.5249 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "San Salvador", latitude: 13.6929, longitude: -89.2182 },
  { location: "Malabo", latitude: 3.75, longitude: 8.7833 },
  { location: "Asmara", latitude: 15.3229, longitude: 38.9251 },
  { location: "Tallinn", latitude: 59.437, longitude: 24.7535 },
  { location: "Addis Ababa", latitude: 9.03, longitude: 38.74 },
  { location: "Suva", latitude: -18.1248, longitude: 178.4501 },
  { location: "Helsinki", latitude: 60.1695, longitude: 24.9355 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Libreville", latitude: 0.4162, longitude: 9.4673 },
  { location: "Banjul", latitude: 13.4549, longitude: -16.579 },
  { location: "Tbilisi", latitude: 41.7151, longitude: 44.8271 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Accra", latitude: 5.6037, longitude: -0.187 },
  { location: "Athens", latitude: 37.9838, longitude: 23.7275 },
  { location: "Guatemala City", latitude: 14.6349, longitude: -90.5069 },
  { location: "Dhaka", latitude: 23.810331, longitude: 90.412521 },
  { location: "Chattogram", latitude: 22.356851, longitude: 91.783182 },
  { location: "Khulna", latitude: 22.845641, longitude: 89.540328 },
  { location: "Rajshahi", latitude: 24.3745, longitude: 88.6042 },
  { location: "Barisal", latitude: 22.701002, longitude: 90.353451 },
  { location: "Sylhet", latitude: 24.89493, longitude: 91.868706 },
  { location: "Rangpur", latitude: 25.743892, longitude: 89.275227 },
  { location: "Mymensingh", latitude: 24.747148, longitude: 90.420273 },
  { location: "Gazipur", latitude: 23.99994, longitude: 90.420273 },
  { location: "Narayanganj", latitude: 23.623847, longitude: 90.499254 },
  { location: "Comilla", latitude: 23.460337, longitude: 91.180912 },
  { location: "Bogura", latitude: 24.846522, longitude: 89.377755 },
  { location: "Rangamati", latitude: 22.648098, longitude: 92.167908 },
  { location: "Mymensingh", latitude: 24.747148, longitude: 90.420273 },
  { location: "Feni", latitude: 23.017258, longitude: 91.396363 },
  { location: "Kushtia", latitude: 23.901258, longitude: 89.120482 },
  { location: "Jessore", latitude: 23.169897, longitude: 89.208517 },
  { location: "Jamalpur", latitude: 24.937533, longitude: 89.937775 },
  { location: "Tangail", latitude: 24.251345, longitude: 89.916702 },
  { location: "Narsingdi", latitude: 23.932233, longitude: 90.717575 },
  { location: "Noakhali", latitude: 22.869563, longitude: 91.099398 },
  { location: "Patuakhali", latitude: 22.359631, longitude: 90.329978 },
  { location: "Jhalokati", latitude: 22.640672, longitude: 90.198742 },
  { location: "Barisal", latitude: 22.701002, longitude: 90.353451 },
  { location: "Pirojpur", latitude: 22.584126, longitude: 89.978508 },
  { location: "Barguna", latitude: 22.156639, longitude: 90.121536 },
  { location: "Bhola", latitude: 22.685923, longitude: 90.648179 },
  { location: "Sherpur", latitude: 25.020493, longitude: 90.017331 },
  { location: "Sunamganj", latitude: 25.065804, longitude: 91.395011 },
  { location: "Habiganj", latitude: 24.374945, longitude: 91.415494 },
  { location: "Moulvibazar", latitude: 24.482934, longitude: 91.777417 },
  { location: "Netrokona", latitude: 24.883585, longitude: 90.728148 },
  { location: "Khagrachari", latitude: 23.1193, longitude: 91.985962 },
  { location: "Bandarban", latitude: 22.195327, longitude: 92.218377 },
  { location: "Cox's Bazar", latitude: 21.427229, longitude: 92.005806 },
  { location: "Satkhira", latitude: 22.708803, longitude: 89.071247 },
  { location: "Bagerhat", latitude: 22.651568, longitude: 89.785938 },
  { location: "Chuadanga", latitude: 23.640196, longitude: 88.841841 },
  { location: "Meherpur", latitude: 23.762213, longitude: 88.63236 },
  { location: "Narail", latitude: 23.155834, longitude: 89.495147 },
  { location: "Magura", latitude: 23.487337, longitude: 89.419632 },
  { location: "Kushtia", latitude: 23.901258, longitude: 89.120482 },
  { location: "Jashore", latitude: 23.169897, longitude: 89.208517 },
  { location: "Jhenaidah", latitude: 23.544817, longitude: 89.153921 },
  { location: "Sirajganj", latitude: 24.453397, longitude: 89.700736 },
  { location: "Pabna", latitude: 24.006357, longitude: 89.237968 },
  { location: "Natore", latitude: 24.410225, longitude: 89.007085 },
  { location: "Chapainawabganj", latitude: 24.596503, longitude: 88.277512 },
  { location: "Naogaon", latitude: 24.809516, longitude: 88.936901 },
  { location: "Joypurhat", latitude: 25.096809, longitude: 89.029975 },
  { location: "Bogra", latitude: 24.846522, longitude: 89.377755 },
  { location: "Nawabganj", latitude: 24.696912, longitude: 88.259565 },
  { location: "Dinajpur", latitude: 25.627912, longitude: 88.633352 },
  { location: "Thakurgaon", latitude: 26.025493, longitude: 88.464464 },
  { location: "Panchagarh", latitude: 26.341636, longitude: 88.55416 },
  { location: "Kurigram", latitude: 25.80795, longitude: 89.629899 },
  { location: "Lalmonirhat", latitude: 25.992294, longitude: 89.284725 },
  { location: "Nilphamari", latitude: 25.931794, longitude: 88.856006 },
  { location: "Gaibandha", latitude: 25.328751, longitude: 89.541062 },
  { location: "Mymensingh", latitude: 24.747148, longitude: 90.420273 },
  { location: "Tangail", latitude: 24.251345, longitude: 89.916702 },
  { location: "Kishoreganj", latitude: 24.444937, longitude: 90.776575 },
  { location: "Sherpur", latitude: 25.020493, longitude: 90.017331 },
  { location: "Netrokona", latitude: 24.883585, longitude: 90.728148 },
  { location: "Madaripur", latitude: 23.164102, longitude: 90.18968 },
  { location: "Shariatpur", latitude: 23.227829, longitude: 90.337337 },
  { location: "Munshiganj", latitude: 23.542227, longitude: 90.530448 },
  { location: "Faridpur", latitude: 23.607082, longitude: 89.841759 },
  { location: "Rajbari", latitude: 23.756731, longitude: 89.50432 },
  { location: "Gopalganj", latitude: 23.005085, longitude: 89.826605 },
  { location: "Narsingdi", latitude: 23.932233, longitude: 90.717575 },
  { location: "Narayanganj", latitude: 23.623847, longitude: 90.499254 },
  { location: "Gazipur", latitude: 23.99994, longitude: 90.420273 },
  { location: "London", latitude: 51.507351, longitude: -0.127758 },
  { location: "Kolkata", latitude: 22.572645, longitude: 88.363892 },
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "Saudi Arabia", latitude: 24.713552, longitude: 46.675297 },
  { location: "Portugal", latitude: 38.71667, longitude: -9.13909 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  return found || {};
}

export { getLocationByName, getLocations };
