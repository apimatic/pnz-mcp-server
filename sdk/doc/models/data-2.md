
# Data 2

Data

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transaction` | [`TransactionModel[] \| undefined`](../../doc/models/transaction-model.md) | Optional | Transaction |

## Example (as JSON)

```json
{
  "Transaction": [
    {
      "AccountId": "AccountId4",
      "TransactionId": "TransactionId4",
      "TransactionReference": {
        "CreditorName": "CreditorName2",
        "CreditorReference": {
          "Particulars": "Particulars4",
          "Code": "Code8",
          "Reference": "Reference0"
        },
        "DebtorName": "DebtorName4",
        "DebtorReference": {
          "Particulars": "Particulars8",
          "Code": "Code2",
          "Reference": "Reference4"
        }
      },
      "StatementReference": [
        "StatementReference0",
        "StatementReference1"
      ],
      "Amount": {
        "Amount": "Amount0",
        "Currency": "Currency6"
      },
      "CreditDebitIndicator": "Credit",
      "Status": "Booked",
      "BookingDateTime": "2016-03-13T12:52:32.123Z",
      "ValueDateTime": "2016-03-13T12:52:32.123Z",
      "AddressLine": "AddressLine8"
    }
  ]
}
```

