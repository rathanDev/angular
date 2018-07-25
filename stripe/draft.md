Make a test api request:

# create a charge -
curl https://api.stripe.com/v1/charges \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d amount=999 \
   -d currency=usd \
   -d source=tok_1CrozNHyRg6mRuD3AZqLF30W \
   -d receipt_email="ra@gmail.com"

# create a customer -                           - cus_DIPyQRxvXyajK3
curl https://api.stripe.com/v1/customers \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d email="rathan.kparam@gmail.com" \
   -d source=tok_1Crp8IHyRg6mRuD3kMs3AFAw

# Charge the Customer instead of the card:
curl https://api.stripe.com/v1/charges \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d amount=1008 \
   -d currency=usd \
   -d customer=cus_DIPyQRxvXyajK3

# Define a service product                    -   prod_DIQ5xqQrrlI8pp
curl https://api.stripe.com/v1/products \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d name="My SaaS Platform" \
   -d type=service

# Create a pricing plan                       -   plan_DIQ6aKAlR3YPk1
curl https://api.stripe.com/v1/plans \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d product=prod_DIQ5xqQrrlI8pp \
   -d nickname="SaaS Platform USD" \
   -d interval=month \
   -d currency=usd \
   -d amount=10000

# Subscribe the customer to the plan          -     sub_DIQ9iaBQL0n5FW  
curl https://api.stripe.com/v1/subscriptions \
   -u sk_test_ocwNGHplXVxSFiq73akjpp8U: \
   -d customer=cus_DIPyQRxvXyajK3 \
   -d items[0][plan]=plan_DIQ6aKAlR3YPk1



Reference:
https://stripe.com/docs/stripe-js/elements/quickstart#setup
https://alligator.io/angular/stripe-elements/
https://stackoverflow.com/questions/47847606/using-stripe-with-angular-5
