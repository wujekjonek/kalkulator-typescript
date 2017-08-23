var Display = (function () {
    function Display(szerokosc, kolorWypelnienia) {
        this._w = szerokosc;
        this._color = kolorWypelnienia;
    }
    Display.prototype.stworzOkienko = function () {
        var input = document.createElement("input");
        input.style.width = this._w;
        input.style.color = this._color;
    };
    Object.defineProperty(Display.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this._w = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Display.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    return Display;
}());
