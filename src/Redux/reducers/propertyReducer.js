import {
    SET_SIZE, SET_TRY_POS, SET_DEMO_POS, SET_MENU_INDEX, SET_NAV_INDEX, SET_PLAN_PAYMENT, SET_SHOW_NAV_TEXT, SET_CLICK_INDEX
} from '../actions/propertyAction';

export function propertyReducer(state = {
    size: [window.innerWidth, window.innerHeight], tryPos: [0, 0],
    demoPos: [0, 0], menuIndex: 0, navIndex: 0, plan: "BASIC", showNavText: true, clickIndex: 0
}, action) {
    switch (action.type) {
        case SET_SIZE:
            return { ...state, size: action.payload }
        case SET_DEMO_POS:
            return { ...state, demoPos: action.payload }
        case SET_TRY_POS:
            return { ...state, tryPos: action.payload }
        case SET_MENU_INDEX:
            return { ...state, menuIndex: action.payload }
        case SET_NAV_INDEX:
            return { ...state, navIndex: action.payload }
        case SET_PLAN_PAYMENT:
            return { ...state, plan: action.payload }
        case SET_SHOW_NAV_TEXT:
            return { ...state, showNavText: action.payload }
        case SET_CLICK_INDEX: {
            return { ...state, clickIndex: action.payload }
        }
        default:
            return { ...state }
    }
}