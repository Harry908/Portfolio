/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import '../index.css';
interface ButtonProps {
  text: string;
  className?: string;
  id?: string,
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
  return (
    <a
      onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const target: HTMLElement | null = document.getElementById('counter');

        if (target && id) {
          // number offset = window.innerHeight * 0.15;
          const offset: number = window.innerHeight * 0.15;
          const top: number = target.getBoundingClientRect().top + window.scrollY - offset

          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
      className={`${className ?? ''} cta-wrapper`} id={`${id ?? ''}`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button