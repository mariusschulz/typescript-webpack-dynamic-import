import * as $ from "jquery";

export function render(container: HTMLElement) {
    // Imagine lots of widget code here.
    // For this demo, $.text() will have to do.
    $(container).text("Hello, World!");
}
