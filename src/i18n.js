import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  "en": {
    "translation": {
      "Manufacturers": "Manufacturers",
      "Products": "Products",
      "Explore": "Explore",
      "BannerDesc": "Powering progress with precision-engineered electrical solutions trusted by industries and farmers since 2005. Delivering innovation, durability, and quality through expertly crafted starter motors, relays, and seasonal electrical products.",
      "UMA_NEWS": "🌟 UMA ENTERPRISES • Delivering Trust & Innovation Since 2005 • 🌟",
      "ProductsServices": "Products & Services",
      "Select product": "Select product",
      "CH Contactor": "CH Contactor",
      "MK-1 Coil": "MK-1 Coil",
      "Motor Starter": "Motor Starter",
      "Relay": "Relay",
      "NoProductsFound": "No products found for selected category.",
      "MissionVision": "Mission & Vision",
      "MissionVisionDesc": "Driven by purpose, Uma Enterprises crafts high-quality electrical components built for performance and durability. With a vision for growth and innovation, we’re shaping the future of industrial and agricultural solutions in Karnataka. Every product reflects our promise—precision, reliability, and a sustainable tomorrow.",
      "Home": "Home",
      "AboutUs": "About Us",
      "ContactUs": "Contact Us",
      "Blog": "Blog",
      "PrivacyPolicy": "Privacy Policy",
      "TermsOfService": "Terms of Service"
    }
  },
  "hi": {
    "translation": {
      "Manufacturers": "निर्माताओं",
      "Products": "उत्पाद",
      "Explore": "अन्वेषण करें",
      "BannerDesc": "प्रगतिशील विद्युत समाधान जो उद्योगों और किसानों द्वारा 2005 से विश्वसनीय हैं। स्टार्टर मोटर, रिले और मौसमी विद्युत उत्पादों में नवाचार, स्थायित्व और गुणवत्ता।",
      "UMA_NEWS": "🌟 यूएमए एंटरप्राइजेज • 2005 से विश्वास और नवाचार प्रदान कर रहा है • 🌟",
      "ProductsServices": "उत्पाद और सेवाएं",
      "Select product": "उत्पाद चुनें",
      "CH Contactor": "सीएच संपर्ककर्ता",
      "MK-1 Coil": "एमके-1 कॉइल",
      "Motor Starter": "मोटर स्टार्टर",
      "Relay": "रिले",
      "NoProductsFound": "चयनित श्रेणी के लिए कोई उत्पाद नहीं मिला।",
      "MissionVision": "मिशन और विजन",
      "MissionVisionDesc": "एक उद्देश्य से प्रेरित, उमा एंटरप्राइजेज उच्च गुणवत्ता वाले विद्युत घटकों का निर्माण करता है। विकास और नवाचार की दृष्टि से हम कर्नाटक में औद्योगिक और कृषि समाधानों का भविष्य बना रहे हैं। प्रत्येक उत्पाद हमारी प्रतिबद्धता को दर्शाता है—सटीकता, विश्वसनीयता और एक स्थायी कल।",
      "Home": "होम",
      "AboutUs": "हमारे बारे में",
      "ContactUs": "संपर्क करें",
      "Blog": "ब्लॉग",
      "PrivacyPolicy": "गोपनीयता नीति",
      "TermsOfService": "सेवा की शर्तें"
    }
  },
  "fr": {
    "translation": {
      "Manufacturers": "Fabricants",
      "Products": "Produits",
      "Explore": "Explorer",
      "BannerDesc": "Favoriser le progrès avec des solutions électriques de précision fiables depuis 2005. Innovation, durabilité et qualité dans les moteurs de démarrage, relais et produits saisonniers.",
      "UMA_NEWS": "🌟 UMA ENTERPRISES • Confiance et innovation depuis 2005 • 🌟",
      "ProductsServices": "Produits et services",
      "Select product": "Sélectionnez le produit",
      "CH Contactor": "Contacteur CH",
      "MK-1 Coil": "Bobine MK-1",
      "Motor Starter": "Démarreur de moteur",
      "Relay": "Relais",
      "NoProductsFound": "Aucun produit trouvé pour la catégorie sélectionnée.",
      "MissionVision": "Mission et Vision",
      "MissionVisionDesc": "Guidée par un objectif, Uma Enterprises conçoit des composants électriques de haute qualité. Avec une vision d'innovation, nous façonnons l’avenir industriel et agricole du Karnataka. Chaque produit incarne notre promesse : précision, fiabilité et durabilité.",
      "Home": "Accueil",
      "AboutUs": "À propos",
      "ContactUs": "Contactez-nous",
      "Blog": "Blog",
      "PrivacyPolicy": "Politique de confidentialité",
      "TermsOfService": "Conditions d'utilisation"
    }
  },
  "ka": {
    "translation": {
      "Manufacturers": "ತಯಾರಕರು",
      "Products": "ಉತ್ಪನ್ನಗಳು",
      "Explore": "ಅನುಸರಿಸಿ",
      "BannerDesc": "2005ರಿಂದ ರೈತರು ಮತ್ತು ಉದ್ಯಮಗಳಲ್ಲಿ ವಿಶ್ವಾಸ ಪಡೆದ ನಿಖರ ಎಂಜಿನಿಯರಿಂಗ್‌ನ ವಿದ್ಯುತ್ ಪರಿಹಾರಗಳು. ಸ್ಟಾರ್ಟರ್ ಮೋಟಾರ್, ರಿಲೇ ಮತ್ತು ಹಂಗಾಮಿ ಉತ್ಪನ್ನಗಳಲ್ಲಿ ನಾವೀನ್ಯತೆ ಮತ್ತು ಗುಣಮಟ್ಟ.",
      "UMA_NEWS": "🌟 ಉಮಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ • 2005 ರಿಂದ ವಿಶ್ವಾಸ ಮತ್ತು ನಾವೀನ್ಯತೆ ನೀಡುತ್ತಿದೆ • 🌟",
      "ProductsServices": "ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸೇವೆಗಳು",
      "Select product": "ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      "CH Contactor": "CH ಸಂಪರ್ಕಕಾರ",
      "MK-1 Coil": "MK-1 ಕಾಯಿಲ್",
      "Motor Starter": "ಮೋಟಾರ್ ಸ್ಟಾರ್ಟರ್",
      "Relay": "ರಿಲೇ",
      "NoProductsFound": "ಆಯ್ದ ವರ್ಗಕ್ಕೆ ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
      "MissionVision": "ಮಿಷನ್ ಮತ್ತು ದೃಷ್ಟಿ",
      "MissionVisionDesc": "ಉದ್ದೇಶದಿಂದ ಚಾಲಿತವಾಗಿರುವ ಉಮಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ವಿದ್ಯುತ್ ಘಟಕಗಳನ್ನು ತಯಾರಿಸುತ್ತದೆ. ಅಭಿವೃದ್ಧಿ ಮತ್ತು ನಾವೀನ್ಯತೆಯ ದೃಷ್ಟಿಯಿಂದ, ನಾವು ಕರ್ನಾಟಕದ ಕೈಗಾರಿಕಾ ಮತ್ತು ಕೃಷಿ ಪರಿಹಾರಗಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುತ್ತಿದ್ದೇವೆ. ಪ್ರತಿಯೊಂದು ಉತ್ಪನ್ನವೂ ನಮ್ಮ ನಿಖರತೆ, ನಂಬಿಕೆ ಮತ್ತು ಭದ್ರ ಭವಿಷ್ಯದ ಭರವಸೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.",
      "Home": "ಮುಖಪುಟ",
      "AboutUs": "ನಮ್ಮ ಬಗ್ಗೆ",
      "ContactUs": "ಸಂಪರ್ಕಿಸಿ",
      "Blog": "ಬ್ಲಾಗ್",
      "PrivacyPolicy": "ಗೌಪ್ಯತೆ ನೀತಿ",
      "TermsOfService": "ಸೇವಾ ನಿಯಮಗಳು"
    }
  }
}






i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
