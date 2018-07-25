Make a test api request:
curl https://api.stripe.com/v1/charges \
   -u sk_test_ocwNGHplXVxSFiq73akjdd8U: \
   -d amount=999 \
   -d currency=usd \
   -d source=tok_visa \
   -d receipt_email="jenny.rosen@example.com"

Reference:
https://stripe.com/docs/stripe-js/elements/quickstart#setup
https://alligator.io/angular/stripe-elements/
https://stackoverflow.com/questions/47847606/using-stripe-with-angular-5
