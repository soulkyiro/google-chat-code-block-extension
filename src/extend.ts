import './extensions/string.extensions';
import './extensions/eventTarget.extensions';
import './extensions/keyboardEvent.extensions';
import { Keys, EventTypeSupport } from './models/allKeyValues';

/**
 * function listens for user events when keys are down.
 * @param event KeyboardEvent.
 * @returns 
 */
const handleUserKeyPressListener = (event: KeyboardEvent) => event.isSpecialPaste() && setTimeout(
    () => event.target != null && ApplyFormatting(event.target.getHTMLInputElement(), event.target.getHTMLElement()),
    10);

/**
 * Function assign the value with the code fragment format.
 * @param inputElement HTMLInputElement.
 * @param element HTMLElement.
 * @returns 
 */
const ApplyFormatting = (inputElement: HTMLInputElement, element: HTMLElement) =>
    inputElement.innerHTML = setCodeFragmetnStyle(element.innerText);

/**
 * Function for assigning code fragment style constraints.
 * @param text string.
 * @returns 
 */
const setCodeFragmetnStyle = (text: string) => removeCodeFragmetnStyle(text)
    .prefix(Keys.codeFragmentKey)
    .postfix(Keys.codeFragmentKey);

/**
 * Function removes code fragment style constraints.
 * @param text string.
 * @returns 
 */
const removeCodeFragmetnStyle = (text: string) => text.includes(Keys.codeFragmentKey)
    ? text.removeAll(Keys.codeFragmentKey)
    : text;

document.addEventListener(EventTypeSupport.keydown, handleUserKeyPressListener, false);