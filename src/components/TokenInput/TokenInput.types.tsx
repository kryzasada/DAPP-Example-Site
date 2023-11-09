export type TokenInputProps = {
    field: "input" | "output";
    tokenName: string;
    balance: number;
    value?: number;
    loading?: boolean;
    getSwapPrice?: (value: string) => void;
};
