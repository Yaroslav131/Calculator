import { Command } from '../types';
import Calculator from './Calculator';

export class AddCommand implements Command {
  constructor(private calculator: Calculator, private value: string) { }

  execute() {
    this.calculator.add(this.value);
  }
}

export class ChangeSignCommand implements Command {
  constructor(private calculator: Calculator) { }

  execute() {
    this.calculator.changeSign();
  }
}

export class CleanCommand implements Command {
  constructor(private calculator: Calculator) { }

  execute() {
    this.calculator.clean();
  }
}

export class DeleteCommand implements Command {
  constructor(private calculator: Calculator) { }

  execute() {
    this.calculator.delete();
  }
}

export class EqualsCommand implements Command {
  constructor(private calculator: Calculator) { }

  execute() {
    this.calculator.result();
  }
}
