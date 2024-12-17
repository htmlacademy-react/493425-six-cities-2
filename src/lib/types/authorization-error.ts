type AuthorizationErrorDetailType = {
  property: string;
  value: string;
  messages: string[];
};

export type AuthorizationErrorType = {
  details: AuthorizationErrorDetailType[];
  errorType: string;
  message: string;
};
