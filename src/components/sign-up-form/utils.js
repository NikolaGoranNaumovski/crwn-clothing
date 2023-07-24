export const handleFormStates = (state, action) => {
  switch (action.type) {
    case Sign_Up_Form_State_Valuess.CHANGE_CONFIRMATION_PASSWORD:
      return {
        ...state,
        confirmationPassword: action.payload.confirmationPassword,
      };
    case Sign_Up_Form_State_Valuess.CHANGE_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload.displayName,
      };
    case Sign_Up_Form_State_Valuess.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case Sign_Up_Form_State_Valuess.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export const Sign_Up_Form_State_Valuess = {
  CHANGE_DISPLAY_NAME: "CHANGE_DISPLAY_NAME",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_CONFIRMATION_PASSWORD: "CHANGEe_CONFIRMATION_PASSWORD",
};

export const initialFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmationPassword: "",
};
