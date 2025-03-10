# Editor.js Emoji Picker Tool

An emoji picker tool ([Picmo](https://github.com/joeattardi/picmo)) for [Editor.js](https://editorjs.io/) inline toolbar.

## Installation

Get the package via npm or yarn:

```bash
npm i editorjs-emoji-tool
```

```bash
yarn add editorjs-emoji-tool
```

## Usage

Add the tool to the Editor.js initial config:

```js
import EmojiPickerTool from 'editorjs-emoji-picker-tool';

const editor = new EditorJS({
    // ...
    tools: {
        // ...
        emoji: {
            class: EmojiPickerTool
        },
    }
    // ...
});
```

## Config

This tool supports these configuration parameters:

| Field | Type | Description |
| --- | --- | --- |
| locale | `string` | Locale for the emoji picker. Default is `'en'`. |

