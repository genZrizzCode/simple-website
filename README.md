# SimplistiCLI Website

A modern, minimal, and responsive static website for the SimplistiCLI Node.js command-line framework.

## 💻 Live Site
[simplisticli.pages.dev](https://simplisticli.pages.dev)

Please fund me so I can use a custom domain! I will get funding site soon.

## 🌟 Features
- **Typewriter Animation:** Animated showcase of example CLI commands on the homepage.
- **Help Page:** Collapsible list of all available CLI commands and their descriptions.
- **Dark/Light Mode:** Automatically adapts to your system theme.
- **SEO & Social Sharing:** Optimized meta tags for search engines and social media previews.
- **Launched on Cloudfare Pages:** Please fund me so I can use a custom domain instead.

## 📂 Project Structure

```txt
simple-website/
├── index.html           # Main landing page
├── main.css             # Stylesheet (Google Fonts, dark mode, etc.)
├── typewriter.js        # Typewriter animation logic
├── cmds.json            # List of CLI commands and descriptions
├── help/
│   ├── index.html       # Help/documentation page
│   └── fetchcmds.js     # Loads and displays commands from cmds.json
├── og-image.png         # Social sharing image
├── favicon.ico          # Favicon
├── apple-touch-icon.png # Apple touch icon
├── LICENSE.txt          # MIT License
└── README.md            # This file
```

## 🚀 Local Development

You can run this site locally using any static server. Here are some options:

### Using Live Server (VS Code/Cursor Extension)
1. Install the "Live Server" extension by ritwickdey.
2. Open `index.html` and click "Open with Live Server".

### Using npm
```sh
npm install --save-dev serve
npm run dev
```
Add to your `package.json`:
```json
"scripts": {
  "dev": "serve ."
}
```

### Using Python
```sh
python3 -m http.server
```

## 🛡️ License

This project is licensed under the [MIT License](LICENSE.txt).
