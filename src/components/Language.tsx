import { Container } from "react-bootstrap";
import { LABELS } from "../labels/Labels";
import { useAppContext } from "../contexts/Context";

const Language = () => {
  const { intl, changeIntl } = useAppContext();

  const isPL = intl === LABELS[0].intl;
  const handleLanguageChange = () => {
    if (isPL) {
      changeIntl(LABELS[1].intl);
    } else {
      changeIntl(LABELS[0].intl);
    }
  };

  return (
    <Container>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" checked={isPL} onChange={handleLanguageChange} />
          English
        </label>
      </div>
    </Container>
  );
};

export default Language;
