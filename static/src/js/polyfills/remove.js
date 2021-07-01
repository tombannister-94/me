// Polyfill for el.remove()
// from https://github.com/chenzhenxi/element-remove
(function (arr) {
    'use strict';

    arr.forEach(function (item) {
        // eslint-disable-next-line no-prototype-builtins
        if (item.hasOwnProperty('remove')) {
            return;
        }
        Object.defineProperty(item, 'remove', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function remove() {
                this.parentNode && this.parentNode.removeChild(this);
            }
        });
    });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));
