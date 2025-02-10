export interface StringVariable {
    value: string;
    variableName: string;
}

export interface NumberVariable {
    value: number;
    variableName: string;
}

export interface BooleanVariable {
    value: boolean;
    variableName: string;
}

export interface RegexVariable {
    value: RegExp;
    variableName: string;
}

export interface JsonVariable {
    value: object;
    variableName: string;
}

export type DebugVariable = StringVariable | NumberVariable | BooleanVariable | RegexVariable | JsonVariable;

export interface DebugVariables {
    variables: DebugVariable[];
}
