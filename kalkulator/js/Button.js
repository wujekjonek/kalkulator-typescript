var Button = (function () {
    function Button(wysokosc, szerokosc, opis, klasa) {
        this.w = szerokosc;
        this.h = wysokosc;
        this.text = opis;
        this.class = klasa;
    }
    Button.prototype.stworzPrzycisk = function (input) {
        var button = document.createElement("button");
        button.style.width = this.w;
        button.style.height = this.h;
        button.innerHTML = this.text;
        button.id = this.id;
        button.className = this.class;
        button.onclick = function () {
            wartoscButtona(button.id);
            // to wpisuje do okna ??
            //     input.value += button.id + "";
            //    wyswietlId("+");
            //    console.log(" z button onclick -> Nacisnąłeś przycisk: " + button.id);
        };
        return button;
    };
    Button.prototype.getW = function () {
        return this.w;
    };
    Button.prototype.getH = function () {
        return this.h;
    };
    Button.prototype.getText = function () {
        return this.text;
    };
    Button.prototype.setW = function (szerokosc) {
        this.w = szerokosc;
    };
    Button.prototype.setId = function (id) {
        this.id = id;
    };
    return Button;
}());
