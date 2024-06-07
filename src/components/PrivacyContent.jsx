"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PrivacyContent = () => {
  return (
    <div className="h-screen py-10 md:py-24 overflow-y-auto">
      <motion.div
        id="privacy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-full flex flex-col px-4 pb-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
      >
        <div className="py-10">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Polityka prywatności
          </h1>
          <p className="py-4">Obowiązuje od 3 czerwca 2024 r.</p>
        </div>
        <div className="py-4">
          <p>
            Ks. Bartosz Dulęba, zamieszkały we Wrocławiu (dalej &bdquo;tw&oacute;rca
            aplikacji&rdquo;) udostępnia bezpłatną aplikację &bdquo;OREMUS M&oacute;dlmy
            się wsp&oacute;lnie&rdquo;.
          </p>
          <p>
            Ta strona służy do informowania odwiedzających o zasadach dotyczących
            gromadzenia, wykorzystywania i ujawniania danych osobowych, jeśli ktoś
            zdecydował się skorzystać z aplikacji.
          </p>
          <p>
            Użytkownik, kt&oacute;ry zdecyduje skorzystać z aplikacji, zgadza się na
            gromadzenie i wykorzystywanie danych osobowych zgodnie z niniejszą
            polityką. Zbierane dane osobowe są wykorzystywane do poprawnego
            funkcjonowania aplikacji.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Gromadzenie i wykorzystywanie danych</strong>
          </p>
          <p>
            Aby umożliwić korzystanie z aplikacji, wymaga się od Ciebie podania
            imienia oraz adresu e-mail. Aplikacja nie korzysta z usług stron
            trzecich, kt&oacute;re mogą gromadzić informacje służące do identyfikacji
            użytkownika.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Ciasteczka</strong>
          </p>
          <p>
            Pliki cookie to pliki zawierające niewielką ilość danych, kt&oacute;re są
            powszechnie używane jako anonimowe unikalne identyfikatory. Są one
            wysyłane do Twojej przeglądarki z odwiedzanych przez Ciebie stron
            internetowych i przechowywane w pamięci wewnętrznej Twojego urządzenia.
            Aplikacja nie używa plik&oacute;w &bdquo;cookie&rdquo;.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Bezpieczeństwo</strong>
          </p>
          <p>
            Tw&oacute;rca aplikacji ceni sobie Twoje zaufanie w przekazywaniu nam
            Twoich Danych Osobowych, dlatego stara się stosować komercyjnie
            akceptowalne środki ich ochrony. Pamiętaj jednak, że żadna metoda
            transmisji przez Internet ani metoda elektronicznego przechowywania nie
            jest w 100% bezpieczna i niezawodna i nie można zagwarantować jej
            absolutnego bezpieczeństwa.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Linki do innych witryn</strong>
          </p>
          <p>
            Aplikacja może zawierać łącza do innych witryn. Jeśli klikniesz łącze
            strony trzeciej, zostaniesz przekierowany do tej witryny. Należy
            pamiętać, że te zewnętrzne witryny nie są obsługiwane przez tw&oacute;rcę
            aplikacji. Dlatego zdecydowanie zaleca się zapoznanie się z Polityką
            prywatności tych witryn. Tw&oacute;rca aplikacji nie ma kontroli i nie
            ponosi żadnej odpowiedzialności za treść, politykę prywatności lub
            praktyki jakichkolwiek witryn lub usług stron trzecich.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Prywatność dzieci</strong>
          </p>
          <p>
            Aplikacja nie jest przeznaczona dla os&oacute;b poniżej 13 roku życia.
            Dane od dzieci poniżej 13 roku życia nie są świadomie zbierane. W
            przypadku odkrycia, że dziecko poniżej 13 roku życia przekazało do
            aplikacji dane osobowe, natychmiast zostaną one usunięte je z naszych
            serwer&oacute;w. Jeśli jesteś rodzicem lub opiekunem i wiesz, że Twoje
            dziecko przekazało do aplikacji dane osobowe, skontaktuj się, aby można
            było podjąć niezbędne działania.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Zmiany w niniejszej Polityce prywatności</strong>
          </p>
          <p>
            Od czasu do czasu niniejszy Polityka prywatności może być zaktualizowana.
            W związku z tym zaleca się okresowe przeglądanie tej strony pod kątem
            wszelkich zmian. Użytkownik zostanie powiadomiony o wszelkich zmianach,
            poprzez publikację nowej Polityki prywatności na tej stronie.
          </p>
        </div>
        <div className="py-4">
          <p>
            <strong>Skontaktuj się z nami</strong>
          </p>
          <p>
            Jeśli masz jakiekolwiek pytania lub sugestie dotyczące tej Polityki
            prywatności, nie wahaj się skontaktować pod adresem{" "}
            <Link href={"mailto:pomoc@oremus-app.pl"} className="text-red-900">
              pomoc@oremus-app.pl
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyContent;
