// // Create a Stripe client
// var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
//
// // Create an instance of Elements
// var elements = stripe.elements();
//
// // Create an instance of Elements
// var elements = stripe.elements();
//
// // Custom styling can be passed to options when creating an Element.
// // (Note that this demo uses a wider set of styles than the guide below.)
// var style = {
//     base: {
//         color: '#32325d',
//         lineHeight: '24px',
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSmoothing: 'antialiased',
//         fontSize: '16px',
//         '::placeholder': {
//             color: '#aab7c4'
//         }
//     },
//     invalid: {
//         color: '#fa755a',
//         iconColor: '#fa755a'
//     }
// };
//
// // Create an instance of the card Element
// var card = elements.create('card', {style: style});
//
// // Add an instance of the card Element into the `card-element` <div>
// card.mount('#card-element');
//
// // Handle real-time validation errors from the card Element.
// card.addEventListener('change', function (event) {
//     var displayError = document.getElementById('card-errors');
//     if (event.error) {
//         displayError.textContent = event.error.message;
//     } else {
//         displayError.textContent = '';
//     }
// });
//
// // Handle form submission
// var form = document.getElementById('payment-form');
// form.addEventListener('submit', function (event) {
//
//     console.log("submitted")
//
//     event.preventDefault();
//
//     stripe.createToken(card).then(function (result) {
//
//         console.log("result")
//         console.log(result)
//
//         if (result.error) {
//             // Inform the user if there was an error
//             var errorElement = document.getElementById('card-errors');
//             errorElement.textContent = result.error.message;
//         } else {
//             // Send the token to your server
//             stripeTokenHandler(result.token);
//         }
//     });
// });
















var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
var elements = stripe.elements();

var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#8898AA',
            color: 'white',
            lineHeight: '36px',
            fontWeight: 300,
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSize: '19px',

            '::placeholder': {
                color: '#8898AA',
            },
        },
        invalid: {
            iconColor: '#e85746',
            color: '#e85746',
        }
    },
    classes: {
        focus: 'is-focused',
        empty: 'is-empty',
    },
});

card.mount('#card-element');

var inputs = document.querySelectorAll('input.field');

Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('focus', function() {
        input.classList.add('is-focused');
    });
    input.addEventListener('blur', function() {
        input.classList.remove('is-focused');
    });
    input.addEventListener('keyup', function() {
        if (input.value.length === 0) {
            input.classList.add('is-empty');
        } else {
            input.classList.remove('is-empty');
        }
    });
});

card.on('change', function(event) {
    setOutcome(event);
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = document.querySelector('form');
    var extraDetails = {
        name: form.querySelector('input[name=cardholder-name]').value,
    };

    console.log("Submitted")
    console.log(card)
    console.log(extraDetails)

    stripe
        .createToken(card, extraDetails)
        .then(setOutcome);

});

function setOutcome(result) {

    console.log("In setOutcome")
    console.log(result)

    var successElement = document.querySelector('.success');
    var errorElement = document.querySelector('.error');
    successElement.classList.remove('visible');
    errorElement.classList.remove('visible');

    if (result.token) {
        // Use the token to create a charge or a customer
        // https://stripe.com/docs/charges
        successElement.querySelector('.token').textContent = result.token.id;
        successElement.classList.add('visible');
    } else if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
    }
}

// function stripeTokenHandler(token) {
//     // Insert the token ID into the form so it gets submitted to the server
//     var form = document.getElementById('payment-form');
//     var hiddenInput = document.createElement('input');
//     hiddenInput.setAttribute('type', 'hidden');
//     hiddenInput.setAttribute('name', 'stripeToken');
//     hiddenInput.setAttribute('value', token.id);
//     form.appendChild(hiddenInput);
//
//     // Submit the form
//     form.submit();
// }