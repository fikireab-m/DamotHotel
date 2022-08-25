import React from "react";
import styled from "styled-components";

const FooterSection = styled.section`
  margin: 0 auto;
  background-color: var(--black2);
  color: var(--white);
  padding: 5vw;
  padding-bottom: 1rem;
  .footer-top {
    margin: 0 auto;
    padding: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    justify-content: center;
    align-items: center;
    gap: 1rem;
    div {
      margin-left: 2rem;
      a {
        display: block;
        width: max-content;
        margin-top: 0.5rem;
        text-decoration: none;
        text-overflow: ellipsis;
        text-transform: capitalize;
        color: var(--primary);
        transition: all 0.4s;
        &:hover {
          color: var(--primaryLight);
          font-weight: bold;
          text-decoration: underline;
          transform: translate(2px, -2px);
          box-shadow: -2px 2px 3px 0 var(--black3);
        }
      }
    }
  }
  .copywrite-section {
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    div {
      text-align: center;
      a {
        text-decoration: none;
        text-overflow: ellipsis;
        text-transform: capitalize;
        color: inherit;
      }
    }
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <FooterSection>
        <div className="footer-top">
          <div className="about-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              eos molestias quod sint ipsum possimus temporibus officia iste
              perspiciatis consectetur in fugiat repudiandae cum. Totam
              cupiditate nostrum ut neque ab?
            </p>
          </div>
          <div>
            <h3>Destination</h3>

            <a href="#">Europe</a>

            <a href="#">Australia</a>

            <a href="#">Asia</a>

            <a href="#">Canada</a>

            <a href="#">Dubai</a>
          </div>

          <div>
            <h3>Hotels</h3>

            <a href="#">Luxe Hotel</a>

            <a href="#">Italy 5 Star hotel</a>

            <a href="#">Dubai Hotel</a>

            <a href="#">Deluxe Hotel</a>

            <a href="#">BoraBora Hotel</a>
          </div>

          <div>
            <h3>Get In Touch</h3>

            <a href="#">
              <i className="icon-phone"></i> +251 584 567 890
            </a>

            <a href="#">
              <i className="icon-mail2"></i> info@damotel.com
            </a>

            <a href="#">
              <i className="icon-chat"></i> Live Chat
            </a>
          </div>
        </div>

        <div className="copywrite-section">
          <div>
            <p>
              <small>
                &copy; {year} <a href="">Damot Hotel.</a> All Rights Reserved.
              </small>
            </p>

            <a href="#">
              <i className="icon-twitter"></i>
            </a>

            <a href="#">
              <i className="icon-facebook"></i>
            </a>

            <a href="#">
              <i className="icon-linkedin"></i>
            </a>

            <a href="#">
              <i className="icon-dribbble"></i>
            </a>
          </div>
        </div>
      </FooterSection>
    </footer>
  );
};

export default Footer;
