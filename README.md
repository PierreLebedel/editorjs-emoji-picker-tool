# Editor.js Emoji Picker Tool

An emoji picker tool ([emoji-picker-element](https://github.com/nolanlawson/emoji-picker-element)) for [Editor.js](https://editorjs.io/) inline toolbar.

## Installation

Get the package via npm or yarn:

```bash
npm i @plebjs/editorjs-emoji-picker-tool
```

```bash
yarn add @plebjs/editorjs-emoji-picker-tool
```

## Usage

Add the tool to the Editor.js initial config:

```js
import EmojiPickerTool from '@plebjs/editorjs-emoji-picker-tool';

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

