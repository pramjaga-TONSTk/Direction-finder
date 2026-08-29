# 📍 Location Directions

Location Directions is a simple web-based navigation application that detects the user's current location after permission is granted and provides directions to a predefined destination using Google Maps.

## 🚀 Features

* 📍 Detects the user's current location
* 🔐 Requests location permission from the user
* 🗺️ Opens Google Maps for navigation
* 📱 Works on mobile and desktop browsers
* 🎨 Simple and responsive interface
* ⚡ Easy to use with one button

## 🛠️ Technologies Used

* **HTML** – Website structure
* **CSS** – Styling and responsive design
* **JavaScript** – Application functionality
* **Geolocation API** – Detects the user's location
* **Google Maps** – Provides directions

## 📁 Project Structure

```text
Location-Directions/
│
├── index.html
├── style.css
└── script.js
```

## ⚙️ How It Works

1. The user opens the Location Directions website.
2. The user clicks the **Get Directions** button.
3. The browser asks for permission to access the user's location.
4. The user selects **Allow**.
5. JavaScript obtains the user's latitude and longitude.
6. The application creates a Google Maps directions URL.
7. Google Maps opens and displays directions to the predefined destination.

## 💻 How to Run

### Using VS Code

1. Download or clone this project.
2. Open the project folder in **Visual Studio Code**.
3. Make sure the following files are present:

   * `index.html`
   * `style.css`
   * `script.js`
4. Install the **Live Server** extension in VS Code.
5. Right-click `index.html`.
6. Select **Open with Live Server**.
7. The website will open in your browser.
8. Click **Get Directions** and allow location access.

## 📍 Destination

The destination coordinates are defined inside `script.js`.

```javascript
const shopLatitude = 16.5062;
const shopLongitude = 80.6480;
```

Replace these example coordinates with the latitude and longitude of your required destination.

## 🔒 Location Permission

The application requires the user to allow location access. The user's browser controls this permission. The application cannot obtain the user's location without permission.

For public deployment, use a secure **HTTPS** website because browser geolocation works reliably in secure contexts.

## 🔮 Future Improvements

* Add an interactive map
* Allow users to search for destinations
* Support multiple destinations
* Display distance and estimated travel time
* Add walking, driving, and cycling directions
* Improve the mobile interface
* Convert the website into an Android application

## 👨‍💻 Project Status

**Current Status:** Initial working version

The project is currently being developed and tested as a website. An Android application version may be developed in the future.

## 📄 License

This project is created for learning and development purposes.
