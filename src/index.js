import './index.css';

import { Picker } from 'emoji-picker-element';

export default class EmojiPickerTool {

    static get isInline() {
        return true;
    }

    constructor({ config, api }) {
        this.config = config;
        this.api = api;
        this.button = null;
        this.pickerZone = null;
        this.selectedRange = null;
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.classList.add(this.api.styles.inlineToolButton);
        this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 10l.01 0" /><path d="M15 10l.01 0" /><path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg>';

        return this.button;
    }

    renderActions() {
        this.pickerZone = document.createElement('div');

        this.api.listeners.on(this.pickerZone, 'click', (e) => { 
            this.api.selection.expandToTag(this.pickerZone); 
        }, true);

        const picker = new Picker({
            locale: this.config.locale ?? 'en',
        });

        picker.addEventListener('emoji-click', event => {
            this.insertEmoji(event.detail.unicode); // will log something like the above
        });

        this.pickerZone.appendChild(picker);

        return this.pickerZone;
    }

    handleClick(e){
        console.log('handleClick');
    }

    surround(range) {
        this.selectedRange = range;
    }

    insertEmoji(emoji) {
        const insertMark = document.createElement('MARK');

        const selectedText = this.selectedRange.extractContents();
        insertMark.appendChild(selectedText);
        
        const emojiText = document.createTextNode(emoji);
        insertMark.appendChild(emojiText);

        const textNode = document.createTextNode(insertMark.textContent);

        this.selectedRange.insertNode(textNode);
    }

}