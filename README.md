# create.

To run change directory to server and run npm run dev to start backend.
In new terminal change directory to client and run npm run build and then npm start to start frontend.

### For macOS

1. **Download Ollama**:
   ```bash
   # Option 1: Download from website
   # Visit https://ollama.ai and download the macOS installer
   
   # Option 2: Using Homebrew (recommended)
   brew install ollama
   ```

2. **Start Ollama service**:
   ```bash
   ollama serve
   ```

3. **Install the Llama3 model**:
   ```bash
   # In a new terminal window
   ollama pull llama3
   ```

### For Windows

1. **Download Ollama**:
   - Visit [https://ollama.ai](https://ollama.ai)
   - Download the Windows installer (.exe file)
   - Run the installer and follow the setup wizard

2. **Start Ollama**:
   - Open Command Prompt or PowerShell as Administrator
   - Run:
   ```cmd
   ollama serve
   ```

3. **Install the Llama3 model**:
   ```cmd
   ollama pull llama3
   ```

### For Linux (Ubuntu/Debian)

1. **Install Ollama**:
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh
   ```

2. **Start Ollama service**:
   ```bash
   ollama serve
   ```

3. **Install the Llama3 model**:
   ```bash
   ollama pull llama3
   ```

### For Linux (Other Distributions)

1. **Manual Installation**:
   ```bash
   # Download the binary
   curl -L https://ollama.ai/download/linux-amd64 -o ollama
   chmod +x ollama
   sudo mv ollama /usr/local/bin/
   ```

2. **Start Ollama**:
   ```bash
   ollama serve
   ```

3. **Install the Llama3 model**:
   ```bash
   ollama pull llama3
   ```

### ✅ Verify Ollama Installation

Test if Ollama is working correctly:

```bash
# Check if Ollama is running
curl http://localhost:11434/api/tags

# Test the model
ollama run llama3 "Hello, how are you?"
```

If successful, you should see a JSON response with available models and the Llama3 model should respond to your test message.

## 🚀 Running the Application

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install client dependencies
cd client/client
npm install
cd ../..
```

### 2. Environment Setup (optional, should still work without mongodb, if errors then add key

Create a `.env` file in the `/server` directory:

```env
MONGO_URI=your_mongodb_connection_string
```

### 3. Start the Application

**Option 1: Development Mode (Recommended)**

```bash
# Terminal 1: Start the backend server
npm run dev

# Terminal 2: Start the frontend (in a new terminal)
cd client/client
npm start
```

**Option 2: Production Mode**

```bash
# Terminal 1: Start the backend
cd server
node server.js

# Terminal 2: Build and serve frontend
cd client/client
npm run build
npm start
```

### 4. Ensure Ollama is Running

Make sure Ollama is running in the background:

```bash
# If not already running
ollama serve
```

## 🔧 Configuration

### Ollama Model Configuration

The application is configured to use the `llama3` model. You can modify this in `/server/extractRequirements.js`:

```javascript
body: JSON.stringify({ 
  model: "llama3",  // Change this to use different models
  prompt, 
  stream: false,
  // ... other options
})
```

### Available Models

You can install and use other models:

```bash
# List available models
ollama list

# Install other models
ollama pull codellama
ollama pull mistral
ollama pull phi
```

## 🌐 Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Ollama API**: http://localhost:11434
