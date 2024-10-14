export const HttpStatusCode: { [key: number]: string } = {
  100: 'Continue',
  101: 'SwitchingProtocols',
  102: 'Processing',
  103: 'EarlyHints',

  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'NonAuthoritativeInformation',
  204: 'NoContent',
  205: 'ResetContent',
  206: 'PartialContent',
  207: 'MultiStatus',
  208: 'AlreadyReported',
  226: 'IMUsed',

  300: 'MultipleChoices',
  301: 'MovedPermanently',
  302: 'Found',
  303: 'SeeOther',
  304: 'NotModified',
  305: 'UseProxy',
  306: 'SwitchProxy',
  307: 'TemporaryRedirect',
  308: 'PermanentRedirect',

  400: 'BadRequest',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'NotFound',
  405: 'MethodNotAllowed',
  406: 'NotAcceptable',
  409: 'Conflict',
  410: 'Gone',
  411: 'LengthRequired',
  412: 'PreconditionFailed',
  413: 'PayloadTooLarge',
  414: 'URITooLong',
  415: 'UnsupportedMediaType',
  416: 'RangeNotSatisfiable',
  417: 'ExpectationFailed',
  418: 'ImATeapot',
  422: 'UnprocessableEntity',
  423: 'Locked',
  424: 'FailedDependency',
  425: 'UnorderedCollection',
  426: 'UpgradeRequired',
  428: 'PreconditionRequired',
  429: 'TooManyRequests',
  431: 'RequestHeaderFieldsTooLarge',
  451: 'UnavailableForLegalReasons',
  499: 'ClientClosedRequest',
  500: 'InternalServerError',
  501: 'NotImplemented',
  502: 'BadGateway',
  503: 'ServiceUnavailable',
  504: 'GatewayTimeout',
  505: 'HTTPVersionNotSupported',
  506: 'VariantAlsoNegotiates',
  507: 'InsufficientStorage',
  508: 'LoopDetected',
  510: 'NotExtended',
  511: 'NetworkAuthenticationRequired',
  599: 'NetworkConnectTimeoutError'
}

export const enum HttpStatus {
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,

  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,

  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  UnorderedCollection = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  ClientClosedRequest = 499,

  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
  NetworkConnectTimeoutError = 599
}
