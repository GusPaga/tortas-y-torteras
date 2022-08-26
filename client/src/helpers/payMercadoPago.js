export async function payMercadoPago() {
	try {
		console.log('hola');
		const preference = await (
			await fetch('http://localhost:3001/Pay', {
				method: 'post',
				body: JSON.stringify({ msj: 'hola' }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
		).json();
		console.log('hola');
		const script = document.createElement('script');

		// The source domain must be completed according to the site for which you are integrating.
		// For example: for Argentina ".com.ar" or for Colombia ".com.co".
		script.src =
			'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
		script.type = 'text/javascript';
		script.dataset.preferenceId = preference.preferenceId;
		document.getElementById('page-content').innerHTML = '';
		document.querySelector('#page-content').appendChild(script);
	} catch {
		window.alert('arreglar');
	}
}
