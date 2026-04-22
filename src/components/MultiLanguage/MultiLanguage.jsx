import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Update active language dynamically
  };

  const [currLang, setCurrLang] = useState("en")

  useEffect(() => {
    changeLanguage(currLang);
  }, [currLang]);

  return (
    <div>
      <h1>{t('hello')}</h1>
      <select value={currLang} onChange={(e) => setCurrLang(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default MyComponent;