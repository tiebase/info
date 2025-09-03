# Download

Download the TieBase application from the links below. Please choose the appropriate version for your Mac's chip.

<script setup>
const macDownloads = [
  // {
  //   name: 'TieBase for M1 Mac',
  //   description: 'Optimized version for Mac with Apple Silicon (M1, M2, M3) chips.',
  //   url: 'https://static.tiebase.haribote-lab.net/release/bundle/dmg/TieBase_0.1.0_aarch64.dmg',
  //   filename: 'TieBase_0.1.0_aarch64.dmg',
  //   size: '45.2 MB',
  //   version: 'v0.1.0'
  // },
  {
    name: 'TieBase for Mac',
    description: 'Version for Mac computers.',
    url: 'https://github.com/tiebase/info/releases/download/v0.0.1/TieBase_0.0.1_x64.dmg',
    filename: 'TieBase_0.1.0_x64.dmg',
    size: '48.1 MB',
    version: 'v0.1.0'
  }
]
</script>

<DownloadLinks 
  title="Mac Version"
  :downloads="macDownloads"
/>

## System Requirements

### Mac Version
- **M1 Mac**: macOS 11.0 (Big Sur) or later
- **Intel Mac**: macOS 10.15 (Catalina) or later
- **Memory**: 4GB RAM or more recommended
- **Storage**: 200MB free space

## Installation Instructions

1. Download the appropriate version for your Mac from above
2. Double-click the downloaded `.dmg` file to open it
3. Drag & drop `TieBase.app` to the `Applications` folder
4. Launch TieBase from Launchpad or Applications folder

## First Launch Notes

Due to macOS security features, a warning may appear on first launch. In that case, follow these steps:

1. Open **System Preferences** → **Security & Privacy**
2. Click "Open Anyway" in the **General** tab
3. Or right-click on TieBase.app and select "Open"

<!-- ## Support

If you have any questions or issues, please feel free to contact us:

- [GitHub Issues](https://github.com/your-repo/tie/issues)
- [Documentation](/docs/) -->

## Release History

For the latest updates, please check the [Release Notes](/release/).
