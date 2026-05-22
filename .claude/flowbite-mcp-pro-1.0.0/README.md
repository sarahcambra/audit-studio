<p>
    <a href="[https://flowbite.com](https://flowbite.com/docs/getting-started/mcp/)" >
      <img alt="Flowbite - Tailwind CSS components" width="350" src="https://flowbite.s3.amazonaws.com/github/flowbite-mcp-github-2.png">
    </a><br>
    Official MCP server for Flowbite to leverage AI for UI creation and theme generation
</p>

An MCP server that enables AI assistants to access the [Flowbite](https://flowbite.com/) library of Tailwind CSS components—including UI elements, forms, typography, and plugins—while offering an intelligent theme generator for creating custom branded designs within AI-driven development environments.

## MCP Features

### Tools:

- **🎨 Figma to code** - Copy the Figma node url and generate code ([video demo](https://x.com/zoltanszogyenyi/status/1996953610966405547))
- **🎯 Theme file generator** - Create custom branded themes from any branded hex color

### Resources:

- **450+ pro block sections** - Complete access to the [Flowbite Pro blocks](https://flowbite.com/blocks/)
- **📦 60+ UI components** - Complete access to the [Flowbite UI components](https://flowbite.com/docs/getting-started/introduction/)

### Server:

- **🌐 Dual transport support** - Standard I/O (stdio) for CLI or HTTP Streamable for server deployments
- **⚡ Production ready** - Docker support with health checks and monitoring

## Quickstart

### Using NPX

The simplest way to use Flowbite MCP Server is to first install the packages:

```bash
npm install
```

Then build the local server:

```bash
npm run build
```

Then start the local STDIO server:

```bash
# Start in stdio mode (default)
node build/index.js
```

Now check the [integration examples](#integration-examples) below based on which MCP client you're using (Cursor, Windsurf, Claude).

### Environment variables

Currently you only need the [Figma personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) if you want to enable the Figma to code generation tool. 

```bash
// other options
"env": {
  "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
}
```

You set this variable in your MCP client configuration file.

## Integration examples

Use the following configuration examples to install the Flowbite MCP server in popular clients such as Cursor, Claude, Windsurf, and others.

### Claude desktop

Update the `claude_desktop_config.json` file and add the following configuration:

```json
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

### Cursor editor

Update the `mcp.json` file and add the following configuration:

```json
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

### Windsurf editor

Update the `mcp_config.json` file and add the following configuration:

```json
{
  "mcpServers": {
    "flowbite": {
      "command": "npx",
      "args": ["-y", "flowbite-mcp"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

## Local Transport Modes

### Standard I/O (stdio)

The default mode for local development and CLI integrations:

```bash
# Start in stdio mode (default)
node build/index.js

{
  "mcpServers": {
    "flowbite": {
      "command": "node",
      "args": ["/path/to/flowbite-mcp/build/index.js"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "YOUR_PERSONAL_FIGMA_ACCESS_TOKEN"
      }
    }
  }
}
```

Learn how to get the [Figma personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) to enable the Figma to code generation tool.

### HTTP server

HTTP-based transport for production and multi-client scenarios:

```bash
node build/index.js --mode http --port 3000
```

This will make the MCP server available at 'http://localhost:3000/mcp'.

### Local development

```bash
# Clone the repository
git clone https://github.com/themesberg/flowbite-mcp.git
cd flowbite-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run in stdio mode (for Claude Desktop, Cursor)
npm start

# Run inspector
npm run start inspector

# Run in HTTP server mode (for production/multi-client)
MCP_TRANSPORT_MODE=http npm start
```

### Production deployment (HTTP Mode)

For production servers with multiple clients:

```bash
# Using npx
npx flowbite-mcp --mode http --port 3000

# Using Docker Compose
docker-compose up -d

# Health check
curl http://localhost:3000/health
```

### Hosting variables

Configure the server behavior with these environment variables:

```bash
# Transport mode: stdio (default) or http
MCP_TRANSPORT_MODE=http

# Server port for HTTP mode
MCP_PORT=3000

# Host binding for HTTP mode
MCP_HOST=0.0.0.0

# CORS origins (comma-separated)
MCP_CORS_ORIGINS=http://localhost:3000,https://myapp.com
```

## Docker Configuration

The project includes a production-ready Docker setup with multi-stage builds for optimal performance.

### Quickstart with Docker

```bash
# Build and run with Docker Compose (recommended)
docker-compose up -d

# Check health
curl http://localhost:3000/health

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

### MCP inspector

Use the MCP Inspector for interactive debugging:

```bash
npm run inspector
```

### Logging

Check server logs for detailed information:

```bash
# stdio mode logs to console
node build/index.js

# HTTP mode includes HTTP request logs
MCP_TRANSPORT_MODE=http node build/index.js
```

## File structure

```
flowbite-mcp/
├── src/
│   ├── index.ts              # Main server entry point
│   └── server-runner.ts      # Express HTTP Streamable transport
├── data/
│   ├── components/           # 60+ component markdown files
│   ├── forms/                # Form component documentation
│   ├── typography/           # Typography elements
│   ├── plugins/              # Plugin documentation
│   ├── theme.md              # Theme variable reference
│   └── quickstart.md         # Getting started guide
├── build/                    # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is based on the [EULA license](https://flowbite.com/license/) from the Flowbite website.

## Credits

- **[Flowbite](https://flowbite.com/)** - For the amazing Tailwind CSS component library
- **[Anthropic](https://anthropic.com)** - For the Model Context Protocol specification
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework

## Resources

- 🎨 [Flowbite Documentation](https://flowbite.com/docs/getting-started/introduction/)
- 📦 [Flowbite Components](https://flowbite.com/docs/components/accordion/)
- 🌐 [Model Context Protocol](https://modelcontextprotocol.io/)
- 🚀 [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- 💬 [GitHub Issues](https://github.com/themesberg/flowbite-mcp/issues)
