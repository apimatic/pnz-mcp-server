
# Balance

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

## Structure

`Balance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount10`](../../doc/models/amount-10.md) | Required | - |
| `creditDebitIndicator` | [`CreditDebitIndicatorEnum`](../../doc/models/credit-debit-indicator-enum.md) | Required | Indicates whether the balance is a credit or a debit balance. Usage: A zero balance is considered to be a credit balance. |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | Balance type, in a coded form. |

## Example (as JSON)

```json
{
  "Amount": {
    "Amount": "Amount0",
    "Currency": "Currency6"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "ClosingAvailable"
}
```

