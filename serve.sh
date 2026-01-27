#!/bin/bash

# Simple script to serve the website locally

PORT=8000

echo "=========================================="
echo "  Nick Child Portfolio - Local Server"
echo "=========================================="
echo ""
echo "Starting server on http://localhost:$PORT"
echo "Press Ctrl+C to stop"
echo ""

# Try different server options based on what's available

if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    echo "Using Python 2..."
    python -m SimpleHTTPServer $PORT
elif command -v php &> /dev/null; then
    echo "Using PHP..."
    php -S localhost:$PORT
else
    echo "Error: No suitable HTTP server found."
    echo "Please install Python 3 or PHP to run this script."
    echo ""
    echo "Alternatively, you can:"
    echo "  1. Open index.html directly in your browser"
    echo "  2. Use npx http-server (if Node.js is installed)"
    exit 1
fi
