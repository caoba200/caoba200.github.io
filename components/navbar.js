class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<object type="text/html" data="navbar.html" ></object>';
    }
}

customElements.define('nav-bar', NavBar);
