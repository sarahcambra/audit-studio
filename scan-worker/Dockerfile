# Use the official Playwright image — includes all Chromium system dependencies
FROM mcr.microsoft.com/playwright:v1.60.0-noble

WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy worker source
COPY index.js .
COPY checks/ checks/

# Railway / Fly / Cloud Run all inject PORT automatically
ENV PORT=3001
EXPOSE 3001

CMD ["node", "index.js"]
