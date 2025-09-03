# Getting Started

Welcome to TieBase! TieBase is a modern sticky notes application with Model Context Protocol (MCP) integration capabilities.

## What is TieBase?

TieBase is a modern sticky notes application with the following features:

- Digital sticky note creation
- Tag-based organization
- Japanese-compatible search functionality
- MCP integration with AI services

## Installation Steps

### 1. Download the Application

Download the appropriate version for your Mac from the [Download page](/download):

### 2. DMG File Installation

1. Double-click the downloaded `.dmg` file to open it
2. Drag & drop `TieBase.app` to the `Applications` folder
3. Launch TieBase from Launchpad or Applications folder

### 3. First Launch

Due to macOS security features, a warning may appear on first launch:

1. Open **System Preferences** → **Security & Privacy**
2. Click "Open Anyway" in the **General** tab
3. Or right-click on TieBase.app and select "Open"

## MCP Setup (Claude Desktop Integration)

### 1. Get MCP Path

After launching the TieBase application, you can get the necessary information from the TieBase icon in the system tray:

1. Right-click the **TieBase** icon in the system tray
2. Select **"/Applications/TieBase.app/Contents/Resources/mcp"**
3. The MCP server path will be copied to your clipboard

![Get MCP Path](/tray_mcp_path.png)


### 2. Claude Desktop Configuration

1. Open Claude Desktop's configuration file:
   ```
   ~/Library/Application Support/Claude/claude_desktop_config.json
   ```

2. Add the following configuration (replace the path with the actual one):
   ```json
   {
     "mcpServers": {
       "tie": {
         "command": "/Applications/TieBase.app/Contents/Resources/mcp"
       }
     }
   }
   ```

3. Restart Claude Desktop

### 3. Verify MCP Functionality

Try the following in Claude Desktop:

- "Search for tasks via TieBase"
- "What tags are available in TieBase?"
- "Show items tagged with 'ideas' in TieBase"

## Basic Usage

### Creating Sticky Notes
1. Click on the application screen
2. Enter text

### Adding Tags
1. Select a sticky note
2. Enter a tag name in "Enter tag..."
3. Press Enter to add

### Search Function
- Click the magnifying glass icon in the bottom right
- Filter by Keyword and Tag
- Click search results to select the corresponding sticky note

## Next Steps

- [MCP Setup Guide](./mcp-setup) - Detailed MCP configuration instructions
- [Download](/download) - Get the latest version
- [Release Notes](/release/) - Check for updates
<!-- 
## Support

If you have any questions or issues:

- [GitHub Issues](https://github.com/sZma5a/kacidasi/issues)
- [MCP Setup Guide](./mcp-setup) -->

---

Start efficient knowledge management with TieBase!
