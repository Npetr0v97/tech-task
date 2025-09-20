export class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);

    this.name = 'CustomError';
    this.code = code;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
