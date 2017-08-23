class Display {

    private _w: string;
    private _color: string;

    constructor(szerokosc: string, kolorWypelnienia: string) {
        this._w = szerokosc;
        this._color = kolorWypelnienia;
    }

    stworzOkienko() {
        let input = document.createElement("input")
        input.style.width = this._w;
        input.style.color = this._color;
    }


    get w(): string {
        return this._w;
    }

    set w(value: string) {
        this._w = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }




}