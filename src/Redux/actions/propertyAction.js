export const SET_SIZE = 'SET_SIZE';
export const SET_TRY_POS = 'SET_TRY_POS';
export const SET_DEMO_POS = 'SET_DEMO_POS';
export const SET_MENU_INDEX = 'SET_MENU_INDEX';
export const SET_NAV_INDEX = 'SET_NAV_INDEX';
export const SET_PLAN_PAYMENT = 'SET_PLAN_PAYMENT';
export const SET_SHOW_NAV_TEXT = 'SET_SHOW_NAV_TEXT';
export const SET_CLICK_INDEX = 'SET_CLICK_INDEX';
export const SET_HERO_LEAVE = 'SET_HERO_LEAVE';

export function setSize(object) {
    return { type: SET_SIZE, payload: object }
}

export function setTryPos(object) {
    return { type: SET_TRY_POS, payload: object }
}

export function setDemoPos(object) {
    return { type: SET_DEMO_POS, payload: object }
}

export function setMenuIndex(index) {
    return { type: SET_MENU_INDEX, payload: index }
}

export function setNavIndex(index) {
    return { type: SET_NAV_INDEX, payload: index }
}

export function setPlanPayment(plan) {
    return { type: SET_PLAN_PAYMENT, payload: plan }
}

export function setShowNavText(boolean) {
    return { type: SET_SHOW_NAV_TEXT, payload: boolean }
}

export function setClickIndex(index) {
    return { type: SET_CLICK_INDEX, payload: index }
}

export function setHeroLeave(boolean) {
    return { type: SET_HERO_LEAVE, payload: boolean }
}