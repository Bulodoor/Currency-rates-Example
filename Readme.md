# Currency Rates

Bu uygulamada, HTML sayfasında kullanıcının _input_ ve _select_ elemanlarına girdiği ve seçtiği bilgileri `main.js` de ile topladık. Okunurluğu ve çalışması kolay olsun diye `currency.js` adında bir dosya oluşturduk ve burada bir [_class_](https://www.w3schools.com/Js/js_classes.asp) oluşturduk. `main.js` dosyasında topladığımız bilgileri yeni bir _nesne_ oluşturup, bu bilgileri currency.js dosyasına gönderdik. Burada _Fetch API_ ve _async-await_ kullanarak [Free Currency API](https://freecurrencyapi.com/) sitesinden döviz kur bilgilerini alip burada değerleri hesaplayıp tekrardan _return_ ile main.js dosyamıza gönderip _input_ içine yazdırdık. Ülkelerin _ISO_ adlarını ve para birimlerinin sembollerini barındıran bir _object_ ve bunları daha rahat kullanmak için bir _array_ içerisine yerleştirdik. Bunları _for_ ve _if-else_ yardımıyla filtreleyip *span*lerin *innerHTML*lerine yazıp bu küçük uygulamamızı bitirmiş olduk.

Uygulamanın bağlantısı: https://currency-rates-examples.netlify.app/

### Kullanılan Yöntemler

- Class
- Fetch API
- async-await
- then-catch
- For
- If-else
