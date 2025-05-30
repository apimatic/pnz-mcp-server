
# Account Access Consent

## Structure

`AccountAccessConsent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`AccountAccessConsentModel`](../../doc/models/account-access-consent-model.md) | Required | - |
| `risk` | [`Risk1`](../../doc/models/risk-1.md) | Required | - |

## Example (as JSON)

```json
{
  "Data": {
    "Consent": {
      "Permissions": [
        "ReadStandingOrdersDetail"
      ],
      "ExpirationDateTime": "2016-03-13T12:52:32.123Z",
      "TransactionFromDateTime": "2016-03-13T12:52:32.123Z",
      "TransactionToDateTime": "2016-03-13T12:52:32.123Z"
    }
  },
  "Risk": {
    "GeoLocation": {
      "Latitude": "Latitude0",
      "Longitude": "Longitude8"
    },
    "PaymentContextCode": "Other",
    "MerchantCategoryCode": "MerchantCategoryCode8",
    "MerchantCustomerIdentification": "MerchantCustomerIdentification2",
    "DeliveryAddress": {
      "AddressType": "DeliveryTo",
      "AddressLine": [
        "AddressLine5",
        "AddressLine6",
        "AddressLine7"
      ],
      "StreetName": "StreetName4",
      "BuildingNumber": "BuildingNumber8",
      "PostCode": "PostCode8",
      "Country": "Country8"
    }
  }
}
```

