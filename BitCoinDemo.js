$(function () {

    console.log("BitCoinDemo 13 v3 .js")

    var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    // $("form").submit(function(e){
    //     console.log("submit clicked")
    //     e.preventDefault();
    // });

    document.querySelector('form').addEventListener('submit', function(e) {

        console.log("Submitted")

        e.preventDefault();

        var form = document.querySelector('form');

        console.log("form -")
        console.log(form)

        // var extraDetails = {
        //     name: form.querySelector('input[name=cardholder-name]').value,
        // };

        Stripe.source.create({
            type: 'bitcoin',
            amount: 1000,
            currency: 'usd',
            owner: {
                email: 'jenny.rosen@example.com',
            },
        }, stripeResponseHandler);

    });

    function stripeTokenHandler(token) {

        console.log("In stripe token handler")
        console.log(token)

        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        form.appendChild(hiddenInput);

        // Submit the form
//    form.submit();
    }


})