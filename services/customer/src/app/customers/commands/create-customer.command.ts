export class CreateCustomerCommand {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}
