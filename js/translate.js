function changeLanguage(language) {
  const apiKey = 'AIzaSyBc7l1XvgybeY2Q-A8QqOd2fyzHyo8TfD4';


  const elementsToTranslate = document.querySelectorAll('.translatable');

  elementsToTranslate.forEach((element) => {
    const textToTranslate = element.textContent;

    fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: textToTranslate,
        target: language,
      }),
    })
    .then(response => response.json())
    .then(data => {
     
      console.log('API Response:', data);

     
      if (data.error) {
        console.error('Translation API Error:', data.error);
        return;
      }

      
      element.textContent = data.data.translations[0].translatedText;
    })
    .catch(error => console.error('Error during translation:', error));
  });
}
