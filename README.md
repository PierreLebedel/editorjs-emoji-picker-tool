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

## Inline tool

To insert an emoji, select a portion of text and click the emoji icon in the inline toolbar. 
If your text selection starts at the beginning of the line, the emoji will be inserted before the selected text. Otherwise, the emoji will be inserted at the end.

## Config

This tool supports these configuration parameters:

| Field | Type | Description |
| --- | --- | --- |
| locale | `string` | Locale for the emoji picker. Default is `'en'`. |

