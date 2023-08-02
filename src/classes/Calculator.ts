import { solveMathExpression } from "../helpingFunctions";
import { reverseSign } from "../helpingFunctions/reverseSign";
import { HistoryType } from "../types/historyType";

export default class Calculator {
    public currentValue: string | null = "0";
    public buffer: string = '';
    public history: HistoryType[] = [];

    add(value: string) {
        this.buffer += value;
        this.currentValue = solveMathExpression(this.buffer) === null
            ? this.currentValue : solveMathExpression(this.buffer)
    }

    changeSign() {
        this.buffer = reverseSign(this.buffer);
        this.currentValue = solveMathExpression(this.buffer) === null
            ? this.currentValue : solveMathExpression(this.buffer)
    }

    delete() {
        this.buffer = this.buffer.slice(0, -1);
        this.currentValue = solveMathExpression(this.buffer) === null
            ? this.currentValue : solveMathExpression(this.buffer)
    }

    clean() {
        this.buffer = "";
        this.currentValue = "0";
    }
    result() {
        this.currentValue = solveMathExpression(this.buffer)
        this.addToHistory()
    }
    private addToHistory() {
        this.history.push({
            inputValue: this.buffer,
            resultValue: this.currentValue!
        })
    }
    cleanHistory() {
        this.history = []
    }
}