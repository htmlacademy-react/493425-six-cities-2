type RequestErrorDetailType = {
  property: string;
  value: string;
  messages: string[];
};

export type RequestErrorType = {
  details: RequestErrorDetailType[];
  errorType: string;
  message: string;
};
