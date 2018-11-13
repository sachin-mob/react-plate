export const ACTION1 = 'ACTION1';
export const ACTION2 = 'ACTION2';

export function action1(text) {
    return { type: ACTION1, text };
}
export function action2(index) {
    return { type: ACTION2, index };
}