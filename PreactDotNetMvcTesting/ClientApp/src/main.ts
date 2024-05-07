import {h, render} from "preact";

export { App } from "./components/App";
export { MyTest } from "./components/MyTest";

export function myRender(component: any, container: HTMLElement, props: any) {
    render(h(component, props), container);
}