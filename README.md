# Lazy-Dev

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8+
- Node.js (for Next.js)

### Steps

1. **Clone the repository:**
    
    ```bash
    git clone https://github.com/louisjoety/lazy_dev.git
    cd backend
    ```

2. **Set up a virtual environment:**
    
    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment:**
    - On Windows:
      
      ```bash
      venv\Scripts\activate
      ```

    - On macOS and Linux:
      
      ```bash
      source venv/bin/activate
      ```

4. **Install the required Python libraries:**
    
    ```bash
    pip install -r requirements.txt
    ```

5. **Set up the Next.js app:**
    
    ```bash
    cd frontend
    npx create-next-app@latest .
    ```

6. **Install Tailwind CSS (optional):**
    
    ```bash
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    ```

7. **Configure `tailwind.config.js`:**
    
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

8. **Add Tailwind CSS to your CSS file:**
    
    ```css
    /* In styles/globals.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

### Python Script

1. **Run the script:**
    
    ```bash
    py -m uvicorn app:app --reload
    ```

2. **The extracted text will be printed to the console.**

### Next.js App

1. **Navigate to the Next.js app directory:**
    
    ```bash
    cd next-app
    ```

2. **Run the development server:**
    
    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

