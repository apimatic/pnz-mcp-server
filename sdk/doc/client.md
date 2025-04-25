
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| bearerAuthCredentials | [`BearerAuthCredentials`](auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  timeout: 0,
  environment: Environment.Production,
});
```

## Account and Transaction API Specification Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| accounts | Gets AccountsController |
| balances | Gets BalancesController |
| beneficiaries | Gets BeneficiariesController |
| directDebits | Gets DirectDebitsController |
| offers | Gets OffersController |
| party | Gets PartyController |
| scheduledPayments | Gets ScheduledPaymentsController |
| standingOrders | Gets StandingOrdersController |
| statements | Gets StatementsController |
| transactions | Gets TransactionsController |

