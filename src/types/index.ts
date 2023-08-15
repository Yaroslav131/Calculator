export interface HistoryType {
    inputValue: string;
    resultValue: string;
}

export interface Command {
    execute: () => void;
}

interface IButton {
    buttonStyle: {
        backgroundColor: string;
    };
    textColor: {
        color: string;
    };
}

export interface IThemeColors {
    background: {
        backgroundColor: string;
    };
    keypadButtons: {
        resultButton: IButton;
        incrementButton: IButton;
        deleteButton: IButton;
        button: IButton;
    };
    display: {
        resultTextColor: {
            color: string;
        };
        inputTextColor: {
            color: string;
        };
        signColor: {
            color: string;
        };
    };
}
