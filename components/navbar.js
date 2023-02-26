class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar (sit on top) -->
        <div class="w3-top">
            <div class="w3-bar w3-transparent w3-text-white w3-card" id="myNavbar">
                <a href="#home" class="w3-bar-item w3-button w3-wide">
                    <img src="resources/icons/logo-pink.png" width="16" height="16"></img>
                    THE ORIZURU
                </a>
                <!-- Right-sided navbar links -->
                <div class="w3-right w3-hide-small">
                    <a href="#about" class="w3-bar-item w3-button">About</a>
                    <a href="404.html" target="_blank" class="w3-bar-item w3-button">Blog</a>
                    <a href="#portfolio" class="w3-bar-item w3-button">Portfolio</a>
                    <a href="mailto:caoduybao2494@gmail.com" class="w3-bar-item w3-button"><i class="fa fa-envelope w3-hover-opacity"></i></a>
                    <a href="https://github.com/caoba200" target="_blank" class="w3-bar-item w3-button"><i class="fa fa-github w3-hover-opacity"></i></a>
                    <a href="https://www.linkedin.com/in/bao-duy-c-6b6b5b5b/" target="_blank" class="w3-bar-item w3-button"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
                </div>
                <!-- Hide right-floated links on small screens and replace them with a menu icon -->
        
                <a href="javascript:void(0)" class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onclick="w3_open()">
                <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        
        <!-- Sidebar on small screens when clicking the menu icon -->
        <nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
            <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
            <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT</a>
            <a href="#team" onclick="w3_close()" class="w3-bar-item w3-button">TEAM</a>
            <a href="#work" onclick="w3_close()" class="w3-bar-item w3-button">WORK</a>
            <a href="#pricing" onclick="w3_close()" class="w3-bar-item w3-button">PRICING</a>
            <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
