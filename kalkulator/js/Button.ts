class Button {

    w: string;
    h: string;
    text: string;
    id: string;
    class: string;

    constructor(wysokosc: string, szerokosc: string, opis: string, klasa: string) {

        this.w = szerokosc;
        this.h = wysokosc;
        this.text = opis;
        this.class = klasa;
    }

    stworzPrzycisk(input: HTMLInputElement) {
        let button = document.createElement("button");
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
    }

    getW() {
        return this.w;
    }

    getH() {
        return this.h;
    }

    getText() {
        return this.text;
    }

    setW(szerokosc: string) {
        this.w = szerokosc;
    }

    setId(id: string) {
        this.id = id;
    }

}