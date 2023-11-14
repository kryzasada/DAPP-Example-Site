export type TokenInputProps = {
    field: "input" | "output";
    tokenName: string;
    balance: number;
    value?: number;
    loading?: boolean;
    balanceLoading?: boolean;
    onBlur?: (amount: number) => void
};
