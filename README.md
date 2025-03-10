# Editor.js Emoji Picker Tool

An Emoji Picker Tool for Editor.js inline toolbar.

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

