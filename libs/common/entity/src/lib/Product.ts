export abstract class Product {
  constructor(
    public readonly id?: string,
    public readonly name?: string,
    public readonly price?: number
  ) {}
}
