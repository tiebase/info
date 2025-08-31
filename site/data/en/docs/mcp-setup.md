# MCP (Model Context Protocol) Setup Guide

The TieBase application includes a built-in STDIO-based MCP server that allows AI services like Claude Desktop to access sticky note data.

## About the MCP Server

TieBase's MCP server features:

- **STDIO Communication**: Lightweight communication method using standard input/output
- **Japanese Support**: Advanced Japanese search with morphological analysis (Kagome)
- **Tag Functionality**: Tag-based sticky note filtering
- **Security**: SQL injection protection and query sanitization

## Available Tools

### 1. search
Search sticky notes. Supports the following search patterns:

- **Keyword Search**: `{"query": "meeting"}` - Search note content by keyword
- **Tag Search**: `{"tag": "work"}` - Get notes with specific tags
- **Combined Search**: `{"query": "meeting", "tag": "work"}` - Keyword search within tags

### 2. list_tags
Get a list of available tags.

### 3. get_tag_content
Get all content from notes with a specific tag.

## Claude Desktop Configuration

### 1. Configuration File Location

Claude Desktop's configuration file (`claude_desktop_config.json`) is located at:

**macOS:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```
<!-- 
**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
``` -->

### 2. Configuration Content

Add the following content to your configuration file:

```json
{
  "mcpServers": {
    "tie": {
      "command": "/Applications/TieBase.app/Contents/Resources/mcp"
    }
  }
}
```

### 3. Path Verification

After launching the TieBase application, you can get the MCP server path from the TieBase icon in the system tray:

1. Right-click the **TieBase** icon in the system tray
2. Select **"/Applications/TieBase.app/Contents/Resources/mcp"**
3. The MCP server path will be copied to your clipboard

![Get MCP Path](/tray_mcp_path.png)


## Usage Examples

### Basic Search

You can request the following in Claude Desktop:

```
"Search for project-related information in TieBase"
→ Executes search tool with {"query": "project"}
→ Returns notes containing "project"
```

### Tag-based Search

```
"Show all notes with 'important' tag in TieBase"
→ Executes get_tag_content tool with {"tag": "important"}
→ Returns all notes tagged with "important"
```

### Tag List Check

```
"What tags are available in TieBase?"
→ Executes list_tags tool
→ Returns list of available tags with usage counts
```

### Combined Search

```
"Find notes about 'meeting' in 'work' tag in TieBase"
→ Executes search tool with {"query": "meeting", "tag": "work"}
→ Returns notes containing "meeting" within "work" tag
```
<!-- 
## Troubleshooting

### MCP Server Not Recognized

1. **Path Verification**: Check if MCP binary path is correct
   ```bash
   ls -la /Applications/TieBase.app/Contents/Resources/mcp
   ```

2. **Execution Permission**: Check if MCP binary has execution permission
   ```bash
   chmod +x /Applications/TieBase.app/Contents/Resources/mcp
   ```

3. **Configuration File Check**: Check if `path_info.json` exists
   ```bash
   cat ~/Library/Application\ Support/com.haribote-lab.tie/path_info.json
   ```

### No Search Results Returned

1. **Database Connection**: Check if TieBase application is running
2. **Data Existence**: Verify that sticky note data is actually saved
3. **Search Query**: Check if search keywords are entered correctly

### Tools Not Showing in Claude Desktop

1. **Configuration File**: Verify JSON format is correct
2. **Claude Restart**: Restart Claude Desktop
3. **Log Check**: Check Claude Desktop logs for error messages -->

## Security

### Data Privacy

- **Local Processing**: All data is processed locally
- **No External Transmission**: Sticky note data is never sent externally
- **STDIO Communication**: Uses only local inter-process communication

## Frequently Asked Questions

### Q: Does the MCP server need to be running constantly?
A: No, it's automatically started when Claude Desktop uses MCP tools.

<!-- ### Q: Can multiple AI services access simultaneously?
A: The current implementation supports access from only one client at a time. -->

### Q: How are search results ordered?
A: They are ordered by creation date in descending order (newest first).

<!-- ### Q: Can tag color information also be retrieved?
A: Yes, the `list_tags` tool can also retrieve tag color information. -->

<!-- ## Support

For MCP-related issues or questions, please feel free to contact us:

- [GitHub Issues](https://github.com/sZma5a/kacidasi/issues)
- [Documentation](/en/docs/)
- [Release Notes](/en/release/) -->

---

Leverage MCP to use TieBase as a more powerful knowledge management tool!
