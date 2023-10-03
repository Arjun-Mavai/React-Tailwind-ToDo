/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}



// To integrate the Inter font from Google Fonts into your React application, follow these steps:

// 1. **Importing the font in your project**:
//    Visit [Google Fonts](https://fonts.google.com/) and search for the "Inter" font. Select the styles you need, then get the `<link>` tag to include in your HTML.

//    The link would look something like this:
//    ```html
//    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
//    ```

// 2. **Integrate into React**:
//    Add the above `<link>` tag to the `public/index.html` file in your React project. Place it within the `<head>` tags.

//    ```html
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//      <!-- ... other head elements ... -->

//      <!-- Add the Google Fonts link here -->
//      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
//    </head>
//    <body>
//      <div id="root"></div>
//    </body>
//    </html>
//    ```

// 3. **Use the font in your styles**:
//    Now, you can use the "Inter" font in your CSS or Tailwind configurations. Here's how you can set it in CSS:

//    ```css
//    body {
//      font-family: 'Inter', sans-serif;
//    }
//    ```

//    If you're using TailwindCSS, you'd modify your tailwind.config.js to include the font:
//    ```javascript
//    module.exports = {
//      theme: {
//        extend: {
//          fontFamily: {
//            'sans': ['Inter', ...defaultTheme.fontFamily.sans]
//          }
//        }
//      }
//    }
//    ```

// 4. **Run your React application**:
//    Start your React application. The content should now be displayed using the Inter font.

// This way, the Inter font will be applied to your React application and you can utilize it throughout your styles.

// I apologize for the oversight. Let's fix it.

// The `defaultTheme` is an import from `tailwindcss`. If you want to use it to get the default font family (or other default settings) in your `tailwind.config.js`, you should import it.

// Here's how you can update your `tailwind.config.js`:

// ```javascript
// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['Inter', ...defaultTheme.fontFamily.sans]
//       }
//     }
//   }
// }
// ```

// In the code above, `const defaultTheme = require('tailwindcss/defaultTheme');` imports the default configurations from TailwindCSS, including the default font families. We then use this imported `defaultTheme` in the config to merge the Inter font with the default sans-serif font stack.