import {h, render} from "preact";
import register from "preact-custom-element";
export { register };

export { App } from "./components/App";
export { MyTest } from "./components/MyTest";
export { MyElementComponent } from './components/MyElementComponent';

export function myRender(component: any, container: HTMLElement, props: any) {
    render(h(component, props), container);
}