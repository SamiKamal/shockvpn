cloudTranslation({
    defaultLanguage: "en", // optional | The main language used.
    urlLanguageLocation: UrlLanguageLocation.none, // optional | To append language in the url (ex: www.website.com/en/).
    translatorProvider: TranslatorProvider.none, // optional | Translate text using a translator provider.
    translatorProviderKey: "", // optional | The translator provider key.
    logTranslationsFromProvider: false, // optional | Set to true to log the translation output in the console.
    languages: [
      {
        code: "en",
        displayName: "English"
      },
      {
          code:"de",
          displayName: "Deutsch"
      },
      {
        code: "ar",
        displayName: "العربية",
        direction: LanguageDirection.rtl
      }
    ]
  });
  // CloudTranslation.currentLanguage.code = 'ar'

  CloudTranslation.updateCurrentLanguage('en')
    // CloudTranslation.translateElement(document.querySelector('.nav--link'))
